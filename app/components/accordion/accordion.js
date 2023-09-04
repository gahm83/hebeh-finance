'use client'
import React, { useState } from 'react';
import { AccordionItem } from './accordionItem';
import './styles.css';

const Accordion = (props) => {

  const [ activeItem, setActiveItem] = useState(-1)
  const { accordionItems, invertColors } = props;
  
  return (
    <div>
      {
        accordionItems.map((item, idx) =>
          <AccordionItem
            key={`${idx}`}
            accordionItem={item}
            accordionIndex={idx}
            isActive={activeItem === idx}
            invertColors={invertColors}
            setActiveItem={setActiveItem}
          />)
      }
    </div>
  )
  
}

export default Accordion;