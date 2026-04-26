import { Link } from 'react-router-dom';

const POSTS = [
  {
    img: '/assets/images/blog1.png',
    date: 'Sep 18',
    month: 'SEP 18',
    fullDate: 'September 18, 2025',
    category: 'Business',
    title: 'Calls & Puts Made Simple: A Practical Guide to Options Trading',
    desc: 'Understand how call and put options work, when to buy vs. sell, how payoffs, Greeks, IV, and expiry affect returns, and which beginner-friendly strategies make sense in real markets.',
    featured: true,
  },
  {
    img: '/assets/images/blog2.png',
    fullDate: 'September 19, 2025',
    category: 'Business',
    title: 'Understanding Market Trends & Trading Signals',
    desc: '',
    featured: false,
  },
  {
    img: '/assets/images/blog3.png',
    fullDate: 'September 18, 2025',
    category: 'Business',
    title: 'IPO Strategies in India: From Application to Listing-Day Decisions',
    desc: '',
    featured: false,
  },
];

export default function BlogSection() {
  const [featured, ...rest] = POSTS;

  return (
    <section style={{ background: '#fff', padding: '3rem 1rem' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <div style={{ width: '28px', height: '2px', background: '#c9a84c' }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase' }}>NEWS FEEDS</span>
          </div>
          <h2 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 400, color: '#1a1a2e' }}>
            Company Blog
          </h2>
        </div>

        {/* Grid: big left + 2 small right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.65fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* Featured post */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', background: '#fff' }}>
            <div style={{ position: 'relative' }}>
              <img src={featured.img} alt={featured.title}
                style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
              {/* Date badge */}
              <div style={{
                position: 'absolute', top: '1rem', left: '1rem',
                background: '#c9a84c', color: '#fff',
                fontSize: '0.7rem', fontWeight: 700,
                padding: '0.25rem 0.65rem', borderRadius: '6px',
                letterSpacing: '0.05em',
              }}>
                {featured.month}
              </div>
              {/* Category badge */}
              <div style={{
                position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                background: 'rgba(3,16,49,0.75)', color: '#fff',
                fontSize: '0.65rem', fontWeight: 600,
                padding: '0.2rem 0.6rem', borderRadius: '4px',
              }}>
                {featured.category}
              </div>
            </div>
            <div style={{ padding: '1.25rem 1.4rem 1.5rem' }}>
              <h3 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '1.15rem', fontWeight: 400, color: '#1a1a2e', marginBottom: '0.6rem', lineHeight: 1.4 }}>
                <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>{featured.title}</Link>
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#777', lineHeight: 1.75 }}>{featured.desc}</p>
            </div>
          </div>

          {/* Right: 2 small cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {rest.map((post, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', background: '#fff' }}>
                <div style={{ position: 'relative' }}>
                  <img src={post.img} alt={post.title}
                    style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute', bottom: '0.6rem', right: '0.6rem',
                    background: 'rgba(3,16,49,0.75)', color: '#fff',
                    fontSize: '0.62rem', fontWeight: 600,
                    padding: '0.18rem 0.5rem', borderRadius: '4px',
                  }}>
                    {post.category}
                  </div>
                </div>
                <div style={{ padding: '0.85rem 1rem 1rem' }}>
                  <p style={{ fontSize: '0.72rem', color: '#aaa', marginBottom: '0.3rem' }}>{post.fullDate}</p>
                  <h4 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '0.9rem', fontWeight: 400, color: '#1a1a2e', lineHeight: 1.45 }}>
                    <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>{post.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer link */}
        <div style={{ marginTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#888' }}>We have articles on a range of topics</span>
          <Link to="/blog" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a1a2e', textDecoration: 'none' }}>
            View All Blogs →
          </Link>
        </div>

      </div>
    </section>
  );
}
