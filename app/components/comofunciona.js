import Image from 'next/image';
import Accordion from '../components/accordion/accordion';
import Ornament from './ornament/ornament';

export default function ComoFunciona() {

  const accordionData = [
    {
      title: 'Evaluación de la situación financiera:',
      content: 'Comenzamos por realizar una evaluación exhaustiva de la situación financiera de nuestros clientes. Analizamos sus ingresos, gastos, deudas existentes y patrones de pago para comprender plenamente su situación y necesidades financieras.'
    },
    {
      title: 'Diseño de un plan de refinanciamiento:',
      content: 'Una vez que hemos recopilado la información relevante, diseñamos un plan de refinanciamiento personalizado para cada cliente. Este plan tiene en cuenta su capacidad de pago, objetivos financieros y las opciones de refinanciamiento disponibles.'
    },
    {
      title: 'Mejor opción:',
      content: 'Nos encargamos de recomendarte la mejor opción. Buscamos reducir las tasas de interés, eliminar o reducir las comisiones y establecer acuerdos de pago más flexibles que se ajusten a las posibilidades financieras de nuestros clientes.'
    },
    {
      title: 'Pago de la deuda y consolidación:',
      content: 'Una vez que hemos llegado a acuerdos favorables con el cliente, utilizamos los fondos obtenidos a través de nuestra pasarela de pago para liquidar la deuda de tarjeta de crédito de nuestros clientes. Consolidamos sus deudas en un solo préstamo, lo que simplifica los pagos y mejora la administración de su situación financiera.'
    },
    {
      title: 'Diferimiento de pagos y opciones de plazo:',
      content: 'Ofrecemos a nuestros clientes la opción de diferir los pagos del préstamo consolidado durante 6, 9 o 12 meses sin intereses adicionales. Esto les brinda un alivio financiero temporal y la posibilidad de organizar mejor sus finanzas.'
    },
    {
      title: 'Acompañamiento y asesoramiento financiero:',
      content: 'No nos limitamos a refinanciar la deuda, sino que también brindamos un seguimiento continuo y asesoramiento financiero a nuestros clientes. Les ofrecemos herramientas y recursos para mejorar su educación financiera, administrar su presupuesto y evitar futuras situaciones de endeudamiento.'
    }
  ];

  return (
    <section className="relative lg:grid lg:grid-cols-2 lg:min-h-screen overflow-hidden">
      <Image src="/images/como-funcionan-nuestros-servicios.jpg" fill className="absolute z-0" alt={`alt`} />
      <Ornament className="large mix-blend-multiply"/>
      <div className="bg-[#051b38] bg-opacity-70 relative flex flex-col justify-between col-start-2 py-12 lg:pt-40 lg:pb-24 px-6 lg:px-12">
        <div className="text-white space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4 lg:mb-8">¿Cómo funciona nuestro servicio?</h1>
          <Accordion accordionItems={accordionData}/>
          <p>Nuestro enfoque integral y personalizado nos permite ayudar a las personas a salir de la deuda de tarjetas de crédito de manera efectiva y con un plan a medida. Nos comprometemos a brindar un servicio de calidad, con transparencia y honestidad en cada etapa del proceso.</p>
        </div>
        <div className="flex justify-end mt-32">
          <Image
            src="/images/hebeh-bco.svg"
            width="0"
            height="0"
            className="w-5/12 h-auto"
            alt={`alt`} />
          </div>
      </div>
    </section>
  )
}