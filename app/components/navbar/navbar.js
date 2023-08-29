'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import './styles.css'

const Navbar = () => {
  const [isOpen, drawerToggle] = useState(false);
  return (
    <>
      <header>
        <Link
          href="/"
          onClick={() => drawerToggle(false)}>
          <Image src="/images/hebeh.svg" width="0" height="0" />
        </Link>
      </header>
      <aside className={classNames({ 'isOpen': isOpen })}>
        <div onClick={() => drawerToggle(false)}></div>
        <nav>
          <Link
            href="/"
            onClick={() => drawerToggle(false)}>
            Home
          </Link>
          <Link
            href="/nuestra-empresa"
            onClick={() => drawerToggle(false)}>
            Nuestra empresa
          </Link>
          <Link
            href="/aviso-de-privacidad"
            onClick={() => drawerToggle(false)}>
            Aviso de Privacidad
          </Link>
          <span>HEBEH Financials en medios</span>
          <Link
            href="/contacto"
            onClick={() => drawerToggle(false)}>
            Contacto
          </Link>
          
        </nav>
      </aside>
      <button className="drawerToggle" onClick={() => drawerToggle(!isOpen)}>
        {
          isOpen
          ? <span className="iconClose"></span>
          : <span className="iconMenu"></span>
        }
      </button>
    </>
  )
}

export default Navbar;