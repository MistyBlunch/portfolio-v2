import Header from './src/components/Header'
import Hero from './src/components/Hero'
import { ThemeSwitcher } from './src/elements/ThemeSwitcher'

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ThemeSwitcher />
    </>
  )
}
