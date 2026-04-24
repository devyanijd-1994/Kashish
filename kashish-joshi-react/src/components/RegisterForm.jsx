import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitLead } from '../utils/submitLead';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', segment: '', capital: '', message: '', agree: false });
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.segment) {
      alert('Please fill in Name, Phone and Segment.');
      return;
    }
    setLoading(true);
    try {
      await submitLead({ name: form.name, number: form.phone, email: form.email, segment: form.segment });
      alert('Thank you! We will get back to you shortly.');
      setForm({ name: '', email: '', phone: '', segment: '', capital: '', message: '', agree: false });
    } catch {
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', border: '1px solid #dde3e8', borderRadius: '8px',
    padding: '0.65rem 0.9rem', fontSize: '0.85rem', outline: 'none',
    color: '#333', background: '#fff', boxSizing: 'border-box',
    fontFamily: 'inherit',
  };
  const labelStyle = { fontSize: '0.8rem', fontWeight: 600, color: '#1a1a2e', display: 'block', marginBottom: '0.35rem' };

  return (
    <section style={{ background: '#eef1f8', padding: '3rem 1rem' }}>
      <div className="max-w-4xl mx-auto">
        <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #c9a84c', borderRadius: '999px', padding: '0.25rem 0.85rem', marginBottom: '0.85rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1a3a6e', display: 'inline-block' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#1a3a6e' }}>Secure Enquiry</span>
          </div>

          <h2 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '1.8rem', fontWeight: 400, color: '#1a1a2e', marginBottom: '0.3rem' }}>Register Now!</h2>
          <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.75rem' }}>Tell us a bit about you and we'll get back quickly.</p>

          <div style={{ width: '100%', height: '1px', background: '#eee', marginBottom: '1.75rem' }} />

          <form onSubmit={handleSubmit}>
            {/* Row 1: Name + Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input type="text" placeholder="Full name" style={inputStyle}
                  value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input type="email" placeholder="you@example.com" style={inputStyle}
                  value={form.email} onChange={e => set('email', e.target.value)} />
                <p style={{ fontSize: '0.72rem', color: '#aaa', marginTop: '0.3rem' }}>Optional, but helps us share details faster.</p>
              </div>
            </div>

            {/* Row 2: Phone + Segment */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Contact Number *</label>
                <input type="tel" placeholder="10-digit mobile" style={inputStyle}
                  value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Segment *</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ ...inputStyle, appearance: 'none', color: form.segment ? '#333' : '#aaa' }}
                    value={form.segment} onChange={e => set('segment', e.target.value)}>
                    <option value="">— Select Segment —</option>
                    <option>Stock Cash</option>
                    <option>Option</option>
                    <option>Future</option>
                    <option>Banknifty / Nifty Options</option>
                    <option>Banknifty / Nifty Future</option>
                    <option>Commodity Services</option>
                  </select>
                  <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#1a1a2e', fontSize: '0.75rem', pointerEvents: 'none' }} />
                </div>
              </div>
            </div>

            {/* Row 3: Trading Capital (half width) */}
            <div style={{ marginBottom: '1.25rem', maxWidth: 'calc(50% - 0.625rem)' }}>
              <label style={labelStyle}>Trading Capital *</label>
              <div style={{ position: 'relative' }}>
                <select style={{ ...inputStyle, appearance: 'none', color: form.capital ? '#333' : '#aaa' }}
                  value={form.capital} onChange={e => set('capital', e.target.value)}>
                  <option value="">— Select Trading Capital —</option>
                  <option>Below ₹1 Lakh</option>
                  <option>₹1L – ₹5L</option>
                  <option>₹5L – ₹10L</option>
                  <option>Above ₹10L</option>
                </select>
                <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#1a1a2e', fontSize: '0.75rem', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Message</label>
              <textarea placeholder="Tell us what you're looking for (optional)"
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                value={form.message} onChange={e => set('message', e.target.value)}
              />
            </div>

            {/* Checkbox */}
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.78rem', color: '#555', marginBottom: '1.5rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.agree} onChange={e => set('agree', e.target.checked)}
                style={{ marginTop: '2px', flexShrink: 0, accentColor: '#1a3a6e' }} />
              <span>
                I agree to be contacted by phone/WhatsApp and accept the{' '}
                <Link to="/privacy-policy" style={{ color: '#1a3a6e', fontWeight: 600 }}>Privacy Policy</Link>
                {' '}&amp;{' '}
                <Link to="/terms-condition" style={{ color: '#1a3a6e', fontWeight: 600 }}>Terms</Link>.
              </span>
            </label>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button type="submit" disabled={loading} style={{
                background: '#1a3a6e', color: '#fff', fontWeight: 700,
                padding: '0.7rem 2rem', borderRadius: '8px', border: 'none',
                fontSize: '0.88rem', cursor: 'pointer', opacity: loading ? 0.7 : 1,
              }}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button type="button" onClick={() => setForm({ name: '', email: '', phone: '', segment: '', capital: '', message: '', agree: false })}
                style={{
                  background: '#fff', color: '#1a1a2e', fontWeight: 600,
                  padding: '0.7rem 1.5rem', borderRadius: '8px',
                  border: '1px solid #dde3e8', fontSize: '0.88rem', cursor: 'pointer',
                }}>
                Clear
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
