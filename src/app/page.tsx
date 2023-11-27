import Image from 'next/image'
import Link from 'next/link'
import CountdownTimer from '../components/Countdown';


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-24'>
      
  <div>
  <CountdownTimer targetDate="2023-11-30" />
  </div>
    </main>
  )
}
