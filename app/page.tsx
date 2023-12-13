import Header from './src/components/Header'
import Hero from './src/components/Hero'

export default async function Home() {
  return (
    <div className='lg:flex lg:min-h-screen'>
      <Header />
      <Hero />
    </div>
    //     <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
    // </div>
  )
}
