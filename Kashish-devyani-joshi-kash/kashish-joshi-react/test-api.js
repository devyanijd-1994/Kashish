// Simple test script to check API endpoints
const testData = {
  name: 'Test User',
  number: '9876543210',
  email: 'test@example.com',
  segment: 'Option',
  investment: '₹1L – ₹5L'
};

async function testAPI() {
  try {
    console.log('Testing /api/inhome endpoint...');
    
    const formData = new FormData();
    formData.append('name', testData.name);
    formData.append('number', testData.number);
    formData.append('email', testData.email);
    formData.append('segment', testData.segment);
    formData.append('investment', testData.investment);
    
    const response = await fetch('/api/inhome', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', [...response.headers.entries()]);
    
    const text = await response.text();
    console.log('Response body:', text);
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run test if this script is executed directly
if (typeof window !== 'undefined') {
  testAPI();
}