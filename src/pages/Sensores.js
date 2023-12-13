import React from 'react'
// image
import digitalMarketing from '../assets/digitalMarketing.jpg';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// img
import Img1 from '../assets/termostatos.png';
import Img2 from '../assets/termocuplas.png';
import Img3 from '../assets/campinis.png';

const Marketing = () => {
  return (
    <>


        <div className='w-full'>
            <motion.div 
                
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-screen h-[30vh] lg:h-[40vh] top-0'
            >
                <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
                <img className='h-full w-full object-cover z-1' src={digitalMarketing} alt='Green Card & Visa'/>
                <div className='absolute top-[18%] lg:top-[24%] max-w-[1240px] w-full text-white z-20 p-2'>
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem]'>SENSORES DE TEMPERATURA</h2>
                    
                </div>
            </motion.div>

            <div className='container mx-auto'>
                <div className='mt-2 grid gap-8'>
                    
                    <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex-1 flex flex-col gap-8 md:flex-row'>
                    {/* image */}
                    <div className='group relative overflow-hidden border-2 
                    border-white/50 rounded-xl'>
                        {/* overlay */}
                        <div className=' group-hover:bg-black/70 w-full h-full absolute 
                        z-30 transition-all duration-300'></div>
                        {/* img */}
                        <img 
                        className='group-hover:scale-125 transition-all duration-500'
                        src={Img1} 
                        alt='img' 
                        />
                        {/* status */}
                        <p className='absolute -bottom-full left-12 
                        group-hover:bottom-32 transition-all duration-500 z-30'>
                            Proyecto Entregado
                        </p>
                        {/* pretitle */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-24 transition-all duration-500 z-30'>
                        <span className='text-gradient'>UI/UX Design NextJS</span>             
                        </div>
                        {/* title */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-14 transition-all duration-700 z-30'>
                        <span className='text-3xl text-white uppercase'>Zeta Group</span>
                        </div>
                        {/* button */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-2 transition-all duration-700 z-30'>
                            <a href='https://zgroup-nextjs.vercel.app/' target='_blank' rel="noreferrer">
                                <button className='btn btn-sm'>DEMO</button>
                            </a>
                        </div>
                    </div>
                    {/* image */}
                    <div className='group relative overflow-hidden border-2 
                    border-white/50 rounded-xl'>
                        {/* overlay */}
                        <div className=' group-hover:bg-black/70 w-full h-full absolute 
                        z-30 transition-all duration-300'></div>
                        {/* img */}
                        <img 
                        className='group-hover:scale-125 transition-all duration-500' 
                        src={Img2} 
                        alt='img' 
                        />
                        {/* status */}
                        <p className='absolute -bottom-full left-12 
                        group-hover:bottom-32 transition-all duration-500 z-30'>
                            EN MANTENIMIENTO
                        </p>
                        {/* pretitle */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-24 transition-all duration-500 z-30'>
                        <span className='text-gradient'>ReactApp Auth Firebase</span>             
                        </div>
                        {/* title */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-14 transition-all duration-700 z-30'>
                        <span className='text-3xl text-white uppercase'>Netflix Clon</span>
                        </div>
                        {/* button */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-2 transition-all duration-700 z-30'>
                            <a href='https://netflix-react-js-f41dc.web.app/' target='_blank' rel="noreferrer">
                                <button className='btn btn-sm'>DEMO</button>
                            </a>
                        </div>
                    </div>
                    {/* image */}
                    <div className='group relative overflow-hidden border-2 
                    border-white/50 rounded-xl'>
                        {/* overlay */}
                        <div className=' group-hover:bg-black/70 w-full h-full absolute 
                        z-30 transition-all duration-300'></div>
                        {/* img */}
                        <img 
                        className='group-hover:scale-125 transition-all duration-500' 
                        src={Img3} 
                        alt='img' 
                        />
                        {/* status */}
                        <p className='absolute -bottom-full left-12 
                        group-hover:bottom-32 transition-all duration-500 z-30'>
                            Plantilla Online
                        </p>
                        {/* pretitle */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-24 transition-all duration-500 z-30'>
                        <span className='text-gradient'>NextJS y Alojamiento</span>             
                        </div>
                        {/* title */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-14 transition-all duration-700 z-30'>
                        <span className='text-3xl text-white uppercase'>Portfolio Vercel</span>
                        </div>
                        {/* button */}
                        <div className='absolute -bottom-full left-12 
                        group-hover:bottom-2 transition-all duration-700 z-30'>
                            <a href='https://brisider-nextjs.vercel.app/' target='_blank' rel="noreferrer">
                                <button className='btn btn-sm'>DEMO</button>
                            </a>
                        </div>
                    </div>
                    </motion.div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Marketing