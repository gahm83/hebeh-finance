'use client'
import Ornament from "./ornament/ornament";
import FlipCard from "./flipcard/flipcard";
import Carousel from "./carousel/carousel";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Beneficios() {

  const isMobile = useMediaQuery(768);

  const beneficiosA = [
    {
      title: 'Refinanciamos tu deuda, para que comiences de nuevo',
      content: 'Pagamos tu deuda ofreciéndote un plan de pagos fijos, para que comiences de nuevo'
    },
    {
      title: 'Sin cobro de comisión por apertura de crédito',
      content: 'No solicitamos pagos iniciales, tampoco se cobra por el trámite que realizas'
    },
    {
      title: 'La deuda se liquida al final del plazo que se eligió',
      content: 'Liquida tu deuda en el plazo de tu elección en cómodos pagos fijos'
    },
    {
      title: 'Te ayudamos a mejorar tu Historial Crediticio',
      content: 'Al momento que contratas el servicio con nosotros tu deuda se congela'
    },
  ];
  const beneficiosB = [
    {
      title: 'Incentiva el incremento a la línea de crédito',
      content: 'Al mejorar tu calificación en Buro de Crédito tienes la posibilidad que tu Banco te califique para incrementar la línea de crédito de tu Tarjeta',
    },
    {
      title: 'Se puede seguir utilizando la tarjeta de crédito',
      content: 'Tu tarjeta no queda bloqueada o inactiva, la puedes seguir utilizando de forma responsable conforme vayas liberando saldo en tu línea de crédito'
    },
    {
      title: 'Sin cobro de seguros que no solicitas',
      content: 'Nuestro trámite no está condicionado a la contratación de ningún tipo de seguro(vida, auto, hogar etc.)'
    },
    {
      title: 'El trámite es muy rápido y seguro',
      content: 'Te brindamos una respuesta eficiente de inmediato. Somos una empresa con altos estándares de seguridad y cuidado de los datos personales de nuestros clientes.'
    }
  ];

  
  console.log();
  return (
    <section>
        {/* <Ornament classes="mix-blend-multiply opacity-80"/> */}
      <div className="bg-[#051b38] pt-12 pb-8 lg:pt-40 lg:pb-24 overflow-hidden relative">
        <h1 className="text-3xl lg:text-5xl font-bold text-center uppercase mb-8 lg:mb-16">Beneficios</h1>
        {
          isMobile
          ? <Carousel slideItems={beneficiosA} />
          : <div className="grid grid-cols-4 gap-10 mx-auto w-[80%]">
            {
              beneficiosA.map(item => <FlipCard key={item.title} title={item.title} content={item.content} />)
            }
          </div>
        }
      </div>
      <div className="bg-zinc-100 pt-8 pb-12 lg:pt-24 lg:pb-32 overflow-hidden relative">
        {
          isMobile
          ? <Carousel slideItems={beneficiosB} invertColors={true} />
          : <div className="grid grid-cols-4 gap-10 mx-auto w-[80%]">
            {
              beneficiosB.map(item => <FlipCard key={item.title} title={item.title} content={item.content} invertColors={true}/>)
            }
          </div>
        }
      </div>
    </section>
  )
}