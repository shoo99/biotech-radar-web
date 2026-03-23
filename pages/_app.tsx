import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>바이오 투자 레이더 - 실시간 바이오주 투자 신호</title>
        <meta name="description" content="바이오/제약 주식의 실시간 투자 신호를 AI로 분석하여 제공합니다. 급등주 포착, 투자 타이밍 알림, 전문가 분석까지!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="바이오 투자 레이더" />
        <meta property="og:description" content="AI 기반 바이오주 실시간 투자 신호" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }} />
        
        {/* Font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}