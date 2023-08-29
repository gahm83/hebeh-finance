'use client'
import Image from "next/image"
import { useForm } from "react-hook-form"

export default function PoliticasPrivacidad() {

  const { register, handleSubmit, getValues, formState: { isDirty, isValid }, reset } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();

    // const { list, to, subject, template, message } = data;
    // const sendTo = toFieldVisible ? to : list;

    // setToast(true);

    // const sendMessage = mg.messages.create(domain, {
    //   from: "Jaime Castillo <franquicias@inciatus.mx>",
    //   to: sendTo,
    //   subject,
    //   template,
    //   text: message,
    // })
    //   .then(msg => {
    //     reset();
    //     setToast(false);
    // })
    // .catch(err => {
    //   console.error(err)
    //   setToast(false);
    // });

    // toast.promise(
    //   sendMessage,
    //   {
    //     loading: 'Enviando',
    //     success: 'Tu mensaje se ha enviado satisfactoriamente',
    //     error: (err) => `Ocurrio el siguiente error: ${err.toString()}`,
    //   },
    //   {
    //     style: {
    //       minWidth: '240px',
    //       maxWidth: '820px'
    //     },
    //     success: {
    //       duration: 3000,
    //     },
    //     error: {
    //       duration: 3000,
    //     },
    //   }
    // );

  };

  return (
    <section className="bg-[#051b38]">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="relative flex pt-48 pb-16 px-8">
          <Image src="/images/contacto.jpg" fill className="absolute object-cover" alt="Torre Mitihak en la Ciudad de México" />
          <div className="relative lg:flex lg:flex-col lg:justify-end">
            <h2 className="text-xl lg:text-2xl font-bold leading-none mb-3">Ubicación</h2>
            <p>Cto. Interior Av. Rio Churubusco 601, Xoco, Benito Juárez, Ciudad de México.</p>
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-center px-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8">Contacto</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col space-y-4">
              <div>
                <input {...register("nombre")} placeholder="Nombre completo" className="w-full"/>
              </div>
              <div>
                <input {...register("email")} placeholder="Correo electrónico" className="w-full"/>
              </div>
              <div>
                <textarea {...register("mensaje")} placeholder="Mensaje" className="w-full" />
              </div>
              <div className="flex items-center justify-end">
                <button disabled={!isDirty || !isValid} className="w-auto px-6">Enviar</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}