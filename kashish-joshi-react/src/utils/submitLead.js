// In dev: Vite proxy handles CORS by routing through localhost
// In prod: deploy on same domain or configure CORS on server
const IS_DEV = import.meta.env.DEV;

const HOME_URL = IS_DEV ? '/api/home' : 'http://kashishweb.questdigiflex.in/home.php';
const INHOME_URL = IS_DEV ? '/api/inhome' : 'http://kashishweb.questdigiflex.in/inhome.php';

function buildPayload(data) {
  return JSON.stringify({
    name: data.name || '',
    number: data.number || '',
    email: data.email || '',
    segment: data.segment || '',
  });
}

/** Home page forms → /home.php */
export async function submitLead(data) {
  const res = await fetch(HOME_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: buildPayload(data),
  });
  if (!res.ok) throw new Error(`Server error: ${res.status}`);
  return res;
}

/** Landing page form → /inhome.php */
export async function submitLandingLead(data) {
  const res = await fetch(INHOME_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: buildPayload(data),
  });
  if (!res.ok) throw new Error(`Server error: ${res.status}`);
  return res;
}
