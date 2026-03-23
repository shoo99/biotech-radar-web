// API 클라이언트 유틸리티
import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://220.122.161.122:8001'

// API 클라이언트 설정
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터: 인증 토큰 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터: 에러 처리
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 인증 실패 시 로그인 페이지로 리다이렉트
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Stock 관련 API
export const stockApi = {
  // 전체 주식 목록 조회
  getStocks: () => api.get('/api/stocks'),
  
  // 특정 주식 상세 조회
  getStock: (symbol: string) => api.get(`/api/stocks/${symbol}`),
  
  // 급등주 조회
  getTopGainers: (limit: number = 10) => api.get(`/api/stocks/top-gainers?limit=${limit}`),
  
  // 급락주 조회
  getTopLosers: (limit: number = 10) => api.get(`/api/stocks/top-losers?limit=${limit}`),
}

// Market 관련 API
export const marketApi = {
  // 시장 요약 정보
  getSummary: () => api.get('/api/market/summary'),
  
  // 시장 통계
  getStats: () => api.get('/api/market/stats'),
}

// User 관련 API (향후 구현)
export const userApi = {
  // 로그인
  login: (email: string, password: string) => 
    api.post('/api/auth/login', { email, password }),
  
  // 회원가입
  register: (userData: any) => 
    api.post('/api/auth/register', userData),
  
  // 프로필 조회
  getProfile: () => api.get('/api/user/profile'),
  
  // 관심종목 조회
  getWatchlist: () => api.get('/api/user/watchlist'),
  
  // 관심종목 추가
  addToWatchlist: (symbol: string) => 
    api.post('/api/user/watchlist', { symbol }),
  
  // 관심종목 제거
  removeFromWatchlist: (symbol: string) => 
    api.delete(`/api/user/watchlist/${symbol}`),
}

// Alert 관련 API (향후 구현)
export const alertApi = {
  // 알림 설정 조회
  getAlerts: () => api.get('/api/alerts'),
  
  // 알림 설정 생성
  createAlert: (alertData: any) => 
    api.post('/api/alerts', alertData),
  
  // 알림 설정 수정
  updateAlert: (id: string, alertData: any) => 
    api.put(`/api/alerts/${id}`, alertData),
  
  // 알림 설정 삭제
  deleteAlert: (id: string) => 
    api.delete(`/api/alerts/${id}`),
}

// 데이터 타입 정의
export interface Stock {
  symbol: string
  name: string
  current_price: number
  change: number
  change_percent: number
  volume: number
  market_cap?: number
  signal: string
  last_updated: string
}

export interface MarketSummary {
  total_stocks: number
  rising_stocks: number
  falling_stocks: number
  avg_change_percent: number
  top_gainer: string
  top_loser: string
  last_updated: string
}

export interface User {
  id: string
  email: string
  name: string
  subscription_plan: 'free' | 'premium' | 'pro'
  created_at: string
}

export interface Alert {
  id: string
  symbol: string
  alert_type: 'price_up' | 'price_down' | 'volume_surge' | 'signal_change'
  threshold: number
  is_active: boolean
  created_at: string
}

// 유틸리티 함수
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(price)
}

export const formatPercent = (percent: number): string => {
  const sign = percent >= 0 ? '+' : ''
  return `${sign}${percent.toFixed(2)}%`
}

export const getSignalColor = (signal: string): string => {
  if (signal.includes('강한매수') || signal.includes('매수')) return 'text-green-600'
  if (signal.includes('관심') || signal.includes('관망')) return 'text-yellow-600'
  if (signal.includes('주의') || signal.includes('위험')) return 'text-red-600'
  return 'text-gray-600'
}

export default api