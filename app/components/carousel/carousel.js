'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import './styles.css'

const Carousel = (props) => {

  const { slideItems, invertColors } = props;

  const cardClassname = invertColors ? 'bg-[#051b38] text-white' : 'bg-zinc-100 text-[#051b38]';
  const iconSrc = `/images/${invertColors ? 'icono-hebeh-bco.svg' : 'icono-hebeh.svg'}`;

  return (
    <Swiper
      autoplay={{delay: 5000}}
      slidesPerView={1.45}
      centeredSlides={true}
      spaceBetween={32}
      modules={[Autoplay, Pagination]}
      className="swiper carousel">
      {
        slideItems.map(item =>
          <SwiperSlide>
            <div className={cardClassname}>
              <figure>
                <Image src={iconSrc} fill />
              </figure>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

export default Carousel;