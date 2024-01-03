import { AboutMe } from './src/components/AboutMe'
import { Navbar } from './src/components/Navbar'
import { Experience } from './src/components/Experience'
import { Projects } from './src/components/Projects'

export default function Home() {
  return (
    <div className='lg:flex'>
      <Navbar />
      <div className='mx-auto'>
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}
