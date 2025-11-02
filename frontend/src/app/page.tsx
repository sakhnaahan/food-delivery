import Link from 'next/link'
import LoginPage from './register2/page'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Image src="/bg.png" alt="bg" width={1440} height={668} />
    </div>
  )
}
