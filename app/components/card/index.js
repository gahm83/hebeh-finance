'use client'
import React from 'react';
import Image from 'next/image';
import './styles.css'

const Card = (props) => {

  const { invertColors } = props;

  const cardClassname = `card ${invertColors ? 'bg-[#051b38] text-white' : 'bg-zinc-100 text-[#051b38]'}`;
  const iconSrc = `/images/${invertColors ? 'icono-hebeh-bco.svg' : 'icono-hebeh.svg'}`;

  return (
    <div className={cardClassname}>
      <figure>
        <Image src={iconSrc} fill />
      </figure>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default Card;