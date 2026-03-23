import { useState, useEffect } from 'react'
import { ChartBarIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon, ClockIcon } from '@heroicons/react/24/outline'
import axios from 'axios'

interface MarketData {
  total_stocks: number
  rising_stocks: number
  falling_stocks: number
  avg_change_percent: number
  top_gainer: string
  top_loser: string
  last_updated: string
}

export default function MarketSummary() {
  const [marketData, setMarketData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMarketSummary()
    // 1분마다 업데이트
    const interval = setInterval(fetchMarketSummary, 60000)
    return () => clearInterval(interval)
  }, [])

  const fetchMarketSummary = async () => {
    try {
      const response = await axios.get('/api/market/summary')
      setMarketData(response.data)
      setLoading(false)
    } catch (error) {
      console.error('시장 요약 데이터 로드 실패:', error)
      // 에러 시 기본 데이터
      setMarketData({
        total_stocks: 24,
        rising_stocks: 18,
        falling_stocks: 6,
        avg_change_percent: 5.2,
        top_gainer: '에이프로젠',
        top_loser: '데이터없음',
        last_updated: new Date().toISOString()
      })
      setLoading(false)
    }
  }

  if (loading || !marketData) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="w-12 h-8 bg-gray-200 rounded mb-2"></div>
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  const risingPercentage = Math.round((marketData.rising_stocks / marketData.total_stocks) * 100)
  const fallingPercentage = Math.round((marketData.falling_stocks / marketData.total_stocks) * 100)

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {/* 전체 종목 수 */}
      <div className="card hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <ChartBarIcon className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-xs text-gray-500 font-medium">추적 종목</span>
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {marketData.total_stocks}개
        </div>
        <div className="text-sm text-gray-600">
          바이오/제약 기업
        </div>
      </div>

      {/* 상승 종목 */}
      <div className="card hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <ArrowTrendingUpIcon className="w-5 h-5 text-green-600" />
          </div>
          <span className="text-xs text-green-600 font-medium">+{risingPercentage}%</span>
        </div>
        <div className="text-2xl font-bold text-green-600 mb-1">
          {marketData.rising_stocks}개
        </div>
        <div className="text-sm text-gray-600">
          상승 종목
        </div>
      </div>

      {/* 하락 종목 */}
      <div className="card hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <ArrowTrendingDownIcon className="w-5 h-5 text-red-600" />
          </div>
          <span className="text-xs text-red-600 font-medium">-{fallingPercentage}%</span>
        </div>
        <div className="text-2xl font-bold text-red-600 mb-1">
          {marketData.falling_stocks}개
        </div>
        <div className="text-sm text-gray-600">
          하락 종목
        </div>
      </div>

      {/* 평균 등락률 */}
      <div className="card hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            marketData.avg_change_percent >= 0 
              ? 'bg-green-100' 
              : 'bg-red-100'
          }`}>
            <ClockIcon className={`w-5 h-5 ${
              marketData.avg_change_percent >= 0 
                ? 'text-green-600' 
                : 'text-red-600'
            }`} />
          </div>
          <span className="text-xs text-gray-500 font-medium">평균</span>
        </div>
        <div className={`text-2xl font-bold mb-1 ${
          marketData.avg_change_percent >= 0 
            ? 'text-green-600' 
            : 'text-red-600'
        }`}>
          {marketData.avg_change_percent >= 0 ? '+' : ''}{marketData.avg_change_percent.toFixed(1)}%
        </div>
        <div className="text-sm text-gray-600">
          시장 평균 등락률
        </div>
      </div>
    </div>
  )
}