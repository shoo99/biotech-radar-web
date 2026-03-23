import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

const pricingPlans = [
  {
    name: '무료 체험',
    price: '0',
    duration: '무료',
    description: '바이오 투자 레이더를 체험해보세요',
    features: [
      '하루 3회 신호 확인',
      '기본 주가 차트',
      '일간 시장 요약',
      '커뮤니티 접근'
    ],
    limitations: [
      '실시간 알림 불가',
      '고급 분석 제외',
      '포트폴리오 추적 제한',
      '이력 데이터 제한 (7일)'
    ],
    buttonText: '무료 시작',
    buttonStyle: 'btn-secondary',
    popular: false
  },
  {
    name: '프리미엄',
    price: '9,900',
    duration: '월',
    description: '개인 투자자를 위한 완전한 솔루션',
    features: [
      '무제한 실시간 신호',
      'AI 투자 분석 보고서',
      '즉시 푸시 알림',
      '고급 기술적 분석',
      '포트폴리오 추적',
      '3개월 이력 데이터',
      '텔레그램 봇 연동'
    ],
    limitations: [],
    buttonText: '프리미엄 시작',
    buttonStyle: 'btn-primary',
    popular: true
  },
  {
    name: '프로',
    price: '19,900',
    duration: '월',
    description: '전문 투자자와 기관을 위한 고급 기능',
    features: [
      '프리미엄 모든 기능',
      '개인 맞춤 분석',
      '투자 전략 컨설팅 (월 1회)',
      '우선 고객 지원',
      '무제한 이력 데이터',
      'API 접근 권한',
      '사전 IPO 정보',
      '리서치 리포트'
    ],
    limitations: [],
    buttonText: '프로 시작',
    buttonStyle: 'btn-primary',
    popular: false
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">투자 성공을 위한 요금제</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            무료 체험부터 시작해서, 투자 수익이 늘어나면 업그레이드하세요. 
            <span className="font-semibold text-green-600"> 월 수익률 10%만 달성해도 요금은 충분히 회수됩니다.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 bg-white'
              } hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    가장 인기
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">₩{plan.price}</span>
                  {plan.price !== '0' && (
                    <span className="text-gray-600 ml-2">/{plan.duration}</span>
                  )}
                </div>

                {plan.price !== '0' && (
                  <div className="text-sm text-gray-500 mb-4">
                    = 하루 {Math.round(parseInt(plan.price) / 30).toLocaleString()}원
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">포함된 기능</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">제한사항</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-center text-sm">
                          <XMarkIcon className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button className={`w-full ${plan.buttonStyle} text-center`}>
                {plan.buttonText}
              </button>

              {plan.name === '프리미엄' && (
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-600">
                    💡 <span className="font-medium">예상 ROI:</span> 월 10% 수익 시 99배 투자회수
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3">🎯 실제 수익 사례</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded">
                <div className="font-semibold text-green-600">아이엠바이오로직스</div>
                <div className="text-gray-600">+300% 상한가 포착</div>
                <div className="text-xs text-gray-500">100만원 → 400만원</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="font-semibold text-green-600">에이프로젠바이오로직스</div>
                <div className="text-gray-600">+29.73% 급등</div>
                <div className="text-xs text-gray-500">100만원 → 129만원</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="font-semibold text-green-600">한미약품</div>
                <div className="text-gray-600">+7.90% 상승</div>
                <div className="text-xs text-gray-500">100만원 → 107만원</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              * 과거 수익률이 미래 수익률을 보장하지는 않습니다. 투자 판단은 신중히 하시기 바랍니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}