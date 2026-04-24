import { useState } from 'react';

const FAQS = [
  { q: 'Is Kashish Joshi Research SEBI-registered?', a: 'Yes. We operate as a SEBI-registered Research Analyst. Please refer to our Disclaimer and Terms pages for full registration details.' },
  { q: 'How can I contact support?', a: 'You can reach us at +91 91717 18451 or email info@kashishjoshiresearch.com. Support is available Mon–Sat, 9am–7pm IST.' },
  { q: 'What services do you offer?', a: 'We offer Stock Cash, Options, Futures, Banknifty/Nifty Options & Futures, Systematic Trading Plan, and Commodity Services.' },
  { q: 'How will I receive recommendations?', a: 'Through your registered mobile/email via SMS and WhatsApp during market hours, as per the subscribed service.' },
  { q: 'Do you guarantee profits or returns?', a: 'No. Markets involve risk and past performance is not indicative of future results. We provide research-based views only.' },
  { q: 'Do you offer free trials or samples?', a: 'We occasionally offer demo calls. Please contact us directly to check current availability of trial services.' },
  { q: 'What is your refund/cancellation policy?', a: 'Please refer to our Refund Policy page for complete details on cancellations and refund eligibility.' },
  { q: 'Do you manage funds or place orders on my behalf?', a: 'No. We are a research analyst firm. We only provide recommendations — all trading decisions and order placements are made by you.' },
  { q: 'How do you assess suitability before onboarding?', a: 'We conduct a brief profiling call to understand your capital, risk appetite, and trading goals before recommending a suitable plan.' },
  { q: 'How can I raise a complaint or escalate an issue?', a: 'You can write to us at info@kashishjoshiresearch.com or call our helpline. For SEBI-related grievances, you may also approach SEBI SCORES.' },
];

const INITIAL_COUNT = 5;

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? FAQS : FAQS.slice(0, INITIAL_COUNT);

  return (
    <section style={{ background: '#eef1f8', padding: '3rem 1rem' }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#1a3a6e', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            NEED CLARITY?
          </p>
          <h2 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 400, color: '#1a1a2e' }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {visible.map((faq, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1a1a2e' }}>{faq.q}</span>
                <i className={`fas fa-chevron-${open === i ? 'up' : 'down'}`}
                  style={{ fontSize: '0.72rem', color: '#1a3a6e', flexShrink: 0, marginLeft: '1rem' }} />
              </button>
              {open === i && (
                <div style={{ padding: '0 1.25rem 1rem', fontSize: '0.84rem', color: '#555', lineHeight: 1.75 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show all / Show fewer button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => { setShowAll(s => !s); if (showAll) setOpen(null); }}
            style={{
              background: 'transparent',
              border: '1.5px solid #1a3a6e',
              color: '#1a3a6e',
              borderRadius: '999px',
              padding: '0.55rem 1.75rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1a3a6e'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a3a6e'; }}
          >
            {showAll ? 'Show fewer' : `Show all ${FAQS.length} FAQs`}
          </button>
        </div>

      </div>
    </section>
  );
}
