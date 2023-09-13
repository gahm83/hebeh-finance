import Image from 'next/image'
import SlideShow from './components/slideshow/slideshow'
import ComoFunciona from './components/comofunciona'
import Beneficios from './components/beneficios'
import Simulador from './components/simuladordepagos'
import ReCaptcha from './hooks/useConfirm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <SlideShow />
      <ComoFunciona />
      <Beneficios />
      <Simulador />
    </main>
  )
}
