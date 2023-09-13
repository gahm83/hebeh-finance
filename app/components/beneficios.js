'use client'
import Ornament from "./ornament/ornament";
import FlipCard from "./flipcard/flipcard";
import Card from "./card";
import Carousel from "./carousel/carousel";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Beneficios() {

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  const beneficiosA = [
    {
      title: 'Refinanciamos tu deuda, para que comiences de nuevo',
      content: 'Pagamos tu deuda ofreciéndote un plan de pagos fijos, para que comiences de nuevo'
    },
    // {
    //   title: 'Sin cobro de comisión por apertura de crédito',
    //   content: 'No solicitamos pagos iniciales, tampoco se cobra por el trámite que realizas'
    // },
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

  return (
    <section>
      <div className="bg-[#273649] overflow-hidden relative">
        <Ornament className="small opacity-25" />
        <div className="relative pt-12 pb-8 lg:pt-40 lg:pb-40 filter">
          <h1 className="text-3xl lg:text-5xl font-bold text-center text-white uppercase mb-8 lg:mb-16">Beneficios</h1>
          {
            isMobile
            ? <Carousel slideItems={beneficiosA} />
            : isTablet
              ? <div className="grid grid-cols-2 gap-10 mx-auto w-10/12">
                {
                  beneficiosA.map(item => <Card key={item.title} title={item.title} content={item.content} />)
                }
                </div>
              : <div className="grid grid-cols-3 gap-10 mx-auto w-7/12">
                {
                  beneficiosA.map(item => <FlipCard key={item.title} title={item.title} content={item.content} />)
                }
              </div>
          }
        </div>
      </div>
      <div className="bg-zinc-100 overflow-hidden relative">
        <Ornament className="tiny opacity-25" />
        <div className="relative pt-8 pb-12 lg:py-40">
        {
          isMobile
          ? <Carousel slideItems={beneficiosB} invertColors={true} />
          : isTablet
            ? <div className="grid grid-cols-2 gap-10 mx-auto w-[80%]">
              {
                beneficiosB.map(item => <Card key={item.title} title={item.title} content={item.content} invertColors={true}/>)
              }
              </div>
            : <div className="grid grid-cols-4 gap-10 mx-auto w-[80%]">
              {
                beneficiosB.map(item => <FlipCard key={item.title} title={item.title} content={item.content} invertColors={true}/>)
              }
            </div>
        }
        </div>
      </div>
    </section>
  )
}