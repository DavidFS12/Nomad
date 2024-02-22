import Image from 'next/image'
import { NavBar } from './ui/NavBar/NavBar'
import { Init } from './ui/InitSeccion/initSeccion'
import { Footer } from './ui/Footer/footer'
import { Letter } from './ui/Letter/newLetter'
import { Blog } from './ui/Blog/blog'
import { Review } from './ui/Review/review'
import { Awards } from './ui/Awards/awards'

export default function Home() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      <NavBar />
      <div className='relative z-10 bg-secondary'>

        {/* <nav className="bg-gray-800 p-4 text-white sticky top-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Logo</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Inicio</a>
              <a href="#" className="hover:text-gray-300">Acerca de</a>
              <a href="#" className="hover:text-gray-300">Servicios</a>
              <a href="#" className="hover:text-gray-300">Contacto</a>
            </div>
          </div>
        </div>
      </nav> */}
        <Init/>
        <div className="relative top-[200px] w-full h-screen bg-transparent"></div>
        <Awards/>
        <Review/>
        <Blog/>
        <Letter/>
      </div>
      <div className="w-full lg:h-screen bg-transparent"></div>
      <Footer />
    </main>
  )
}
