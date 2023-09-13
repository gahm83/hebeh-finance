'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import Card from '../card';
import './styles.css'

const Carousel = (props) => {

  const { slideItems, invertColors } = props;

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
          <SwiperSlide key={item.title}>
            <Card key={item.title} title={item.title} content={item.content} invertColors={invertColors} />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

export default Carousel;