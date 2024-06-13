// import { GoogleTagManager } from '@next/third-parties/google';
import { DM_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import './css/card.scss'
import './css/globals.scss'

const fontDmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const metadata = {
  title: 'Portfolio of Sospeter Karanja - Software Developer',

  description:
    'This is the portfolio of Sospeter Karanja. I am an experienced full stack developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontDmMono.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  )
};
