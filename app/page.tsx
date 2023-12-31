import AboutMe from './src/components/AboutMe'
import Experience from './src/components/Experience'
import Navbar from './src/components/Navbar'

export default function Home() {
  return (
    <div className='lg:flex'>
      <Navbar />
      <div>
        <AboutMe />
        <Experience />
      </div>
    </div>
  )
}
