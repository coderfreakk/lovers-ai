import { SpeedInsights } from '@vercel/speed-insights/react'
import { useLenis } from './hooks/useLenis'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Carousel from './components/Carousel'
import Footer   from './components/Footer'

export default function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Carousel />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  )
}