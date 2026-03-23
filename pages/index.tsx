import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowTrendingUpIcon, BellIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import StockList from '../components/StockList'
import MarketSummary from '../components/MarketSummary'
import PricingSection from '../components/PricingSection'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Head>
        <title>바이오 투자 레이더 - 실시간 바이오주 투자 신호 | AI 분석</title>
        <meta name="description" content="바이오/제약 주식 투자의 새로운 기준. AI가 분석한 실시간 투자 신호로 급등주를 놓치지 마세요. 아이엠바이오로직스 300% 상한가도 실시간 포착!" />
        <meta name="keywords" content="바이오주, 제약주, 투자, 급등주, AI분석, 실시간신호, 한미약품, 에이프로젠" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="ml-3 text-xl font-bold text-gradient">바이오 투자 레이더</span>
                </div>
              </div>
              
              <nav className="hidden md:flex space-x-8">
                <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  기능
                </Link>
                <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  요금제
                </Link>
                <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                  로그인
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <button className="btn-secondary">
                  무료 체험
                </button>
                <button className="btn-primary">
                  시작하기
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  바이오주 투자의{' '}
                  <span className="text-gradient">새로운 기준</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  AI가 실시간으로 분석하는 바이오/제약 주식 투자 신호. 
                  <br className="hidden sm:block" />
                  <span className="font-semibold text-green-600">아이엠바이오로직스 300% 상한가</span>도 놓치지 않았습니다.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button className="btn-primary text-lg px-8 py-3 w-full sm:w-auto">
                    무료로 시작하기 →
                  </button>
                  <Link href="#demo" className="text-primary-600 hover:text-primary-700 font-medium">
                    실시간 데이터 보기
                  </Link>
                </div>

                {/* Real-time Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="card text-center animate-fade-in">
                    <div className="text-3xl font-bold text-green-600 mb-2 animate-count-up">300%</div>
                    <div className="text-gray-600">최고 포착 수익률</div>
                    <div className="text-sm text-gray-500 mt-1">아이엠바이오로직스</div>
                  </div>
                  
                  <div className="card text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <div className="text-3xl font-bold text-blue-600 mb-2 animate-count-up">24개</div>
                    <div className="text-gray-600">추적 바이오 기업</div>
                    <div className="text-sm text-gray-500 mt-1">실시간 모니터링</div>
                  </div>
                  
                  <div className="card text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <div className="text-3xl font-bold text-purple-600 mb-2 animate-count-up">5분</div>
                    <div className="text-gray-600">업데이트 주기</div>
                    <div className="text-sm text-gray-500 mt-1">실시간 신호</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Summary & Live Data */}
        <section id="demo" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">실시간 바이오주 현황</h2>
              <p className="text-gray-600">지금 이 순간의 바이오/제약 주식 투자 신호를 확인하세요</p>
            </div>
            
            <MarketSummary />
            <StockList />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 바이오 투자 레이더인가요?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                단순한 주가 정보가 아닌, AI가 분석한 투자 신호로 현명한 투자 결정을 내리세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">실시간 AI 분석</h3>
                <p className="text-gray-600 text-sm">
                  24개 바이오/제약 기업을 5분마다 모니터링하여 투자 신호를 생성합니다.
                </p>
              </div>

              <div className="card text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BellIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">즉시 알림</h3>
                <p className="text-gray-600 text-sm">
                  급등/급락 시점을 놓치지 않도록 실시간 푸시 알림을 제공합니다.
                </p>
              </div>

              <div className="card text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">전문가 분석</h3>
                <p className="text-gray-600 text-sm">
                  바이오인포매틱스 전문가의 도메인 지식이 반영된 분석을 제공합니다.
                </p>
              </div>

              <div className="card text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">검증된 성과</h3>
                <p className="text-gray-600 text-sm">
                  아이엠바이오로직스 300% 상한가 등 실제 급등주 포착 실적이 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-2 text-lg font-bold">바이오 투자 레이더</span>
                </div>
                <p className="text-gray-400 mb-4">
                  AI 기반 바이오/제약 주식 투자 신호 분석 서비스
                </p>
                <p className="text-sm text-gray-500">
                  © 2026 SYSOFT. All rights reserved.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">서비스</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white transition-colors">실시간 신호</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">급등주 알림</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">포트폴리오</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">지원</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white transition-colors">이용가이드</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">문의하기</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}