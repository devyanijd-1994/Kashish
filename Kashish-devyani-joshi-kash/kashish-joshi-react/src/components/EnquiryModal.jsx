import { useState } from 'react';
import { submitLead } from '../utils/submitLead';

export default function EnquiryModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', capital: '', segment: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (k, v) => { 
    setForm(f => ({ ...f, [k]: v })); 
    // Clear error for this field when user starts typing
    if (errors[k]) {
      setErrors(e => ({ ...e, [k]: '' })); 
    }
  };

  const validate = () => {
    const e = {};
    
    // Name validation
    if (!form.name.trim()) {
      e.name = 'Please enter your name.';
    } else if (form.name.trim().length < 2) {
      e.name = 'Name must be at least 2 characters long.';
    } else if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) {
      e.name = 'Name should only contain letters and spaces.';
    }
    
    // Phone validation
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number.';
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      e.phone = 'Please enter a valid 10-digit phone number.';
    }
    
    // Email validation
    if (!form.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Please enter a valid email address.';
    }
    
    // Capital validation (if uncommented)
    // if (!form.capital) e.capital = 'Please select trading capital.';
    
    // Segment validation
    if (!form.segment) {
      e.segment = 'Please select a segment.';
    }
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await submitLead({ 
        name: form.name.trim(), 
        number: form.phone.trim(), 
        email: form.email.trim(),
        segment: form.segment 
      });
      alert('Thank you! We will call you back shortly.');
      onClose();
    } catch {
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', border: '1px solid #ddd', borderRadius: '8px',
    padding: '0.5rem 0.75rem', fontSize: '0.85rem', outline: 'none',
    boxSizing: 'border-box', fontFamily: 'inherit', color: '#222',
  };
  const labelStyle = { fontSize: '0.82rem', fontWeight: 600, color: '#222', display: 'block', marginBottom: '0.25rem' };

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000,
      }} />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff', borderRadius: '12px',
        width: 'min(400px, 95vw)',
        zIndex: 1001, overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      }}>
        {/* Header */}
        <div style={{ background: '#1a3a6e', padding: '0.75rem 1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Request a Callback</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff4444', fontSize: '1rem', lineHeight: 1 }}>✕</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>

            {/* Name */}
            <div>
              <label style={labelStyle}>Name *</label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                value={form.name} 
                onChange={e => {
                  // Allow only letters and spaces
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  set('name', value);
                }}
                style={{ ...inputStyle, borderColor: errors.name ? '#e53e3e' : '#ddd' }} 
              />
              {errors.name && <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: '0.3rem' }}>{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>Phone *</label>
              <input 
                type="tel" 
                placeholder="10-digit mobile" 
                value={form.phone} 
                onChange={e => {
                  // Only allow digits and limit to 10 characters
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  set('phone', value);
                }}
                maxLength="10"
                style={{ ...inputStyle, borderColor: errors.phone ? '#e53e3e' : '#ddd' }} 
              />
              {errors.phone && <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: '0.3rem' }}>{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                style={{
                  ...inputStyle,
                  borderColor: errors.email ? '#e53e3e' : '#ddd'
                }}
              />
              {errors.email && (
                <p style={{
                  color: '#e53e3e',
                  fontSize: '0.82rem',
                  marginTop: '0.3rem'
                }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Trading Capital */}
            {/* <div>
              <label style={labelStyle}>Trading Capital *</label>
              <div style={{ position: 'relative' }}>
                <select value={form.capital} onChange={e => set('capital', e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', borderColor: errors.capital ? '#e53e3e' : '#ddd', color: form.capital ? '#222' : '#888' }}>
                  <option value="">-- Select Trading Capital --</option>
                  <option>Below ₹1 Lakh</option>
                  <option>₹1L – ₹5L</option>
                  <option>₹5L – ₹10L</option>
                  <option>Above ₹10L</option>
                </select>
                <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#333' }} />
              </div>
              {errors.capital && <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: '0.3rem' }}>{errors.capital}</p>}
            </div> */}

            {/* Segment */}
            <div>
              <label style={labelStyle}>Segment *</label>
              <div style={{ position: 'relative' }}>
                <select value={form.segment} onChange={e => set('segment', e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', borderColor: errors.segment ? '#e53e3e' : '#ddd', color: form.segment ? '#222' : '#888' }}>
                  <option value="">-- Select Segment --</option>
                  <option>Stock Cash</option>
                  <option>Option</option>
                  <option>Future</option>
                  <option>Banknifty / Nifty Options</option>
                  <option>Banknifty / Nifty Future</option>
                  <option>Commodity Services</option>
                </select>
                <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#333' }} />
              </div>
              {errors.segment && <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: '0.3rem' }}>{errors.segment}</p>}
            </div>

          </div>

          {/* Footer buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #f0f0f0' }}>
            <button type="button" onClick={onClose}
              style={{ padding: '0.5rem 1.1rem', borderRadius: '8px', border: 'none', background: '#e8e8e8', color: '#333', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer' }}>
              Cancel
            </button>
            <button type="submit" disabled={loading}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '8px', border: 'none', background: '#5b5bd6', color: '#fff', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
