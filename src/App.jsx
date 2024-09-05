import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CardsList from './components/CardsList'
import About from './components/About'
import { VStack } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero />
     <About />
     <CardsList />
     <Footer />
     </>
  )
}

export default App
