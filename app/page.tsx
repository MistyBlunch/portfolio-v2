import Navbar from './src/components/Navbar'
import Hero from './src/components/Hero'

export default function Home() {
  return (
    <div className='lg:flex'>
      <Navbar />
      <Hero />
    </div>
  )
}
