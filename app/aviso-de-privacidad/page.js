import Image from 'next/image'

export default function PoliticasPrivacidad() {
  return (
    <section className="relative min-h-screen">
      <Image src="/images/aviso-de-privacidad.jpg" fill className="!fixed h-screen inset-0 object-cover object-center opacity-30 z-0" alt={`alt`} />
      <div className="relative pt-28 lg:pt-40 pb-16 px-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-16">Aviso de Privacidad</h1>
        <div className="space-y-4">
          <p>HEBEH FINANCIALS entidad financiera, en cumplimiento con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de Particulares, da a conocer el presente Aviso de Privacidad en los siguientes términos:</p>
          <ol>
          <li>Responsable de la protección de datos personales. La entidad financiera, con domicilio en [Ingresar domicilio], es la responsable de la protección de los datos personales que usted proporcione, así como de su tratamiento.</li>
          <li>Datos personales a recabar y finalidades del tratamiento. La entidad financiera podrá recabar los siguientes datos personales necesarios para la prestación de sus servicios:
          <ol>
          <li>Datos de identificación, tales como nombre completo, domicilio, número de teléfono y correo electrónico;</li>
          <li>Datos financieros, tales como número de Cuenta de débito, Tarjeta de Crédito, Institución Bancaria,</li>
          <li>Datos fiscales, tales como el número de registro federal de contribuyentes.</li>
          </ol>
          </li>
          <li>La entidad financiera utilizará sus datos personales para las siguientes finalidades: a) Prestación de servicios Financieros b) Evaluación crediticia, de manera adicional utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio y/o producto solicitado y/o contratado, pero que nos permite brindarle una mejor atención:
          <ol>
          <li>Informarle nuevos productos y/o servicios financieros</li>
          <li>Evaluar la calidad de servicio</li>
          </ol>
          </li>
          <li>Medidas de seguridad. La entidad financiera ha adoptado medidas de seguridad físicas, técnicas y administrativas necesarias para proteger sus datos personales contra cualquier daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado. Por otra parte, informamos a Usted, que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o persona distinta a nosotros y serán utilizados exclusivamente para los fines señalados.</li>
          <li>Todos los titulares de los datos personales tienen el derecho de Acceder, Rectificar, y Cancelar su información personal que esté en posesión de terceros, así como Oponerse a su uso. A eso se le conoce como derechos ARCO. Acceso: Implica el derecho que tiene a acceder su información que está siendo objeto de tratamiento, así como el alcance y particulares de dicho tratamiento. Rectificación: Es el derecho que usted tiene a corregir sus datos personales. Aplica cuando sus datos son incorrectos, imprecisos, incompletos o están desactualizados. Cancelación: Es el derecho que le permite solicitar, en todo momento, la eliminación o borrado de sus datos personales cuando considere que los mismos no están siendo utilizados o manejados conforme a los principios, deberes y obligaciones previstos en la ley. Oposición: Consiste en solicitar el cese del tratamiento de sus datos personales cuando una situación específica y personal así lo requiera para enviarle un daño o para fines específicos y concretos, por ejemplo, para fines publicitarios.</li>
          <li>Modificaciones al Aviso de Privacidad. Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente Aviso de Privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios y/o productos</li>
          </ol>
        </div>
      </div>
    </section>
  )
}