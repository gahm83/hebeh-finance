'use client'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Image from 'next/image'
import formData from 'form-data';

import Mailgun from 'mailgun.js';
import toast, { Toaster } from 'react-hot-toast';

import useConfirm from '../hooks/useConfirm';
import Ornament from './ornament/ornament';

export default function Simulador() {

  const [planDePagos, setPlanDePagos] = useState([]);
  const [Dialog, notARobot] = useConfirm(
    'Are you sure?',
    'Are you sure you want to delete user "Isaac Kwok"?',
  )
  //const [isToast, setToast] = useState(false);

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });
  
  const { register, handleSubmit, getValues, formState: { isDirty, isValid }, reset } = useForm();
  
  // useEffect(() => {
  //   mg.lists.list()
  //   .then(data => {
  //     setMailingLists(data.items)
  //   }) // logs response body
  //   .catch(err => console.error(err));
  // }, []);
  
  // useEffect(() => {
  //   mg.domains.domainTemplates.list(domain)
  //     .then(data => {
  //       console.log(data, typeof data.items)
  //       setDomainTemplates(data.items)
  //     }) // logs response body
  //     .catch(err => console.error(err));
  // }, []);

  // const handleList = async (event) => {
  //   event.preventDefault();
  //   const showField = event.target.value === "to";
  //   setFieldVisibility(showField);
  // }

  const handleCalculation = (event) => {
    const adeudoValue = Number(getValues("adeudo"));
    const tasaMensualidad = {
      6   : 20.93,
      9   : 27.70,
      12  : 34.07,
    }
    const calculationResult = Object.entries(tasaMensualidad).map((item) => {
      const mensualidades = item[0];
      const tasa = item[1];
      const pagoTotal = adeudoValue + (adeudoValue * (item[1] / 100));
      const pagoMensual = pagoTotal / mensualidades;
      const cuota = new Intl.NumberFormat('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(pagoMensual);
      return { mensualidades, cuota, tasa }
    });
    setPlanDePagos(calculationResult);
  }

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log(data);
    const reCaptcha = await notARobot();
    console.log(reCaptcha)
    // const { list, to, subject, template, message } = data;
    // const sendTo = toFieldVisible ? to : list;

    // setToast(true);

    // const sendMessage = mg.messages.create(process.env.MAILGUN_DOMAIN, {
    //   from: "Farid García <farid.herrera@gmail.com>",
    //   to: "farid.herrera@gmail.com",
    //   subject: "Contacto desde el Simulador de Pagos",
    //   text: "Aquí va una prueba",
    // }).then(msg => {
    //     reset();
    //     // setToast(false);
    // }).catch(err => {
    //   console.error(err)
    //   // setToast(false);
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
    <>
      <section className="relative bg-[#051b38] text-white">
        <Ornament className="small opacity-40" />
        <div className="relative pt-12 pb-32 md:py-24 px-6 z-10">
          <div className="xl:w-5/12 mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center uppercase mb-4 md:mb-8">Simulador de pagos de tarjeta de crédito</h1>
          </div>
          <form
            className="flex flex-col space-y-6 lg:w-3/4 2xl:w-7/12 mx-auto"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 md:flex md:items-center md:justify-center gap-y-3">
              <label className="col-span-12 text-center md:mr-3" htmlFor="adeudo">Total del adeudo en TDC:</label>
              <div className="col-span-8 md:w-56">
                <input className="rounded-r-none text-black" {...register("adeudo")} />
              </div>
              <div className="col-span-4">
                <a className="button rounded-l-none md:px-6" onClick={() => handleCalculation()}><span>Calcular</span></a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 grid grid-cols-10 gap-1 md:gap-3">
                <div className="bg-slate-200 text-black col-span-3 flex flex-col justify-center text-center py-3 md:py-0 rounded-l-md">
                  <h3 className="font-bold leading-tight px-4 md:px-6">Plazos en meses</h3>
                  {
                    (planDePagos && planDePagos.length !== 0) &&
                    <div className="flex flex-col mt-3">
                    {
                      planDePagos.map(item => <span key={item.mensualidades}>{item.mensualidades}</span>)
                    }
                    </div>
                  }
                </div>
                <div className="bg-slate-200 text-black col-span-4 flex flex-col justify-center text-center py-3 md:py-0">
                  <h3 className="font-bold leading-tight px-6">Cuota mensual con HEBEH</h3>
                  {
                    (planDePagos && planDePagos.length !== 0) &&
                    <div className="flex flex-col mt-3">
                    {
                      planDePagos.map(item => <span key={item.mensualidades}>{`$${item.cuota}`}</span>)
                    }
                    </div>
                  }
                </div>
                <div className="bg-slate-200 text-black col-span-3 flex flex-col justify-center text-center py-3 md:py-0 rounded-r-md">
                  <h3 className="font-bold leading-tight px-4 md:px-6">Tasa de Interés</h3>
                  {
                    (planDePagos && planDePagos.length !== 0) &&
                    <div className="flex flex-col mt-3">
                    {
                      planDePagos.map(item => <span key={item.tasa}>{`${item.tasa}%`}</span>)
                    }
                    </div>
                  }
                </div>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-3">Mándanos tus datos para sanar tu cuenta bancaria</h3>
                <fieldset className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <input {...register("nombre")} placeholder="Nombre completo" className="w-full"/>
                  </div>
                  <div className="col-span-12">
                    <input {...register("email")} placeholder="Correo electrónico" className="w-full"/>
                  </div>
                  <div className="col-span-8">
                    <input {...register("telefono")} placeholder="Teléfono" className="w-full" />
                  </div>
                  <div className="col-span-4">
                    <button disabled={!isDirty || !isValid} className="justify-center w-full">Enviar</button>
                  </div>
                  
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Dialog />
    </>
  )
}
