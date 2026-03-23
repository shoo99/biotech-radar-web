import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 기본 SEO 메타태그 */}
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph 메타태그 */}
        <meta property="og:site_name" content="바이오 투자 레이더" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@biotech_radar" />
        
        {/* 모바일 최적화 */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="바이오 투자 레이더" />
        
        {/* PWA 매니페스트 */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* 애플 터치 아이콘 */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        {/* 프리로드 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* 구조화된 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "바이오 투자 레이더",
              "description": "AI 기반 바이오/제약 주식 실시간 투자 신호 분석 서비스",
              "url": "https://sysofti.com/bioradar",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "9900",
                "priceCurrency": "KRW"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}