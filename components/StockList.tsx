import { useState, useEffect } from 'react'
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/outline'
import axios from 'axios'

interface Stock {
  symbol: string
  name: string
  current_price: number
  change: number
  change_percent: number
  volume: number
  signal: string
  last_updated: string
}

export default function StockList() {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'rising' | 'falling'>('all')

  useEffect(() => {
    fetchStocks()
    // 30초마다 업데이트
    const interval = setInterval(fetchStocks, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchStocks = async () => {
    try {
      const response = await axios.get('/api/stocks')
      setStocks(response.data)
      setLoading(false)
    } catch (error) {
      console.error('주식 데이터 로드 실패:', error)
      setLoading(false)
    }
  }

  const filteredStocks = stocks.filter(stock => {
    if (filter === 'rising') return stock.change_percent > 0
    if (filter === 'falling') return stock.change_percent < 0
    return true
  }).slice(0, 10) // 상위 10개만 표시

  const getSignalClass = (signal: string) => {
    const cleanSignal = signal.replace(/🟢|🟡|🔴/g, '').trim()
    return `signal-${cleanSignal}`
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원'
  }

  const formatChange = (change: number, percent: number) => {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toLocaleString()}원 (${sign}${percent.toFixed(2)}%)`
  }

  if (loading) {
    return (
      <div className="card">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-4">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">실시간 바이오주 현황</h3>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setFilter('rising')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filter === 'rising' 
                ? 'bg-success-100 text-success-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            상승
          </button>
          <button
            onClick={() => setFilter('falling')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filter === 'falling' 
                ? 'bg-danger-100 text-danger-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            하락
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {filteredStocks.map((stock) => (
          <div
            key={stock.symbol}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {stock.change_percent >= 0 ? (
                  <TrendingUpIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDownIcon className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <div className="font-medium text-gray-900">{stock.name}</div>
                  <div className="text-sm text-gray-500">{stock.symbol}</div>
                </div>
              </div>
              
              <span className={`signal-badge ${getSignalClass(stock.signal)}`}>
                {stock.signal}
              </span>
            </div>

            <div className="text-right">
              <div className="font-semibold text-gray-900">
                {formatPrice(stock.current_price)}
              </div>
              <div className={`text-sm ${
                stock.change_percent >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatChange(stock.change, stock.change_percent)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="btn-primary w-full">
          전체 목록 보기 →
        </button>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        마지막 업데이트: {new Date().toLocaleTimeString('ko-KR')} | 30초마다 자동 갱신
      </div>
    </div>
  )
}