'use client';

import Image from "next/image";
import Logo from "../../public/barbearia-logo.png"
import Lua from "../../public/moon.png"
import Sol from "../../public/sun.png"
import { useState } from 'react';
import { Great_Vibes } from '@next/font/google'

const GreatVibes= Great_Vibes({
  weight:'400',
  subsets:['latin']
  })

export default function Home() {

  const [ ehTemaEscuro, setEhTemaEscuro ] = useState(false);

  const alterarTema = () => {
    setEhTemaEscuro(!ehTemaEscuro);
  }

  return (
    
    <div className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>

      <header>
        <div className="limitar-secao">
          <Image className="logomarca" src={Logo} alt="logomarca"/>
          <button onClick={alterarTema} className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
          <Image src={ehTemaEscuro ? Lua : Sol} alt="Tema noturno / diurno" className="btn-icone"/>
            {ehTemaEscuro ? `Light` : `Dark`}
          </button>
        </div>
      </header>

      <section className="secao-banner"></section>

      <section className="secao-texto limitar-secao">
        <div className="limitar-secao">
          <h1>Bem-vindo a Barber Shop</h1>
          <p className="primeiro-paragrafo">
            Nossa barbearia sempre oferece profissionais de qualidade e
            estamos prontos para lidar com suas maiores expectativas.
          </p>
          <p className="segundo-paragrafo">
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
            uma equipe premiada que demonstrou o talento de mestres barbeiros
            em vários concursos de estilo. Deixe nosso barbeiro ser seu
            estilista pessoal e você nunca ficará desapontado.
          </p>
          <p className={GreatVibes.className} id="assinatura">S. Kelly</p>
        </div>
      </section>
    </div>
  );
}
