import Head from 'next/head'

export default function Simulator() {
  return (
    <>
      <Head>
        <title>Axiom Kinetic | AI Backtesting Simulator</title>
        <meta name="description" content="Validate your bio-investment hypotheses using high-frequency historical data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .sim-page {
          background-color: #111413;
          color: #e1e3e0;
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
          --color-surface: #111413;
          --color-surface-container-low: #191c1b;
          --color-surface-container: #1d201f;
          --color-surface-container-high: #272b29;
          --color-surface-container-highest: #323534;
          --color-primary: #b0c6ff;
          --color-tertiary: #44ddc1;
          --color-tertiary-container: #004d41;
          --color-on-tertiary-container: #1cc6ac;
          --color-error: #ffb4ab;
          --color-on-surface: #e1e3e0;
          --color-on-surface-variant: #bfc9c4;
          --color-outline-variant: #3f4945;
          --color-on-primary: #002d6e;
        }
        .glass-panel {
          background: rgba(29, 32, 31, 0.6);
          backdrop-filter: blur(20px);
        }
        .sim-page ::-webkit-scrollbar { width: 4px; }
        .sim-page ::-webkit-scrollbar-track { background: transparent; }
        .sim-page ::-webkit-scrollbar-thumb { background: #3f4945; border-radius: 10px; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 1.5rem;
          line-height: 1;
          display: inline-block;
          vertical-align: middle;
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>

      <div className="sim-page">
        {/* Top Nav */}
        <nav style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 50,
          background: 'rgba(2, 20, 12, 0.6)', backdropFilter: 'blur(20px)',
          boxShadow: '0px 24px 48px rgba(0,0,0,0.4)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0 2rem', height: '4rem'
        }}>
          <div style={{fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#2dd4bf'}}>Axiom Kinetic</div>
          <div className="hidden md:flex items-center" style={{gap: '2rem'}}>
            {['Dashboard', 'Analysis', 'Reports', 'Terminal', 'Glossary'].map((item, i) => (
              <a key={item} href="#" style={{
                color: i === 0 ? '#2dd4bf' : 'rgba(236,253,245,0.7)',
                borderBottom: i === 0 ? '2px solid #2dd4bf' : 'none',
                paddingBottom: '0.25rem',
                fontWeight: 700, fontSize: '0.875rem', letterSpacing: '-0.02em',
                textDecoration: 'none', transition: 'color 0.2s'
              }}>{item}</a>
            ))}
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <button style={{color: 'rgba(236,253,245,0.7)', background: 'none', border: 'none', cursor: 'pointer'}}>
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button style={{color: 'rgba(236,253,245,0.7)', background: 'none', border: 'none', cursor: 'pointer'}}>
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div style={{width: '2rem', height: '2rem', borderRadius: '50%', background: 'linear-gradient(135deg, #2dd4bf, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.75rem'}}>B</div>
          </div>
        </nav>

        {/* Sidebar */}
        <aside className="hidden lg:flex" style={{
          height: '100vh', width: '16rem', position: 'fixed', left: 0, top: 0, zIndex: 40,
          background: '#022c1e', flexDirection: 'column', padding: '6rem 1rem 1.5rem',
          gap: '2rem'
        }}>
          <div style={{padding: '0 0.5rem'}}>
            <div style={{fontSize: '1.125rem', fontWeight: 900, color: '#2dd4bf', letterSpacing: '-0.04em'}}>Axiom Kinetic</div>
            <div style={{fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(236,253,245,0.4)'}}>Laboratory Precision</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
            {[
              { icon: 'dashboard', label: 'Home', active: false },
              { icon: 'insights', label: 'Pulse', active: true },
              { icon: 'biotech', label: 'Research', active: false },
              { icon: 'description', label: 'History', active: false },
              { icon: 'currency_exchange', label: 'Exchange', active: false },
              { icon: 'menu_book', label: 'Terms', active: false },
            ].map(item => (
              <a key={item.label} href="#" style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.5rem 0.75rem', borderRadius: '0.5rem',
                color: item.active ? '#2dd4bf' : 'rgba(236,253,245,0.5)',
                fontWeight: item.active ? 700 : 500, fontSize: '0.75rem',
                letterSpacing: '0.05em', textDecoration: 'none',
                background: item.active ? 'rgba(4, 75, 53, 0.5)' : 'transparent',
                transition: 'all 0.2s'
              }}>
                <span className="material-symbols-outlined" style={{fontSize: '1.25rem'}}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
          <div style={{marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(4,75,53,0.4)', display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
            <button style={{width: '100%', background: '#14b8a6', color: '#00201a', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.875rem', border: 'none', cursor: 'pointer', marginBottom: '0.5rem'}}>
              Quick Trade
            </button>
            {[{icon: 'help', label: 'Support'}, {icon: 'logout', label: 'Sign Out'}].map(item => (
              <a key={item.label} href="#" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', color: 'rgba(236,253,245,0.5)', fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.05em'}}>
                <span className="material-symbols-outlined" style={{fontSize: '1.25rem'}}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{paddingLeft: undefined, paddingTop: '6rem', paddingBottom: '8rem', padding: '6rem 2rem 8rem'}} className="lg:pl-64">
          <div style={{maxWidth: '1600px', margin: '0 auto'}}>
            {/* Header */}
            <header style={{marginBottom: '3rem'}}>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem'}}>
                <span style={{
                  display: 'inline-block', padding: '0.125rem 0.5rem',
                  background: '#004d41', color: '#1cc6ac',
                  fontSize: '0.625rem', fontWeight: 700, letterSpacing: '-0.02em',
                  textTransform: 'uppercase', borderRadius: '0.125rem'
                }}>System Ready</span>
                <h1 style={{fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, margin: 0}}>
                  Backtesting <span style={{color: '#b0c6ff'}}>Simulator</span>
                </h1>
              </div>
              <p style={{color: '#bfc9c4', maxWidth: '42rem', fontSize: '0.875rem', lineHeight: 1.6}}>
                Validate your bio-investment hypotheses using high-frequency historical data. Our AI simulator accounts for slippage, regulatory shift delays, and clinical trial volatility.
              </p>
            </header>

            <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '2rem'}} className="lg:grid-cols-12">
              {/* Config Sidebar */}
              <section className="lg:col-span-4" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{background: '#1d201f', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(63,73,69,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}}>
                  <h3 style={{fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2dd4bf', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span className="material-symbols-outlined" style={{fontSize: '1rem'}}>settings_input_component</span>
                    Strategy Configuration
                  </h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    {/* Date Range */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <label style={{fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(236,253,245,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Historical Range</label>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {['2021-01', '2023-12'].map(d => (
                          <div key={d} style={{background: '#191c1b', padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <span style={{fontSize: '0.75rem', color: '#bfc9c4'}}>{d}</span>
                            <span className="material-symbols-outlined" style={{fontSize: '1rem', color: '#b0c6ff'}}>calendar_today</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Risk Profile */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <label style={{fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(236,253,245,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Risk Profile</label>
                      <div style={{display: 'flex', gap: '0.5rem'}}>
                        {[
                          { label: 'CONSERVATIVE', active: false },
                          { label: 'AGGRESSIVE', active: true },
                          { label: 'HEDGE', active: false },
                        ].map(btn => (
                          <button key={btn.label} style={{
                            flex: 1, padding: '0.5rem 0', fontSize: '0.625rem', fontWeight: 700,
                            borderRadius: '0.25rem', cursor: 'pointer', transition: 'all 0.2s',
                            background: btn.active ? 'rgba(176,198,255,0.2)' : 'rgba(4,75,53,0.4)',
                            color: btn.active ? '#b0c6ff' : 'rgba(236,253,245,0.4)',
                            border: btn.active ? '1px solid rgba(176,198,255,0.4)' : '1px solid transparent'
                          }}>{btn.label}</button>
                        ))}
                      </div>
                    </div>
                    {/* Trial Sensitivity */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <label style={{fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(236,253,245,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Trial Sensitivity</label>
                      <input type="range" defaultValue={70} style={{width: '100%', height: '4px', accentColor: '#2dd4bf', cursor: 'pointer'}} />
                      <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.625rem', color: '#bfc9c4'}}>
                        <span>Phase I Focus</span>
                        <span>FDA Critical</span>
                      </div>
                    </div>
                    {/* Run Button */}
                    <div style={{paddingTop: '1rem'}}>
                      <button style={{
                        width: '100%', padding: '1rem', background: '#b0c6ff', color: '#002d6e',
                        fontWeight: 900, borderRadius: '0.5rem', letterSpacing: '-0.02em',
                        border: 'none', cursor: 'pointer', fontSize: '0.875rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        transition: 'all 0.2s'
                      }}>
                        RUN SIMULATION <span className="material-symbols-outlined">play_arrow</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div style={{background: '#191c1b', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #44ddc1'}}>
                  <h4 style={{fontSize: '0.875rem', fontWeight: 700, color: '#44ddc1', marginBottom: '0.25rem'}}>AI Recommendation</h4>
                  <p style={{fontSize: '0.75rem', color: '#bfc9c4', lineHeight: 1.6}}>
                    Based on your aggressive profile, we suggest increasing weighting in{' '}
                    <span style={{color: '#e1e3e0', fontWeight: 600}}>Genomic Sequencing ETFs</span>{' '}
                    for the Q4 period.
                  </p>
                </div>
              </section>

              {/* Main Charts */}
              <section className="lg:col-span-8" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                {/* Metrics Grid */}
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}} className="md:grid-cols-4">
                  {[
                    { label: 'Total ROI', value: '+24.8%', color: '#44ddc1', sub: 'Alpha vs Benchmark' },
                    { label: 'Max Drawdown', value: '-8.4%', color: '#ffb4ab', sub: 'Relative Stability' },
                    { label: 'Sharpe Ratio', value: '2.84', color: '#b0c6ff', sub: 'Risk Adjusted' },
                    { label: 'Win Rate', value: '62%', color: '#e1e3e0', sub: '342 Trades' },
                  ].map(m => (
                    <div key={m.label} style={{background: '#1d201f', padding: '1rem', borderRadius: '0.75rem'}}>
                      <div style={{fontSize: '0.625rem', color: 'rgba(236,253,245,0.4)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem'}}>{m.label}</div>
                      <div style={{fontSize: '1.5rem', fontWeight: 900, color: m.color}}>{m.value}</div>
                      <div style={{fontSize: '0.625rem', fontWeight: 600, color: `${m.color}99`}}>{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Alpha Chart */}
                <div style={{background: '#272b29', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)'}}>
                  <div style={{padding: '1rem 1.5rem', borderBottom: '1px solid rgba(63,73,69,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3 style={{fontSize: '0.875rem', fontWeight: 700, letterSpacing: '-0.02em'}}>Cumulative Alpha Projection</h3>
                    <div style={{display: 'flex', gap: '1rem'}}>
                      {[
                        { label: 'Strategy', color: '#44ddc1' },
                        { label: 'S&P BioTech', color: 'rgba(225,227,224,0.2)' },
                      ].map(l => (
                        <div key={l.label} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: l.color}}>
                          <span style={{width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: l.color, display: 'inline-block'}}></span>
                          {l.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{padding: '1.5rem', height: '25rem', position: 'relative'}}>
                    {/* Grid lines */}
                    <div style={{position: 'absolute', inset: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', opacity: 0.1}}>
                      {[0,1,2,3].map(i => <div key={i} style={{borderTop: '1px solid #e1e3e0', width: '100%'}}></div>)}
                    </div>
                    <svg viewBox="0 0 1000 400" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                      <defs>
                        <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#44ddc1" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#44ddc1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,400 L0,380 L100,360 L200,370 L300,320 L400,340 L500,280 L600,290 L700,200 L800,180 L900,120 L1000,80 L1000,400 Z" fill="url(#areaGrad)" />
                      <path d="M0,380 L100,360 L200,370 L300,320 L400,340 L500,280 L600,290 L700,200 L800,180 L900,120 L1000,80" fill="none" stroke="#44ddc1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0,380 L100,375 L200,382 L300,370 L400,372 L500,365 L600,360 L700,355 L800,340 L900,345 L1000,335" fill="none" stroke="#e1e3e0" strokeWidth="2" strokeDasharray="8 4" opacity="0.2" />
                    </svg>
                  </div>
                </div>

                {/* Bento Grid */}
                <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}} className="md:grid-cols-2">
                  {/* Top Performer */}
                  <div style={{background: '#1d201f', padding: '1.5rem', borderRadius: '0.75rem', height: '12rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                      <div style={{fontSize: '0.625rem', fontWeight: 700, color: '#b0c6ff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem'}}>Top Performer</div>
                      <div style={{fontSize: '1.25rem', fontWeight: 700}}>Neuralink Therapeutics</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                      <span style={{fontSize: '0.75rem', color: '#bfc9c4'}}>Exit at $242.10</span>
                      <span style={{color: '#44ddc1', fontWeight: 900, fontSize: '1.125rem'}}>+42.1%</span>
                    </div>
                  </div>

                  {/* Sector Heatmap Card */}
                  <div style={{background: '#1d201f', padding: '1.5rem', borderRadius: '0.75rem', height: '12rem', overflow: 'hidden', position: 'relative'}}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(135deg, #022c1e 0%, #0f4c35 50%, #022c1e 100%)',
                      opacity: 0.6
                    }}></div>
                    <div style={{position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                      <div style={{fontSize: '0.625rem', fontWeight: 700, color: 'rgba(236,253,245,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Sector Heatmap</div>
                      <div style={{fontSize: '0.875rem', fontWeight: 600}}>Oncology sectors showing 12% increased volatility during simulation.</div>
                      <div style={{fontSize: '0.625rem', color: '#2dd4bf', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer'}}>View Deep Analysis →</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden" style={{
          position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 50,
          display: 'flex', justifyContent: 'space-around', alignItems: 'center',
          padding: '0 1rem', height: '5rem',
          background: 'rgba(2,20,12,0.8)', backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(20,184,166,0.2)',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.4)', borderRadius: '0.75rem 0.75rem 0 0'
        }}>
          {[
            { icon: 'radar', label: 'Radar', active: false },
            { icon: 'leaderboard', label: 'Charts', active: false },
            { icon: 'candlestick_chart', label: 'Trade', active: true },
            { icon: 'article', label: 'Reports', active: false },
            { icon: 'library_books', label: 'Glossary', active: false },
          ].map(item => (
            <a key={item.label} href="#" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: item.active ? '#2dd4bf' : 'rgba(236,253,245,0.4)',
              background: item.active ? 'rgba(20,184,166,0.1)' : 'transparent',
              padding: '0.25rem 0.75rem', borderRadius: '0.75rem',
              textDecoration: 'none', gap: '0.125rem'
            }}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <span style={{fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em'}}>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Live Pulse Indicator */}
        <div className="hidden lg:flex" style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 30,
          alignItems: 'center', gap: '0.75rem',
          background: '#323534', padding: '0.5rem 1rem',
          borderRadius: '9999px', border: '1px solid rgba(20,184,166,0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{position: 'relative', display: 'flex', height: '0.5rem', width: '0.5rem'}}>
            <span className="animate-ping" style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: '#44ddc1', opacity: 0.75
            }}></span>
            <span style={{position: 'relative', borderRadius: '50%', width: '0.5rem', height: '0.5rem', background: '#44ddc1', display: 'inline-flex'}}></span>
          </div>
          <span style={{fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e1e3e0'}}>Live Engine Connected</span>
        </div>
      </div>
    </>
  )
}