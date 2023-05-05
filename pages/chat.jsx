import ChatComponent from '@/js/components/ChatComponent'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <ChatComponent />
    )
}