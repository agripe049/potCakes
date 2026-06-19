import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Cake,
  Candy,
  Cookie,
  IceCreamBowl,
  Menu,
  X
} from 'lucide-react';

import mine from './assets/Mine.jpeg';
import ovoKinder from './assets/ovoKinder.jpeg';
import bolochan from './assets/bolochan.jpeg';
import cookie from './assets/cookie.jpeg';
import uva from './assets/uva.jpeg';
import sobremesa from './assets/sobremesa.jpeg';


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
      <header className='sticky top-0 z-40 border-b border-rose-200 bg-white/80'>
        <div className='mx-auto max-w-6xl px-4 py-4 flex items-center justify-between'>
          <a href="#" className='flex items-center gap-2'>
            <span className='text-lg font-bold tracking-tight'>Pot Cakes Confeitaria</span>
          </a>

          <nav className='hidden md:flex items-center gap-6 text-sm'>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className='relative text-[#b8860b] text-[15px] font-medium hover:text-[#fcc53a] transition-colors duration-300 group'
              >
                {l.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fcc53a] transition-all duration-300 group-hover:w-full rounded-full' />
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
      </header>

      <AnimatePresence>
        {open && (
          <div className='md:hidden fixed inset-0 z-50'>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='absolute inset-0 bg-black/60'
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='fixed right-0 top-0 h-full w-80 bg-rose-100 border-l border-rose-200 p-6 shadow-xl'
            >

              <div className='flex items-center justify-between mb-6'>
                <a href="#" onClick={() => setOpen(false)}>
                  <span className='font-semibold text-[#b8860b] text-xl'>
                    Pot Cakes
                  </span>
                </a>
                <button className='p-2 rounded-lg' onClick={() => setOpen(false)}>
                  <X className='size-5' />
                </button>
              </div>

              <div className='flex flex-col gap-6 items-center mt-22'>
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className='relative text-[#523a00] hover:text-[#b8860b] text-xl transition-colors duration-300 group w-fit'
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b8860b] transition-all duration-300 group-hover:w-full rounded-full' />
                  </a>
                ))}

                <a className='mt-2 inline-flex items-center justify-center rounded-2xl text-white bg-rose-400 px-6 py-3 font-medium hover:bg-rose-500 transition-all duration-300 cursor-pointer'>
                  Fazer pedido
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Heroo */}
      <section className='relative overflow-hidden' >
        <div className='mx-auto max-w-6xl px-4 py-20 relative flex flex-col md:flex-row items-center gap-12'>

          <div className='flex-1 max-w-xl order-1'>
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
              className='mt-8 flex flex-row md:flex-row gap-3'
            >
              <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl text-white bg-rose-400 px-6 py-3 font-medium hover:bg-rose-500 transition cursor-pointer'>
                Ver Menu
              </a>
              <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl text-[#523a00] px-6 py-3 font-medium border-2 border-[#b8870b7c] hover:bg-white/30 transition-all duration-300 cursor-pointer'>
                Fazer pedido
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-14 flex flex-row flex-wrap md:flex-row gap-2'
            >
              {["Bolos & Tortas", "Doces", "Cookies", "Sobremesas"].map((label, i) => (
                <div key={label} className='rounded-2xl border border-[#b8870b7c] bg-white/30 px-3 py-2 font-medium transition flex-shrink-0'>
                  <div className='flex items-center gap-2 md:gap-4'>
                    {i === 0 && <Cake className='text-rose-400 size-3 md:size-5' />}
                    {i === 1 && <Candy className='text-pink-400 size-3 md:size-5' />}
                    {i === 2 && <Cookie className='text-[#b8860b] size-3 md:size-5' />}
                    {i === 3 && <IceCreamBowl className='text-rose-300 size-3 md:size-5' />}
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
            className='flex-1 flex justify-center order-2'
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
                <div className='absolute bottom-4 right-4 bg-white rounded-2xl px-2 py-2 flex items-center gap-2 shadow-md'>
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



      {/* Sobre */}
      <section id='sobre' className='py-30 mt-15 bg-amber-50' >
        <div className='mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex-1 flex justify-center'
          >
            <img
              src={ovoKinder}
              alt="Ovo de Kinder"
              className='w-full max-w-sm rounded-3xl object-cover aspect-square shadow-lg '
            />
          </motion.div>

          {/* Texto a direita */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex-1 max-w-xl'
          >
            <span className='text-rose-400 font-medium text-sm uppercase tracking-widest'>
              Nossa história
            </span>

            <h2 className='mt-2 text-3xl md:text-4xl font-extrabold text-[#b8860b]'>
              Feito com amor, <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b6914] to-[#fcc53a]'>
                entregue com carinho
              </span>
            </h2>

            <p className='mt-4 text-[#523a00] font-serif leading-relaxed'>
              A Pot Cakes nasceu do sonho de transformar momentos simples em memórias
              doces. Cada bolo, cada docinho e cada cookie é preparado artesanalmente,
              com ingredientes selecionados e muito cuidado em cada detalhe.
            </p>

            <p className='mt-3 text-[#523a00] font-serif leading-relaxed'>
              Aqui, acreditamos que um bom doce tem o poder de aproximar pessoas e
              tornar qualquer ocasião ainda mais especial.
            </p>

            {/*Números e conquistas */}
            <div className='mt-8 grid grid-cols-3 gap-4'>
              {[
                { numero: "5+", label: "Anos de experiência" },
                { numero: "400+", label: "Clientes satisfeitos" },
                { numero: "100%", label: "Artesanal" },
              ].map((item) => (
                <div key={item.label} className='rounded-2xl border border-[#b8870b7c] bg-white/30 p-2  text-center'>
                  <p className='text-2xl font-extrabold text-[#b8860b]'>{item.numero}</p>
                  <p className='text-xs text-[#523a00] mt-1 font-serif'>{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </section>



      {/*Produtos */}
      <section id='produtos' className='py-20 bg-rose-100'>
        <div className='mx-auto max-w-6xl px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <span className='text-rose-400 font-medium text-sm uppercase tracking-widest'>
              Cardápio
            </span>
            <h2 className='mt-2 text-3xl md:text-4xl font-extrabold text-[#b8860b]'>
              Nossos <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b6914] to-[#fcc53a]'>Produtos</span>
            </h2>
            <p className='mt-3 text-[#523a00] font-serif'>
              Tudo feito sob encomenda com ingredientes selecionados
            </p>
          </motion.div>

          {/*Grid de produtos */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                img: bolochan,
                badge: 'Mais Pedido',
                title: 'Bolos & Tortas',
                desc: 'Bolos artesanais personalizados para todas as ocasiões. Sabores únicos com acabamento impecável.',
              },
              {
                img: sobremesa,
                badge: 'Especial',
                title: 'Doces Finos',
                desc: 'Uma seleção refinada de doces artesanais perfeitos para presentear ou para eventos especiais.',
              },
              {
                img: cookie,
                badge: 'Novidade',
                title: 'Cookies Artesanais',
                desc: 'Cookies crocantes por fora e macios por dentro, com recheios generosos de chocolate, nuts e ingredientes selecionados.',
              },
              {
                img: uva,
                badge: 'Sofisticados',
                title: 'Sobremesas',
                desc: 'Sobremesas sofisticadas para fechar qualquer ocasião com chave de ouro, combinando texturas, sabores e apresentação impecável.',
              }
            ].map((produto, i) => (
              <motion.div
                key={produto.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300'
              >
                {/* Imagem com overlay no hover */}
                <div className='relative overflow-hidden aspect-[4/3]'>
                  <img
                    src={produto.img}
                    alt={produto.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                    <button className='opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-rose-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-500 cursor-pointer'>
                      Encomendar
                    </button>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className='p-5'>
                  <span className='inline-block text-[10px] uppercase tracking-wider font-semibold text-rose-400 bg-rose-50 px-2 py-1 rounded-full'>
                    {produto.badge}
                  </span>
                  <h3 className='mt-3 text-lg font-bold text-[#523a00]'>
                    {produto.title}
                  </h3>
                  <p className='mt-2 text-sm text-[#523a00]/80 font-serif leading-relaxed'>
                    {produto.desc}
                  </p>
                </div>
              </motion.div>
            ))},
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
