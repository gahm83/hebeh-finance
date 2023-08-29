import Image from 'next/image'
import Accordion from '../components/accordion/accordion'

export default function NuestraEmpresa() {
  const accordionData = [
    {
      title: 'Misión',
      content: 'Nuestra misión es ofrecer una amplia gama de productos y servicios financieros de alta calidad a nuestros clientes para impulsarlos a alcanzar sus objetivos financieros. Nos esforzamos por ser líderes en la industria financiera a nivel mundial y estamos comprometidos a brindar soluciones financieras innovadoras,  utilizando prácticas éticas, responsables y personalizadas para satisfacer las necesidades de nuestros clientes en constante cambio. Además nuestra empresa se esfuerza por promover una cultura de confianza y transparencia en todas nuestras interacciones con clientes, colaboradores, socios y accionistas.'
    },
    {
      title: 'Visión',
      content: 'Ser la empresa financiera de mayor confianza, rentabilidad y mayor número de clientes en todo el mundo gracias a nuestros estándares éticos y el compromiso de brindar un valor superior y una experiencia incomparable.'
    },
    {
      title: 'Valores',
      content: '<p>Integridad: Nos comprometemos a actuar con honestidad, transparencia y ética en todas nuestras interacciones con clientes, empleados y socios comerciales. Valoramos la confianza que nuestros clientes depositan en nosotros y nos esforzamos por mantenerla en todo momento.</p><p>Innovación: Buscamos constantemente nuevas formas de mejorar y optimizar nuestros servicios financieros. Fomentamos un entorno de creatividad y colaboración, donde se valora la generación de ideas y la implementación de soluciones tecnológicas que mejoren la experiencia del cliente.</p><p>Excelencia: Nos esforzamos por ofrecer un servicio de calidad excepcional en todas las interacciones con nuestros clientes. Buscamos la excelencia en cada aspecto de nuestro negocio, desde la atención al cliente, hasta la seguridad de sus datos financieros. Nos comprometemos a brindar una experiencia fluida y satisfactoria en cada paso del proceso.</p></p><p>Responsabilidad: Reconocemos nuestra responsabilidad como actores en el sector financiero y nos comprometemos a cumplir con todas las regulaciones y requisitos legales y fiscales aplicables. Valoramos la gestión responsable del riesgo y nos esforzamos por educar a nuestros clientes sobre las mejores prácticas en el manejo de sus finanzas.</p>'
    },
  ]
  return (
    <section className="bg-image bg-aviso relative min-h-screen">
      <div className="relative pt-28 lg:pt-40">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-16">Nuestra empresa</h1>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-0">
          <div className="text-white space-y-3 px-8">
            <p>HEBEH Financials esta comprometida en brindar soluciones financieras innovadoras y accesibles que satisfagan las necesidades de nuestros clientes de una manera ética y responsable, ayudándoles a alcanzar sus metas financieras. </p>
            <p>HEBEH Financials se enorgullece de ser un socio confiable para aquellos que buscan hacer crecer su capital de manera segura, gestionando los fondos de nuestros inversionistas con el mayor cuidado y transparencia.</p>
          </div>
          <div className="text-white space-y-4 px-8 pb-12">
            <Accordion accordionItems={accordionData}/>
          </div>
        </div>
      </div>
    </section>
  )
}