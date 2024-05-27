import type { Metadata } from 'next'
import '/public/typography/font.scss'
import '/public/typography/color.scss'
import 'react-day-picker/dist/style.css'
import '/public/typography/checkbox.scss'
import '/public/typography/dropdown.scss'
import './globals.scss'
// import Head from 'next/head'
// import Script from 'next/script'
// import { NextScript } from 'next/dist/pages/_document'

export const metadata: Metadata = {
  title: 'Lamburghinie',
  description: 'AI Powered Perfect Stay For Your Perfect Vacation'
}

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang='en'>
      {/* <Script
        src="/scripts/lang-config.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/scripts/translation.js"
        strategy="beforeInteractive"
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
        strategy="afterInteractive"
      /> */}
      <body>
        {children}
        {/* <NextScript /> */}
      </body>
    </html>
  )
}

export default RootLayout