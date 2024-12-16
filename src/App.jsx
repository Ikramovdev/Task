import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PowerFull from './components/PowerFull'
import Price from './components/Price'
import Service from './components/Service'
import "aos/dist/aos.css"; 
import Aos from 'aos'


function App() {
  Aos
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <PowerFull/>
        <Service/>
        <Price/>
      </main>
      <Footer/>
    </>
  )
}

export default App
