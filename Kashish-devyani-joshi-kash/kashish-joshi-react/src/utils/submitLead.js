// In dev: Vite proxy handles CORS by routing through localhost
// In prod: deploy on same domain or configure CORS on server
const IS_DEV = import.meta.env.DEV;

const HOME_URL = IS_DEV ? '/api/home' : 'https://kashishweb.questdigiflex.in/home.php/';
const INHOME_URL = IS_DEV ? '/api/home' : 'https://kashishweb.questdigiflex.in/home.php/';

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

/** Home page forms → /home.php */
export async function submitLead(data) {
  console.log('Submitting to:', HOME_URL);
  console.log('Payload:', buildPayload(data));
  console.log('Token:', BEARER_TOKEN);
  
  const res = await fetch(HOME_URL, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_TOKEN}`
    },
    body: buildPayload(data),
  });
  
  console.log('Response status:', res.status);
  console.log('Response headers:', res.headers);
  
  if (!res.ok) {
    const errorText = await res.text();
    console.log('Error response:', errorText);
    throw new Error(`Server error: ${res.status} - ${errorText}`);
  }
  return res;
}

/** Landing page form → /home.php */
export async function submitLandingLead(data) {
  console.log('Submitting landing to:', INHOME_URL);
  console.log('Payload:', buildPayload(data));
  
  const res = await fetch(INHOME_URL, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_TOKEN}`
    },
    body: buildPayload(data),
  });
  
  console.log('Landing response status:', res.status);
  
  if (!res.ok) {
    const errorText = await res.text();
    console.log('Landing error response:', errorText);
    throw new Error(`Server error: ${res.status} - ${errorText}`);
  }
  return res;
}
