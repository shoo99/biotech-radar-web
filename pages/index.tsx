import Head from 'next/head'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>바이오 투자 레이더: 대시보드</title>
        <meta name="description" content="Real-time proprietary intelligence for global biotechnology markets. AI 기반 바이오주 투자 신호." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-surface text-on-surface min-h-screen" style={{fontFamily: 'Inter, sans-serif'}}>
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-40 bg-slate-900 shadow-2xl py-6">
          <div className="px-6 mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">BIO</span>
              </div>
              <span className="text-white font-black tracking-widest uppercase text-xs">Sovereign Intelligence</span>
            </div>
            <div className="text-blue-200 text-sm font-medium">Institutional Grade AI</div>
          </div>
          <nav className="flex-1 space-y-1">
            <a className="bg-blue-500/10 text-blue-200 rounded-lg mx-2 px-4 py-3 flex items-center space-x-3 transition-all duration-200 hover:bg-slate-800/50" href="#">
              <span className="material-symbols-outlined text-lg">insights</span>
              <span className="font-medium text-sm">Market Pulse</span>
            </a>
            <a className="text-slate-400 hover:text-slate-100 mx-2 px-4 py-3 flex items-center space-x-3 transition-all duration-200 hover:bg-slate-800/50" href="#">
              <span className="material-symbols-outlined text-lg">bolt</span>
              <span className="font-medium text-sm">AI Signals</span>
            </a>
            <a className="text-slate-400 hover:text-slate-100 mx-2 px-4 py-3 flex items-center space-x-3 transition-all duration-200 hover:bg-slate-800/50" href="#">
              <span className="material-symbols-outlined text-lg">biotech</span>
              <span className="font-medium text-sm">Clinical Trials</span>
            </a>
            <a className="text-slate-400 hover:text-slate-100 mx-2 px-4 py-3 flex items-center space-x-3 transition-all duration-200 hover:bg-slate-800/50" href="#">
              <span className="material-symbols-outlined text-lg">bubble_chart</span>
              <span className="font-medium text-sm">Sector Heatmap</span>
            </a>
            <a className="text-slate-400 hover:text-slate-100 mx-2 px-4 py-3 flex items-center space-x-3 transition-all duration-200 hover:bg-slate-800/50" href="#">
              <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
              <span className="font-medium text-sm">Portfolio</span>
            </a>
          </nav>
          <div className="px-4 mt-auto space-y-1 border-t border-slate-800/50 pt-4">
            <button className="w-full text-white rounded-lg py-3 px-4 text-sm font-bold mb-4 shadow-lg active:scale-95 transition-all" style={{background: 'linear-gradient(135deg, #00152a, #102a43)'}}>
              New Analysis
            </button>
            <a className="text-slate-400 hover:text-slate-100 px-4 py-2 flex items-center space-x-3 text-sm" href="#">
              <span className="material-symbols-outlined text-lg">help</span>
              <span>Support</span>
            </a>
            <a className="text-slate-400 hover:text-slate-100 px-4 py-2 flex items-center space-x-3 text-sm" href="#">
              <span className="material-symbols-outlined text-lg">logout</span>
              <span>Sign Out</span>
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:ml-64 min-h-screen">
          {/* TopAppBar */}
          <header className="sticky top-0 z-50 border-b border-slate-200/20 shadow-sm" style={{background: 'rgba(246,250,254,0.7)', backdropFilter: 'blur(20px)'}}>
            <div className="flex justify-between items-center w-full px-6 py-3 max-w-screen-2xl mx-auto">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-black tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, sans-serif'}}>Bio Investment Radar</h1>
                <nav className="hidden lg:flex items-center space-x-6">
                  <a className="text-slate-900 border-b-2 border-slate-900 pb-1 text-sm font-bold" href="#">Dashboard</a>
                  <a className="text-slate-500 hover:text-slate-900 transition-colors pb-1 text-sm font-medium" href="#">Timeline</a>
                  <a className="text-slate-500 hover:text-slate-900 transition-colors pb-1 text-sm font-medium" href="#">Sectors</a>
                  <a className="text-slate-500 hover:text-slate-900 transition-colors pb-1 text-sm font-medium" href="#">Portfolio</a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative hidden sm:block">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                  <input className="pl-10 pr-4 py-1.5 bg-surface-container-high border-none rounded-full text-sm w-64 focus:outline-none focus:ring-1 focus:ring-primary/40" placeholder="Search Bio Stocks..." type="text" />
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                  <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
                <div className="h-8 w-px bg-slate-200 mx-2"></div>
                <button className="text-xs font-bold px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all">Upgrade Pro</button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">B</div>
              </div>
            </div>
          </header>

          {/* Dashboard Body */}
          <div className="p-6 max-w-screen-2xl mx-auto space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight" style={{fontFamily: 'Manrope, sans-serif'}}>바이오 투자 레이더: 대시보드</h2>
                <p className="text-on-surface-variant text-sm mt-1">Real-time proprietary intelligence for global biotechnology markets.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                <span className="flex h-2 w-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                Live Market Status: Active
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-4 space-y-6">
                {/* Market Pulse */}
                <section className="bg-surface-container-low p-6 rounded-xl" style={{border: '1px solid rgba(195,198,206,0.1)'}}>
                  <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">Market Pulse</h3>
                  <div className="space-y-4">
                    <div className="bg-surface-container-lowest p-4 rounded-lg flex justify-between items-center" style={{boxShadow: '0 2px 8px rgba(23,28,31,0.06)'}}>
                      <div>
                        <div className="text-xs font-bold text-slate-500">KOSPI BIO</div>
                        <div className="text-xl font-bold tracking-tight" style={{fontFamily: 'Manrope, sans-serif'}}>2,482.15</div>
                      </div>
                      <div className="text-right">
                        <div className="text-tertiary-fixed-dim text-sm font-bold flex items-center justify-end">
                          <span className="material-symbols-outlined text-sm mr-1">arrow_upward</span>
                          +1.24%
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase">Real-time</div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-lg flex justify-between items-center" style={{boxShadow: '0 2px 8px rgba(23,28,31,0.06)'}}>
                      <div>
                        <div className="text-xs font-bold text-slate-500">KOSDAQ BIO</div>
                        <div className="text-xl font-bold tracking-tight" style={{fontFamily: 'Manrope, sans-serif'}}>842.10</div>
                      </div>
                      <div className="text-right">
                        <div className="text-error text-sm font-bold flex items-center justify-end">
                          <span className="material-symbols-outlined text-sm mr-1">arrow_downward</span>
                          -0.45%
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase">Real-time</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Signal Feed */}
                <section className="bg-surface-container-low p-6 rounded-xl flex flex-col" style={{border: '1px solid rgba(195,198,206,0.1)', height: '400px'}}>
                  <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4 flex justify-between items-center">
                    Signal Feed
                    <span className="material-symbols-outlined text-lg">history</span>
                  </h3>
                  <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                    {[
                      { ticker: 'HLB (028300)', time: '14:02:11', text: 'Phase 3 data leak confirms high efficacy. AI Signal:', signal: 'STRONG BUY', signalColor: 'text-on-tertiary-fixed-variant', icon: 'shutter_speed', iconBg: 'bg-tertiary-container', iconColor: 'text-tertiary-fixed-dim' },
                      { ticker: 'Samsung Biologics', time: '13:45:22', text: 'Resistance detected at 850k. Volume profile shifting. AI Signal:', signal: 'REDUCE', signalColor: 'text-error', icon: 'warning', iconBg: 'bg-error-container', iconColor: 'text-error' },
                      { ticker: 'Celltrion', time: '13:12:05', text: 'EU approval for biosimilar humira expected next week. Accumulate position.', signal: '', signalColor: '', icon: 'info', iconBg: 'bg-primary-container', iconColor: 'text-blue-200' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 pb-4" style={{borderBottom: '1px solid rgba(195,198,206,0.1)'}}>
                        <div className={`h-8 w-8 rounded-full ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <span className={`material-symbols-outlined ${item.iconColor} text-sm`}>{item.icon}</span>
                        </div>
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-slate-900">{item.ticker}</span>
                            <span className="text-[10px] text-slate-400 font-medium ml-4">{item.time}</span>
                          </div>
                          <p className="text-xs text-on-surface-variant leading-relaxed">
                            {item.text} {item.signal && <span className={`${item.signalColor} font-bold`}>{item.signal}.</span>}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 space-y-6">
                {/* AI Signals */}
                <section className="bg-surface-container-low p-6 rounded-xl" style={{border: '1px solid rgba(195,198,206,0.1)'}}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">AI High-Confidence Signals</h3>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded">AI-POWERED</span>
                      <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded">TOP 5 PER DAY</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* BUY Card */}
                    <div className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-lg transition-all" style={{border: '1px solid rgba(195,198,206,0.2)'}}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>Yuhan Corp (000100)</div>
                          <div className="text-xs text-slate-500 font-medium">LUNG CANCER TREATMENT FOCUS</div>
                        </div>
                        <div className="bg-green-50 px-3 py-1 rounded text-on-tertiary-fixed-variant text-xs font-black whitespace-nowrap">98% CONFIDENCE</div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-black text-slate-900" style={{fontFamily: 'Manrope, sans-serif'}}>
                          ₩142,500 <span className="text-xs font-medium text-tertiary-fixed-dim">+4.2%</span>
                        </div>
                        <button className="text-white px-6 py-2 rounded font-bold text-sm tracking-widest shadow-md" style={{background: 'linear-gradient(135deg, #005236, #00301e)'}}>BUY</button>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-on-tertiary-container h-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    {/* SELL Card */}
                    <div className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-lg transition-all" style={{border: '1px solid rgba(195,198,206,0.2)'}}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors" style={{fontFamily: 'Manrope, sans-serif'}}>SK Bioscience</div>
                          <div className="text-xs text-slate-500 font-medium">VACCINE MANUFACTURING PIPELINE</div>
                        </div>
                        <div className="bg-red-50 px-3 py-1 rounded text-error text-xs font-black">82% CONFIDENCE</div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-black text-slate-900" style={{fontFamily: 'Manrope, sans-serif'}}>
                          ₩72,100 <span className="text-xs font-medium text-error">-1.8%</span>
                        </div>
                        <button className="text-white px-6 py-2 rounded font-bold text-sm tracking-widest shadow-md" style={{background: 'linear-gradient(135deg, #ba1a1a, #93000a)'}}>SELL</button>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-error h-full" style={{width: '82%'}}></div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pipeline Tracker */}
                <section className="bg-surface-container-low p-6 rounded-xl" style={{border: '1px solid rgba(195,198,206,0.1)'}}>
                  <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-6">Pipeline Progress Tracking</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'PHASE III', labelColor: 'text-primary', labelBg: 'bg-primary-fixed', name: 'Hanmi Pharma: Obesity Treatment (HM15136)', pct: 75, barColor: 'bg-primary-container', current: 'Phase III (Current)', stages: ['Phase I', 'Phase II', 'Phase III (Current)', 'NDA/BLA'] },
                      { label: 'PHASE II', labelColor: 'text-on-tertiary-fixed-variant', labelBg: 'bg-tertiary-fixed', name: 'LegoChem Bio: ADC Solid Tumor Therapy', pct: 40, barColor: 'bg-on-tertiary-container', current: 'Phase II (Current)', stages: ['Phase I', 'Phase II (Current)', 'Phase III', 'NDA/BLA'] },
                      { label: 'BLA STAGE', labelColor: 'text-slate-500', labelBg: 'bg-slate-200', name: 'Alteogen: Subcutaneous Herceptin IV', pct: 92, barColor: 'bg-primary', current: 'NDA/BLA (Current)', stages: ['Phase I', 'Phase II', 'Phase III', 'NDA/BLA (Current)'] },
                    ].map((trial, i) => (
                      <div key={i} className="relative">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <span className={`text-xs font-bold ${trial.labelColor} px-2 py-0.5 ${trial.labelBg} rounded mr-2`}>{trial.label}</span>
                            <span className="text-sm font-bold text-slate-900">{trial.name}</span>
                          </div>
                          <span className="text-xs text-on-surface-variant font-medium">{trial.pct}% Complete</span>
                        </div>
                        <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden">
                          <div className={`${trial.barColor} h-full rounded-full relative`} style={{width: `${trial.pct}%`}}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                          {trial.stages.map((s, j) => (
                            <span key={j} className={s === trial.current ? 'text-primary' : ''}>{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Bottom News Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tag: 'Global Trends', title: 'Gene Editing breakthrough leads to Nasdaq Bio surge', gradient: 'from-purple-900 via-blue-900' },
                { tag: 'FDA Watch', title: 'FDA schedules advisory committee for Alzheimer\'s pipeline', gradient: 'from-teal-900 via-cyan-900' },
                { tag: 'Industry Pulse', title: 'CDMO capacity hits 5-year high amid biologics demand', gradient: 'from-slate-900 via-blue-900' },
              ].map((item, i) => (
                <div key={i} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold text-tertiary-fixed-dim mb-1 uppercase tracking-widest">{item.tag}</span>
                    <h4 className="text-white font-bold text-sm leading-tight" style={{fontFamily: 'Manrope, sans-serif'}}>{item.title}</h4>
                  </div>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </section>
          </div>
        </main>

        {/* Mobile Nav */}
        <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-50">
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: 'insights', label: 'Pulse', active: true },
              { icon: 'bolt', label: 'Signals', active: false },
              { icon: 'add', label: '', fab: true },
              { icon: 'biotech', label: 'Trials', active: false },
              { icon: 'account_balance_wallet', label: 'Wallet', active: false },
            ].map((item, i) =>
              item.fab ? (
                <div key={i} className="relative -top-4">
                  <button className="bg-primary-container border-4 border-slate-900 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl">
                    <span className="material-symbols-outlined text-3xl">add</span>
                  </button>
                </div>
              ) : (
                <a key={i} className={`flex flex-col items-center justify-center ${item.active ? 'text-blue-200' : 'text-slate-400'}`} href="#">
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="text-[10px] font-medium mt-1">{item.label}</span>
                </a>
              )
            )}
          </div>
        </footer>
      </div>
    </>
  )
}