
import Hero from './sections/Hero'
import  PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import Subscibe from './sections/Subscibe'
import Footer from './sections/Footer'
import CoustomerReviews from './sections/CoustomerReviews'
import Nav from './components/Nav'








const App = ()=>(
  <main>
  <Nav/>
 <section className="w-full">
 <Hero/>
 </section> 
  <section className='padding'>
   <PopularProducts/>
  </section>
  <section className='padding'>
<SuperQuality/>
  </section>
  <section className='padding-x py-10'>
  <Services/>
  </section>
  <section className='padding'>
  <SpecialOffers/>
  </section>
  <section className='padding bg-blue-200'>
  <CoustomerReviews/>
  </section>
  <section className='padding-x sm:py-32 w-full py-16'>
  <Subscibe/>
  </section>
  <section className='padding bg-black padding-x padding-t pb-8 text-white'>
  <Footer/>
  </section>
  

  </main>

);

export default App ;