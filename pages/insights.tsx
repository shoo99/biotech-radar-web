import Head from 'next/head'

const reports = [
  {
    tag: 'Neurology',
    title: "Why Eli Lilly's Donanemab Approval is a Game Changer",
    desc: '알츠하이머 치료의 새로운 장을 여는 Eli Lilly의 Donanemab 승인이 시장 점유율과 환자 치료 경로에 미칠 영향.',
    author: 'Dr. Helena Vogt',
    meta: '12 Min Read • Oct 24',
    gradient: 'from-blue-900 via-indigo-900',
  },
  {
    tag: 'Genomics',
    title: 'CRISPR Cas9 vs. Base Editing: A Physician\'s Perspective',
    desc: '전통적인 CRISPR 기술과 차세대 Base Editing 기술의 임상적 효율성 및 안전성 비교 분석.',
    author: 'Dr. James Chen',
    meta: '18 Min Read • Oct 22',
    gradient: 'from-teal-900 via-cyan-900',
  },
  {
    tag: 'Drug Discovery',
    title: 'The Impact of AI in Drug Discovery',
    desc: 'AI 알고리즘이 신약 후보 물질 발굴 기간을 어떻게 단축시키고 있는지, 그리고 주요 제약사들의 AI 도입 전략.',
    author: 'Elena Rodriguez, PhD',
    meta: '10 Min Read • Oct 20',
    gradient: 'from-purple-900 via-blue-900',
  },
]

const expertFeed = [
  { handle: '@BioCap_Insider', role: 'Venture Partner', time: '5m ago', text: 'Eli Lilly의 이번 임상 결과는 예상보다 긍정적입니다. 특히 2차 평가지표에서의 성과가 주목할 만하며, 이는 $LLY 주가에 강력한 모멘텀이 될 것입니다.', featured: true },
  { handle: 'Dr. Jung Biotech', role: 'Principal Investigator', time: '24m ago', text: 'FDA의 최근 가이드라인은 유전자 치료제 승인 문턱을 낮추려는 의지가 보입니다. 중소형 바이오텍 기업들에게는 아주 유리한 환경이 조성되고 있습니다.', featured: false },
  { handle: 'Pharma_Whale', role: 'Equity Analyst', time: '1h ago', text: 'M&A 소문이 돌고 있는 몇몇 면역 항암제 기업들을 주시해야 합니다. 빅파마들의 현금 보유량이 늘어남에 따라 연말까지 대형 딜이 기대됩니다.', featured: false },
]

const sectors = [
  { name: 'Immunotherapy', change: '+12.4%', positive: true, path: 'M0 35 L10 32 L20 38 L30 25 L40 28 L50 15 L60 20 L70 5 L80 12 L90 2 L100 8' },
  { name: 'Gene Therapy', change: '+8.1%', positive: true, path: 'M0 38 L15 35 L30 36 L45 20 L60 25 L75 10 L90 12 L100 2' },
  { name: 'Rare Diseases', change: '-2.3%', positive: false, path: 'M0 5 L20 12 L40 8 L60 25 L80 20 L100 35' },
]

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', active: false, href: '/' },
  { icon: 'biotech', label: 'Clinical Trials', active: false, href: '#' },
  { icon: 'psychology', label: 'Expert Insights', active: true, href: '/insights' },
  { icon: 'account_balance', label: 'Portfolio', active: false, href: '#' },
  { icon: 'analytics', label: 'Sector Analysis', active: false, href: '#' },
]

