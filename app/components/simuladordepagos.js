'use client'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Image from 'next/image'
import formData from 'form-data';
// import styles from '../styles/simulador.module.css';

// import Mailgun from 'mailgun.js';
// import toast, { Toaster } from 'react-hot-toast';
// imp[ort profilePic from '../../public/Inciatus.jpeg';

export default function Simulador() {

  const [planDePagos, setPlanDePagos] = useState([]);

  // const API_KEY = 'key-c7eb51fc177084cf4a2e57ade1d098d5'

  // const domain = 'inciatus.online';
  // const mailgun = new Mailgun(formData);
  // const mg = mailgun.client({ username: 'api', key: API_KEY });
  
  // const [mailingLists, setMailingLists] = useState({});
  // const [domainTemplates, setDomainTemplates] = useState({});
  // const [toFieldVisible, setFieldVisibility] = useState(false);
  // const [isToast, setToast] = useState(false);
  
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
  const handleCalculation = () => {
    
    const adeudoValue = Number(getValues("adeudo"));
    const tasaMensualidad = {
      6   : 20.93,
      9   : 27.70,
      12  : 34.07,
    }

    const calculationResult = Object.entries(tasaMensualidad).map((item) => {
      const mensualidades = item[0];
      const pagoTotal = adeudoValue + (adeudoValue * (item[1] / 100));
      console.log(item[1], pagoTotal);
      const pagoMensual = pagoTotal / mensualidades;
      const cuota = new Intl.NumberFormat('es-MX', {maximumFractionDigits: 2}).format(pagoMensual);
      return { mensualidades, cuota }
    });

    // const calculationResult = Object.entries(tasaMensualidad).map((item) => {
    //   const mensualidades = item[0];
    //   const pagoTotal = adeudoValue + adeudoValue * (item[1] / 100);
    //   const cuota = pagoTotal / 12;
    //   return { mensualidades, cuota }
    // });

    setPlanDePagos(calculationResult);

    console.log(calculationResult)
    console.log(calculationResult[0]['cuota'])

  }

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
    <section className="bg-[#051b38] text-white py-12 lg:py-24 px-6">
      <div className="xl:w-5/12 mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-center uppercase mb-4 lg:mb-8">Simulador de pagos de tarjeta de crédito</h1>
      </div>
      <form
        className="flex flex-col space-y-6 lg:w-3/4 2xl:w-7/12 mx-auto"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 lg:flex lg:items-center lg:justify-center gap-y-3">
          <label className="col-span-12 text-center lg:mr-3" htmlFor="adeudo">Total del adeudo en TDC:</label>
          <div className="col-span-8">
            <input className="rounded-r-none text-black" {...register("adeudo")} />
          </div>
          <div className="col-span-4">
            <button className="rounded-l-none lg:px-6" onClick={() => handleCalculation()}><span>Calcular</span></button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-12 gap-1 lg:gap-3">
            <div className="bg-slate-200 text-black col-span-5 flex flex-col justify-center text-center py-3 lg:py-0 rounded-l-md">
              <h3 className="font-bold leading-tight lg:px-8">Plazos en meses</h3>
              {
                (planDePagos && planDePagos.length !== 0) &&
                <div className="flex flex-col mt-3">
                {
                  planDePagos.map(item => <span key={item.mensualidades}>{item.mensualidades}</span>)
                }
                </div>
              }
            </div>
            <div className="bg-slate-200 text-black col-span-7 flex flex-col justify-center text-center py-3 lg:py-0 rounded-r-md">
              <h3 className="font-bold leading-tight px-6">Cuota mensual con HEBEH</h3>
              {
                (planDePagos && planDePagos.length !== 0) &&
                <div className="flex flex-col mt-3">
                {
                  planDePagos.map(item => <span key={item.mensualidades}>$ {item.cuota}</span>)
                }
                </div>
              }
            </div>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold leading-none text-center lg:px-10 mb-3">Mándanos tus datos para sanar tu cuenta bancaria</h3>
            <fieldset className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <input {...register("nombre")} placeholder="Nombre completo" className="w-full"/>
              </div>
              <div className="col-span-12">
                <input {...register("email")} placeholder="Correo electrónico" className="w-full"/>
              </div>
              <div className="col-span-8">
                <input {...register("phone")} placeholder="Teléfono" className="w-full" />
              </div>
              <div className="col-span-4">
                <button disabled={!isDirty || !isValid} className="justify-center w-full">Enviar</button>
              </div>
              
            </fieldset>
          </div>
        </div>
      </form>
    </section>
  )
}
