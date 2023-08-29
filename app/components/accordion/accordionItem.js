'use client'
import parse from 'html-react-parser';
import { useState } from 'react';

export const AccordionItem = (props) => {
  const [index, setIndex] = useState(-1);
  const isActive = props.isActive;
  const { title, content } = props.accordionItem;
  const contenido = /^/.test(content) ? parse(content) : content;

  const toggleItem = () => {
    // props.setActiveItem(props.accordionIndex)
    const toggleIndex = isActive ? -1 : props.accordionIndex;
    props.setActiveItem(toggleIndex);
  }

  return (
    <div className={props.isActive ? 'accordion-item item-active' : 'accordion-item'}>
      {/* <div className="accordion-title" onClick={() => props.setActiveItem(props.accordionIndex)}> */}
      <div className="accordion-title" onClick={() => toggleItem()}>
        <span></span>
        <p>{title}</p>
      </div>
      {
        props.isActive &&
        <div className="accordion-content">{contenido}</div>
      }
    </div>
  );
};