'use client'
import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './styles.css'

const SlideShow = () => {

  const swiperRef = useRef();

  const [isSwiperRunning, setSwiperState] = useState(true);

  const paginationText= [
    'Te ayudamos a pagar las deudas que actualmente tienes en tus Tarjetas de Crédito',
    '¿Te interesa mejorar tu calificación en Buro de Crédito?',
    'Sabemos lo preocupante que es deber tú tarjeta de Crédito',
    'Olvídate de los Pagos mínimos en tu tarjeta de crédito',
    'Liquida tu deuda en un plan de pagos fijos',
  ]

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span>' + paginationText[index] + '</span></span>';
    },
  };
  
  const togglePlay = () => {
    // console.log(swiperRef?.current?.swiper)
    const isRunning = swiperRef?.current?.swiper?.autoplay?.running;
    setSwiperState(!isRunning)
    isRunning
      ? swiperRef?.current?.swiper?.autoplay?.stop()
      : swiperRef?.current?.swiper?.autoplay?.start()
  }

  return (
    <>
      <Head>
        <title>HEBEH FINANCIALS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Swiper
        autoplay={{ delay: 5000 }}
        effect={'fade'}
        pagination={pagination}
        modules={[Autoplay, EffectFade, Pagination]}
        className="swiper hero"
        ref={swiperRef}>
        <SwiperSlide>
          <Image src="/images/1-paga-tus-deudas.jpg" alt="Te ayudamos a pagar las deudas que actualmente tienes en tus Tarjetas de Crédito" fill />
          <div>
            <h1>Te ayudamos a pagar las deudas que actualmente tienes en tus Tarjetas de Crédito</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/2-mejora-tu-calificacion-en-buro.jpg" alt="¿Te interesa mejorar tu calificación en Buro de Crédito?" fill />
          <div>
            <h1>¿Te interesa mejorar tu calificación en Buro de Crédito?</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/3-sabemos-que-preocupa-deber-tu-tarjeta.jpg" alt="Sabemos lo preocupante que es deber tú tarjeta de Crédito" fill />
          <div>
            <h1>Sabemos lo preocupante que es deber tú tarjeta de Crédito</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/4-olvidate-de-los-pagos-minimos.jpg" alt="Olvídate de los Pagos mínimos en tu tarjeta de crédito" fill />
          <div>
            <h1>Olvídate de los Pagos mínimos en tu tarjeta de crédito</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/5-liquida tu deuda.jpg" alt="Liquida tu deuda en un plan de pagos fijos" fill />
          <div>
            <h1>Liquida tu deuda en un plan de pagos fijos</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <button onClick={togglePlay}>
        {
          isSwiperRunning
          
          ? <Image src="/images/icon-pause.svg" fill alt="Pause button" />
          : <Image src="/images/icon-play.svg" fill alt="Play button" />
        }
      </button>
    </>
  )
}

export default SlideShow;