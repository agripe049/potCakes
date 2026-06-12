import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cake,
  Candy,
  Cookie,
  IceCreamBowl,
  Menu,
  X
} from 'lucide-react';

import mine from './assets/mine.jpeg'


const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contatos', label: 'Contatos' }
];

function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className='bg-rose-100 text-[#b8860b]'>
      <header className='sticky top-0 z-40 border-b border-white/5'>
        <div className='mx-auto max-w-6xl px-4 py-4 flex items-center justify-between'>
          <a href="#" className='flex items-center gap-2'>
            <span className='font-bold tracking-tight'>Pot Cakes Confeitaria</span>
          </a>

          <nav className='hidden md:flex items-center gap-6 text-sm'>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className='hover:text-[#fcc53a] text-[15px]'>
                {l.label}
              </a>
            ))}
            <a className='inline-flex items-center justify-center gap-2 rounded-2xl text-white bg-rose-400 px-6 py-3 font-medium hover:bg-rose-500 transition cursor-pointer'>
              Fazer pedido
            </a>
          </nav>


          <button className='md:hidden p-2 rounded-lg'
            onClick={() => setOpen(true)}>
            <Menu className='size-5' />
          </button>
        </div>

        {open && (
          <div className='md:hidden'>
            <div className='fixed left-0 top-0 h-full w-[calc(100%-320px)] bg-black/60'
              onClick={() => setOpen(false)}>
              <div className='fixed right-0 top-0 h-full w-80 bg-rose-100 border-1 border-white/10 p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <div className='flex items-center gap-2'>
                    <span className='font-semibold'>
                      Pot Cakes
                    </span>
                  </div>
                  <button className='p-2 rounded-lg' onClick={() => setOpen(false)}>
                    <X className='size-5' />
                  </button>
                </div>
                <div className='flex flex-col gap-4 bg-rose-100 p-4 w-90'>
                  {navLinks.map((l) => (
                    <a key={l.href} href={l.href} className='text-[#523a00]'>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Heroo */}
      <section className='relative overflow-hidden'>
        <div className='mx-auto max-w-6xl px-4 py-20 relative flex flex-col md:flex-row items-center gap-12'>

          <div className='flex-1 max-w-xl'>
            <motion.h1 initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='text-4xl md:text-5xl font-extrabold text-[#b8860b] max-w-lg'
            >
              Doces que contam {""} <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b6914] to-[#fcc53a]'>
                histórias de amor
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-4 text-[#523a00] font-serif'
            >
              Bolos, doces, cookies, empadinhas, mini vulcão natural, caseiros,
              tortas doces e salgadas e sobremesas sofisticadas.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-8 flex flex-col md:flex-row gap-3'
            >
              <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl text-white bg-rose-400 px-6 py-3 font-medium hover:bg-rose-500 transition cursor-pointer'>
                Ver Menu
              </a>
              <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl text-[#523a00] px-6 py-3 font-medium border-2 border-[#b8870b7c] hover:bg-white/30 transition cursor-pointer'>
                Fazer pedido
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-14 flex flex-row flex-wrap md:flex-row gap-3'
            >
              {["Bolos & Tortas", "Doces", "Cookies", "Sobremesas"].map((label, i) => (
                <div key={label} className='rounded-2xl border border-[#b8870b7c] bg-white/30 gap-2 px-2 py-2 md:px-4 md:py-2 font-medium transition'>
                  <div className='flex items-center gap-2 md:gap-4'>
                    {i === 0 && <Cake className='text-[#b8860b] size-3 md:size-5' />}
                    {i === 1 && <Candy className='text-[#b8860b] size-3 md:size-5' />}
                    {i === 2 && <Cookie className='text-[#b8860b] size-3 md:size-5' />}
                    {i === 3 && <IceCreamBowl className='text-[#b8860b] size-3 md:size-5' />}
                    <div className='font-semibold text-[#523a00] text-xs md:text-base'>
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='flex-1 flex justify-center'
          >

            <div className='w-full max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white'>

              <div className='relative'>
                {/* Imagem */}
                <img
                  src={mine}
                  alt="Bolo Pot Cakes"
                  className='w-full object-cover aspect-square'
                />

                {/* Badge */}
                <div className='absolute bottom-4 right-4 bg-white rounded-2xl px-4 py-2 flex items-center gap-2 shadow-md'>
                  <Cake className='text-rose-400 size-4' />
                  <div>
                    <p className='text-[#523a00] font-semibold text-sm'>100% Artesanal</p>
                    <p className='text-[#b8860b] text-xs'>Feito com amor</p>
                  </div>
                </div>
              </div>


              {/* Area branca embaixo da imagem */}
              <div className='px-5 py-4 flex items-center justify-between'>
                <p className='text-[#523a00] font-semibold text-sm'>Bolos personalizados</p>
                <span className='text-rose-400 border border-rose-300 rounded-full px-3 py-1 text-xs cursor-pointer hover:bg-rose-50 transition'>
                  + Fazer Pedido
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}

export default App
