import AboutMe from './src/components/AboutMe'
import Navbar from './src/components/Navbar'

export default function Home() {
  return (
    <div className='lg:flex'>
      <Navbar />
      <AboutMe />
    </div>
  )
}
