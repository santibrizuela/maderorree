import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'

// services data
const services = [
  
  
  {
    name: 'Resistencias',
    description:
     'Diseño Gráfico, Paleta de Colores, Logotipo, Imagotipo. Diseñamos el logo y la estética de tu marca desde cero. Es el punto de partida para digitalizar una marca.',
    link: '/resistencias',
  },
  {
    name: 'Sensores',
    description:
     'Diseño Web, UX/UI, Dominios, Correo Empresarial. Te diseñamos un sitio web con información de tu marca (Contacto, Locales, Horarios) y lo ponemos en línea con Vercel o DNS.',
    link: '/sensores',
  },
  {
    name: 'Controladores',
    description:
     'Social Media, Campaña de Seguidores, Plantillas (Feed-Historias), Link/QR. Creamos/Desarrollamos perfiles en redes sociales en las que la Marca tenga un potencial impacto.',
    link: '/controladores',
  }
  
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1  lg-bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0  text-center lg:text-start'
        >
          <h2 className='h2 font-bold text-lime-100 my-4'>¿Cómo <br/>Digitalizamos <br/>tu Marca?</h2>
          <h3 className='h3 lg:max-w-[455px] lg:mb-48'>
            Diseñamos un <a href='/branding' className='text-gradient text-red-500'>Logo</a> acorde 
            a tu marca, creamos una <a href='/webdevelopment' className='text-gradient text-red-500'>Web</a> y 
            aplicamos estrategias de <a href='/marketing' className='text-gradient text-red-500'>Marketing</a> en las redes.
          </h3>
          <a href='/work'>
            <button className='btn btn-sm'>Ver Últimos Trabajos</button>
          </a>
          
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          {/* service list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div 
                  className='border-b border-white/20 h-[146px] 
                  mb-[38px] flex' 
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <a href={link}>
                      <h4 className='text-red-500 text-[20px] tracking-wider font-primary 
                      font-bold mb-6'>
                        {name}
                      </h4>
                    </a>
                    
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a 
                      href={link} 
                      className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className='text-red-500 font-bold text-sm'>
                      Ver Más
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