export default function Insights() {
  return (
    <>
      <Head>
        <title>Expert Insights - Bio Investment Radar</title>
        <meta name="description" content="바이오/제약 분야 전문가 인사이트와 딥다이브 리포트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .insights-page { font-family: 'Inter', sans-serif; background: #f6fafe; color: #171c1f; }
        .font-headline { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 1.5rem; line-height: 1; display: inline-block; vertical-align: middle;
        }
        .mat-fill { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #dfe3e7; border-radius: 10px; }
        .report-card:hover .report-img { transform: scale(1.1); }
        .report-img { transition: transform 0.5s ease; }
      `}</style>

      <div className="insights-page min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col py-6 px-4 z-50"
          style={{ background: '#00152a', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
          <div style={{ marginBottom: '2rem', padding: '0 0.5rem' }}>
            <h1 className="font-headline" style={{ fontSize: '1.125rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>Bio Investment Radar</h1>
            <p style={{ color: 'rgba(240,244,248,0.6)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Sovereign Intelligence</p>
          </div>
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navItems.map(item => (
              <a key={item.label} href={item.href} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.625rem 0.75rem', borderRadius: '0.5rem',
                color: item.active ? 'white' : 'rgba(240,244,248,0.6)',
                fontWeight: item.active ? 700 : 400, fontSize: '0.875rem', letterSpacing: '0.02em',
                background: item.active ? 'rgba(208,228,255,0.1)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.2s'
              }}>
                <span className={`material-symbols-outlined ${item.active ? 'mat-fill' : ''}`}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>
          {/* Pro Plan */}
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #102a43, #00152a)', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '0.75rem', marginBottom: '0.25rem' }}>PRO PLAN</p>
              <p style={{ color: 'rgba(240,244,248,0.6)', fontSize: '0.625rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>Sovereign insights for professional biopharma investors.</p>
              <button style={{ width: '100%', padding: '0.5rem', background: '#d0e4ff', color: '#021d33', fontWeight: 700, fontSize: '0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>Upgrade to Pro</button>
            </div>
            {[{ icon: 'settings', label: 'Settings' }, { icon: 'help', label: 'Support' }].map(item => (
              <a key={item.label} href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.75rem', color: 'rgba(240,244,248,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main style={{ marginLeft: undefined }} className="md:ml-64 min-h-screen">
          {/* Top Nav */}
          <header style={{ position: 'sticky', top: 0, zIndex: 40, background: '#f6fafe', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem', borderBottom: '1px solid #f0f4f8' }}>
            <div style={{ flex: 1, maxWidth: '28rem', position: 'relative' }}>
              <span className="material-symbols-outlined" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#43474d', fontSize: '1.25rem' }}>search</span>
              <input type="text" placeholder="분석 리포트, 티커 또는 전문가 검색..."
                style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '0.75rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', background: '#e4e9ed', border: 'none', borderRadius: '9999px', fontSize: '0.875rem', outline: 'none', color: '#171c1f' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1.5rem' }}>
              <button style={{ position: 'relative', color: '#43474d', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%' }}>
                <span className="material-symbols-outlined">notifications</span>
                <span style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', width: '0.5rem', height: '0.5rem', background: '#ba1a1a', borderRadius: '50%' }}></span>
              </button>
              <button style={{ color: '#43474d', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%' }}>
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1.5rem', borderLeft: '1px solid #f0f4f8' }}>
                <div className="hidden sm:block" style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.75rem', color: '#43474d' }}>Premium Analyst</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#00152a', fontFamily: 'Manrope, sans-serif' }}>Dr. Sarah Kim</p>
                </div>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, #102a43, #4a607a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.875rem', border: '2px solid #d1e4ff' }}>SK</div>
              </div>
            </div>
          </header>

          <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Featured Hero */}
            <section style={{ position: 'relative', height: '30rem', borderRadius: '1rem', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #001a3d 0%, #003366 40%, #006644 100%)' }}></div>
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', width: '20rem', height: '20rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(110,251,190,0.15) 0%, transparent 70%)' }}></div>
              <div style={{ position: 'absolute', bottom: '-3rem', left: '30%', width: '15rem', height: '15rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(176,198,255,0.1) 0%, transparent 70%)' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #00152a 0%, rgba(0,21,42,0.5) 50%, transparent 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ padding: '0.25rem 0.75rem', background: '#6ffbbe', color: '#002113', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '9999px' }}>Featured Deep Dive</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>schedule</span> 15 min read
                  </span>
                </div>
                <h2 className="font-headline" style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, maxWidth: '48rem', lineHeight: 1.15 }}>
                  The Next Frontier of Obesity Drugs: GLP-1 and Beyond
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', maxWidth: '40rem' }}>
                  비만 치료제의 혁명, GLP-1 수용체 작용제를 넘어선 차세대 병용 요법과 시장 재편에 대한 심층 분석.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'linear-gradient(135deg, #4a607a, #102a43)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, border: '2px solid rgba(255,255,255,0.2)', fontSize: '0.875rem' }}>MT</div>
                    <div style={{ color: 'white' }}>
                      <p style={{ fontWeight: 700, fontSize: '0.875rem' }}>Dr. Marcus Thorne</p>
                      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>Senior Biotech Strategist</p>
                    </div>
                  </div>
                  <button style={{ background: 'linear-gradient(135deg, #d1e4ff, #b1c9e6)', color: '#011d35', padding: '0.75rem 2rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.875rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    리포트 읽기 <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Main 65/35 Layout */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }} className="lg:flex-row">
              {/* Left: Reports */}
              <div className="lg:w-[65%]" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="font-headline" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00152a' }}>Deep Dive Reports</h3>
                  <button style={{ fontSize: '0.875rem', fontWeight: 700, color: '#7a92b0', background: 'none', border: 'none', cursor: 'pointer' }}>View all reports</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {reports.map((r, i) => (
                    <div key={i} className="report-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', display: 'flex', gap: '1.5rem', transition: 'background 0.3s', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#eaeef2')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'white')}>
                      <div style={{ width: '10rem', height: '10rem', borderRadius: '0.75rem', overflow: 'hidden', flexShrink: 0 }}>
                        <div className="report-img" style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${r.gradient.replace('from-', '').replace(/ via-.*/, '')} 0%, #1e3a5f 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.3)' }}>biotech</span>
                        </div>
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#005236', background: 'rgba(111,251,190,0.3)', padding: '0.125rem 0.5rem', borderRadius: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.tag}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.125rem 0.5rem', background: 'rgba(199,223,253,0.3)', borderRadius: '0.25rem', color: '#4c637d', fontSize: '0.625rem', fontWeight: 700 }}>
                            <span className="material-symbols-outlined mat-fill" style={{ fontSize: '0.75rem' }}>verified_user</span>
                            AI Fact-Checked
                          </div>
                        </div>
                        <h4 className="font-headline" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#00152a', lineHeight: 1.3, marginBottom: '0.75rem' }}>{r.title}</h4>
                        <p style={{ fontSize: '0.875rem', color: '#43474d', lineHeight: 1.6, flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{r.desc}</p>
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(195,198,206,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, #4a607a, #102a43)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.5rem', fontWeight: 700 }}>
                              {r.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
                            </div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#171c1f' }}>{r.author}</span>
                          </div>
                          <span style={{ fontSize: '0.625rem', color: '#43474d', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{r.meta}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Widgets */}
              <div className="lg:w-[35%]" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {/* Trending Sectors */}
                <div style={{ background: '#f0f4f8', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(195,198,206,0.1)' }}>
                  <h3 className="font-headline" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#00152a', marginBottom: '1.5rem' }}>Trending Sectors</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {sectors.map((s, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'white', borderRadius: '0.75rem' }}>
                        <div>
                          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00152a' }}>{s.name}</p>
                          <p style={{ fontSize: '0.625rem', fontWeight: 700, color: s.positive ? '#00a472' : '#ba1a1a' }}>{s.change}</p>
                        </div>
                        <div style={{ width: '4rem', height: '2rem', overflow: 'hidden' }}>
                          <svg viewBox="0 0 100 40" style={{ width: '100%', height: '100%', fill: 'none', strokeWidth: 2, strokeLinecap: 'round' }}>
                            <path d={s.path} stroke={s.positive ? '#00a472' : '#ba1a1a'} />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expert Feed */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="font-headline" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#00152a' }}>Real-Time Expert Feed</h3>
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#43474d', background: '#eaeef2', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>LIVE</span>
                  </div>
                  <div className="scrollbar-thin" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '37.5rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
                    {expertFeed.map((item, i) => (
                      <div key={i} style={{ padding: '1rem', background: 'white', borderRadius: '0.75rem', borderLeft: `4px solid ${item.featured ? '#00152a' : 'rgba(73,96,124,0.4)'}`, boxShadow: '0 2px 8px rgba(23,28,31,0.04)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                          <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: `linear-gradient(135deg, ${item.featured ? '#00152a, #102a43' : '#4a607a, #324861'})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.625rem', fontWeight: 700 }}>
                            {item.handle.replace('@', '').slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00152a', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              {item.handle}
                              <span className="material-symbols-outlined mat-fill" style={{ fontSize: '0.75rem', color: '#3b82f6' }}>verified</span>
                            </p>
                            <p style={{ fontSize: '0.625rem', color: '#43474d', fontWeight: 500 }}>{item.time} • {item.role}</p>
                          </div>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: '#171c1f', lineHeight: 1.6 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <button style={{ width: '100%', padding: '0.75rem', background: '#eaeef2', color: '#43474d', fontWeight: 700, fontSize: '0.75rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>
                    전문가 피드 더보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile Nav */}
        <nav className="md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#f6fafe', borderTop: '1px solid #f0f4f8', padding: '0.5rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 50 }}>
          {[
            { icon: 'dashboard', label: 'Dashboard', active: false },
            { icon: 'biotech', label: 'Clinical', active: false },
            { icon: 'psychology', label: 'Insights', active: true },
            { icon: 'account_balance', label: 'Portfolio', active: false },
            { icon: 'settings', label: 'Settings', active: false },
          ].map(item => (
            <a key={item.label} href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', color: item.active ? '#00152a' : '#43474d', textDecoration: 'none' }}>
              <span className={`material-symbols-outlined ${item.active ? 'mat-fill' : ''}`}>{item.icon}</span>
              <span style={{ fontSize: '0.625rem', fontWeight: item.active ? 700 : 500 }}>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}