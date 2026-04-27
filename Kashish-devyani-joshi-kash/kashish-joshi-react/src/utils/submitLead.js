// In dev: Vite proxy handles CORS by routing through localhost
// In prod: deploy on same domain or configure CORS on server
const IS_DEV = import.meta.env.DEV;

const HOME_URL = IS_DEV ? '/api/home' : 'https://kashishjoshiresearch.com/home.php';
const INHOME_URL = IS_DEV ? '/api/inhome' : 'https://kashishjoshiresearch.com/inhome.php';

// Bearer token for API authentication
const BEARER_TOKEN = 'KashishWeb@2024#SecureToken';

function buildPayload(data) {
  return JSON.stringify({
    name: data.name || '',
    number: data.number || '',
    email: data.email || '',
    segment: data.segment || 'Equity',
    investment: data.investment || '',
  });
}

async function makeRequest(url, data, retryCount = 0) {
  const maxRetries = 3;
  
  try {
    console.log(`Attempt ${retryCount + 1} - Submitting to:`, url);
    console.log('Data:', data);
    
    // Always send as form data since the PHP backend expects POST parameters
    const formData = new FormData();
    formData.append('name', data.name || '');
    formData.append('number', data.number || '');
    formData.append('email', data.email || '');
    formData.append('segment', data.segment || 'Equity');
    formData.append('investment', data.investment || '');
    
    // Only add token in production
    if (!IS_DEV) {
      formData.append('token', BEARER_TOKEN);
    }
    
    let headers = {
      'Accept': 'application/json',
    };
    
    // Only add auth headers in production (proxy handles it in dev)
    if (!IS_DEV) {
      headers['Authorization'] = `Bearer ${BEARER_TOKEN}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });
    
    console.log('Response status:', response.status);
    
    if (response.ok) {
      return response;
    }
    
    // If we get an error, try JSON approach as fallback
    if (response.status === 400 && retryCount === 0) {
      console.log('Form data failed, trying JSON approach...');
      return makeJsonRequest(url, data);
    }
    
    const errorText = await response.text();
    throw new Error(`Server error: ${response.status} - ${errorText}`);
    
  } catch (error) {
    console.error(`Attempt ${retryCount + 1} failed:`, error);
    
    if (retryCount < maxRetries - 1) {
      console.log(`Retrying in 1 second... (${retryCount + 1}/${maxRetries})`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return makeRequest(url, data, retryCount + 1);
    }
    
    throw error;
  }
}

async function makeJsonRequest(url, data) {
  try {
    console.log('Trying JSON approach...');
    
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    
    // Only add auth headers in production (proxy handles it in dev)
    if (!IS_DEV) {
      headers['Authorization'] = `Bearer ${BEARER_TOKEN}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: buildPayload(data),
    });
    
    console.log('JSON response status:', response.status);
    
    if (response.ok) {
      return response;
    }
    
    const errorText = await response.text();
    throw new Error(`JSON request failed: ${response.status} - ${errorText}`);
    
  } catch (error) {
    console.error('JSON request error:', error);
    throw error;
  }
}

/** Home page forms → /home.php */
export async function submitLead(data) {
  return makeRequest(HOME_URL, data);
}

/** Landing page form → /inhome.php */
export async function submitLandingLead(data) {
  return makeRequest(INHOME_URL, data);
}
