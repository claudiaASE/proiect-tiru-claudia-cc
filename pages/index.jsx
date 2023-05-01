import { Inter } from 'next/font/google'
import MainPage from '@/js/components/MainPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainPage />
  )
}
