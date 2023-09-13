'use client'
import { useState } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';


export const AccordionItem = (props) => {
  const [index, setIndex] = useState(-1);
  const { isActive, invertColors } = props;
  const { title, content } = props.accordionItem;
  const contenido = /^/.test(content) ? parse(content) : content;

  const toggleItem = () => {
    const toggleIndex = isActive ? -1 : props.accordionIndex;
    props.setActiveItem(toggleIndex);
  }

  return (
    <div className={classNames('accordion-item', { 'item-active': props.isActive })}>
      <div className="accordion-title" onClick={() => toggleItem()}>
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames('transition-transform duration-500 ease-out', {'-rotate-180': props.isActive })}>
          <path d="M6 9L12 15L18 9" stroke={invertColors ? "#FFFFFF" : "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>{title}</p>
      </div>
      <div className="accordion-content">{contenido}</div>
    </div>
  );
};