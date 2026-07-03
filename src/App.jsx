import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Cake,
  Candy,
  Cookie,
  IceCreamBowl,
  MapPin,
  Menu,
  X,
} from 'lucide-react';

import mine from './assets/Mine.jpeg';
import ovoKinder from './assets/ovoKinder.jpeg';
import bolochan from './assets/bolochan.jpeg';
import cookie from './assets/cookie.jpeg';
import uva from './assets/uva.jpeg';
import sobremesa from './assets/sobremesa.jpeg';
import boloPudim from './assets/boloPudim.jpeg';
import ovoUva from './assets/ovoUva.jpeg';
import caixa from './assets/caixa.jpeg';
import { LuInstagram } from 'react-icons/lu';


const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' }
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className='bg-rose-50 text-[#b8860b]'>
      <header className='sticky top-0 z-40 border-b border-rose-200 bg-white/80'>
        <div className='mx-auto max-w-6xl px-4 py-4 flex items-center justify-between'>
          <a href="#" className='flex flex-col items-start gap-0'>
            <span className='text-lg font-bold tracking-tight leading-none'>Pot Cakes</span>
            <span className='text-xs font-medium uppercase tracking-wide text-[#523a00]/70 leading-none mt-1'>Confeitaria</span>
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
            <a
              href="https://wa.me/5544984645033"
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center justify-center gap-2 rounded-full text-white bg-rose-400 px-6 py-3 font-medium hover:bg-rose-500 transition cursor-pointer'>
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
              className='absolute inset-0 bg-black/60 backdrop-blur-sm'
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className='fixed right-0 top-0 h-full w-80 bg-rose-50 border-l border-rose-200 shadow-xl flex flex-col overflow-hidden'
            >

              <div className='absolute -top-10 -right-16 size-56 rounded-full bg-gradient-to-br from-[#fcc53a]/30 to-rose-300/30 blur-3xl pointer-events-none' />

              <div className='relative p-6 flex items-center justify-between'>
                <a href="#" onClick={() => setOpen(false)} className='flex flex-col items-start gap-0'>
                  <span className='font-semibold text-[#b8860b] text-xl'>
                    Pot Cakes
                  </span>
                  <span className='text-xs font-medium uppercase tracking-wide text-[#523a00]/70 leading-none mt-1'>
                    Confeitaria
                  </span>
                </a>
                <motion.button
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  className='p-2 rounded-lg transition-colors duration-300'
                  onClick={() => setOpen(false)}
                >
                  <X className='size-5' />
                </motion.button>
              </div>


              <motion.div
                variants={listVariants}
                initial='hidden'
                animate='visible'
                className='relative flex-1 flex flex-col gap-2 px-6 mt-6 items-center'
              >
                {navLinks.map((l) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    variants={itemVariants}
                    className='flex items-center rounded-2xl px-3 py-3 text-[#523a00] text-lg font-medium active:bg-white/60 transition-colors'
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </motion.div>

              <div className='relative px-6 pb-8 pt-4 border-t border-rose-200 flex flex-col gap-3'>

                <a
                  href="https://wa.me/5544984645033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-flex items-center justify-center gap-2 rounded-2xl text-white bg-rose-400 px-6 py-3 font-medium hover:bg-rose-500 active:scale-95 transition-all'>
                  Fazer pedido
                </a>
                <a
                  href="https://www.instagram.com/pot_cakes.confeitaria?igsh=ZTZnZ256bGQwMXc2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-flex items-center justify-center gap-2 text-sm text-[#523a00]/70'
                >
                  <LuInstagram className='size-4' />
                  @pot_cakes.confeitaria
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence >



      {/* Heroo */}
      <section className='relative overflow-hidden' >
        <div className='mx-auto max-w-6xl px-4 py-20 relative flex flex-col md:flex-row items-center gap-12'>

          <div className='flex-1 max-w-xl order-1'>
            <motion.h1 initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='font-serif text-4xl md:text-5xl font-extrabold text-[#b8860b] max-w-lg leading-tight'
            >
              Sabor artesanal em <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b6914] to-[#fcc53a]'>
                cada detalhe
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-5 text-[#523a00] font-serif leading-relaxed'
            >
              Bolos personalizados, doces finos, cookies artesanais e sobremesas
              sofisticadas. Tudo preparado com ingredientes selecionados e muito capricho.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-10 flex flex-row gap-3'
            >
              <a href="https://wa.me/5544984645033"
                target="_blank"
                rel="noopener noreferrer" className='inline-flex items-center justify-center gap-2 rounded-full text-white bg-rose-400 px-6 py-3 font-medium hover:bg-rose-500 transition cursor-pointer'>
                Fazer Pedido
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-16 flex flex-row flex-wrap gap-2'
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
                    <p className='text-[#b8860b] text-xs'>Feito com capricho</p>
                  </div>
                </div>
              </div>


              {/* Area branca embaixo da imagem */}
              <div className='px-5 py-4 flex items-center justify-between'>
                <p className='text-[#523a00] font-semibold text-sm'>Bolos personalizados</p>
                <a
                  href="https://wa.me/5544984645033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-rose-400 border border-rose-300 rounded-full px-3 py-1 text-xs cursor-pointer hover:bg-rose-50 transition'>
                  + Encomendar
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section >



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
              Quem somos
            </span>

            <h2 className='mt-2 text-3xl md:text-4xl font-extrabold text-[#b8860b]'>
              Receitas únicas, <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b6914] to-[#fcc53a]'>
                momentos inesquecíveis
              </span>
            </h2>

            <p className='mt-4 text-[#523a00] font-serif leading-relaxed'>
              A Pot Cakes é uma confeitaria artesanal que nasceu da paixão por criar
              doces únicos. Cada encomenda é tratada com atenção especial, do planejamento
              à entrega, garantindo qualidade e sabor em cada mordida.
            </p>

            <p className='mt-3 text-[#523a00] font-serif leading-relaxed'>
              Aqui, acreditamos que um bom doce tem o poder de aproximar pessoas e
              tornar qualquer ocasião ainda mais especial.
            </p>

            {/*Números e conquistas */}
            <div className='mt-8 grid grid-cols-3 gap-4'>
              {[
                { numero: "6+", label: "Anos de experiência" },
                { numero: "700+", label: "Clientes satisfeitos" },
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

      </section >



      {/*Produtos */}
      <section id='produtos' className='py-20 bg-rose-50' >
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
              Encomendas personalizadas feitas com ingredientes de qualidade
            </p>
          </motion.div>

          {/*Grid de produtos */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                img: bolochan,
                badge: 'Mais Pedido',
                title: 'Bolos & Tortas',
                desc: 'Bolos artesanais personalizados para aniversários, casamentos e toda ocasião especial, com acabamento impecável.',
              },
              {
                img: sobremesa,
                badge: 'Especial',
                title: 'Doces Finos',
                desc: 'Brigadeiros gourmet, trufas e docinhos artesanais ideais para presentear ou encantar os convidados do seu evento.',
              },
              {
                img: cookie,
                badge: 'Novidade',
                title: 'Cookies Artesanais',
                desc: 'Crocantes por fora, macios por dentro — nossos cookies são feitos com recheios generosos e ingredientes selecionados.',
              },
              {
                img: uva,
                badge: 'Sofisticados',
                title: 'Sobremesas',
                desc: 'Criações sofisticadas que combinam texturas e sabores para encerrar qualquer celebração com chave de ouro.',
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
                    <a href="https://wa.me/5544984645033"
                      target="_blank"
                      rel="noopener noreferrer" className='opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-rose-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-500 cursor-pointer'>
                      Encomendar
                    </a>
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
            ))}
          </div>
        </div>
      </section >


      {/*Galeria */}
      <section id='galeria' className='py-20 bg-white' >
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <span className='text-rose-400 font-medium text-sm uppercase tracking-widest'>
              Galeria
            </span>
            <h2 className='mt-2 text-3xl md:text-4xl font-extrabold text-[#b8860b]'>
              Feitos com <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b6914] to-[#fcc53a]'>muito amor</span>
            </h2>
          </motion.div>

          {/*Grid mansonry */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

            {/* 1º imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='md:row-span-2 rounded-3xl overflow-hidden shadow-md group'
            >
              <img src={caixa} alt="Caixa de presente" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-square md:aspect-auto' />
            </motion.div>

            {/* 2º imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className='rounded-3xl overflow-hidden shadow-md group'
            >
              <img src={boloPudim} alt="Bolo de pudim" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-square' />
            </motion.div>

            {/* 3º imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='rounded-3xl overflow-hidden shadow-md group'
            >
              <img src={ovoUva} alt="Ovo de colher de uva" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-square' />
            </motion.div>

            {/* 4º imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='md:col-span-2 rounded-3xl overflow-hidden shadow-md group'
            >
              <img src={bolochan} alt="Bolo Chantilly" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[2/1]' />
            </motion.div>

            {/* 5º imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className='rounded-3xl overflow-hidden shadow-md group'
            >
              <img src={uva} alt="Picolé gourmet" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-square' />
            </motion.div>

            {/* Imagem 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className='rounded-3xl overflow-hidden shadow-md group'
            >
              <img src={cookie} alt="Bolo com frutas" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-square' />
            </motion.div>

            {/* Imagem 7 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className='rounded-3xl overflow-hidden shadow-md group'
            >
              <img src={sobremesa} alt="Trufa gourmet" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-square' />
            </motion.div>
          </div>
        </div>
      </section >

      {/* Avaliações */}
      <section id='avaliacoes' className='py-20 bg-rose-50' >
        <div className='mx-auto max-w-6xl px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <span className='text-rose-400 font-medium text-sm uppercase tracking-widest'>
              Depoimentos
            </span>
            <h2 className='mt-2 text-3xl md:text-4xl font-extrabold text-[#b8860b]'>
              Quem prova, <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b6914] to-[#fcc53a]'>aprova</span>
            </h2>
          </motion.div>

          {/* Grid com as avaliações */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                texto: 'Encomendei um bolo personalizado e fiquei impressionada com o resultado! Lindo visualmente e ainda mais gostoso. Toda a família elogiou muito.',
                nome: 'Amanda',
                tipo: 'Cliente fiel',
                destaque: false,
              },
              {
                texto: 'Os cookies da Pot Cakes são simplesmente incríveis. Pedi para um chá de bebê e foram um sucesso absoluto. Com certeza vou encomendar mais vezes!',
                nome: 'Camila',
                tipo: 'Cliente Satisfeita',
                destaque: true,
              },
              {
                texto: 'Atendimento atencioso do início ao fim. Os doces finos para o meu evento ficaram perfeitos, apresentação elegante e sabor que todo mundo adorou.',
                nome: 'Patricia',
                tipo: 'Cliente nova',
                destaque: false,
              }
            ].map((d, i) => (
              <motion.div
                key={d.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                  ${d.destaque ? 'bg-rose-400 text-white scale-105'
                    : 'bg-white text-[#523a00]'
                  }`}
              >
                {/* Estrelas */}
                <div className='flex gap-1 mb-4'>
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className={d.destaque ? 'text-white' : 'text-[#b8860b]'}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Texto */}
                <p className={`italic font-serif leading-relaxed mb-6 
                  ${d.destaque ? 'text-white/90' : 'text-[#523a00]/80'
                  }`}
                >
                  "{d.texto}"
                </p>

                {/* Avatar + nome */}
                <div className='flex items-center gap-3'>
                  <div className={`size-10 rounded-full flex items-center justify-center font-bold 
                      ${d.destaque
                      ? 'bg-white/20 text-white'
                      : 'bg-rose-100 text-rose-400'
                    }`}
                  >
                    {d.nome.charAt(0)}
                  </div>
                  <div>
                    <p className='font-semibold text-sm'>{d.nome}</p>
                    <p className={`text-xs ${d.destaque ? 'text-white/70' : 'text-[#523a00]/60'}`}>
                      {d.tipo}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section >

      {/* CTA Whats */}
      <section className='py-20 bg-gradient-to-br from-[#8b6914] to-[#523a00] text-center' >
        <div className='mx-auto max-w-2xl px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className='text-[#fcc53a] font-medium text-sm uppercase tracking-widest'>
              Pronto para encomendar?
            </span>
            <h2 className='mt-3 text-3xl md:text-4xl font-serif font-bold text-white leading-tight'>
              Seu doce especial <br />
              <span className='italic text-[#fcc53a]'>começa aqui</span>
            </h2>
            <p className='mt-4 text-white/80 font-serif'>
              Entre em contato pelo WhatsApp e conte como podemos tornar sua ocasião ainda mais doce.
            </p>


            <a
              href="https://wa.me/5544984645033"
              target='_blank'
              rel="noopener noreferrer"
              className='mt-8 inline-flex items-center gap-2 bg-[#fcc53a] text-[#523a00] px-8 py-4 rounded-full font-semibold hover:bg-[#ffd966] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300'
            >
              <svg className='size-5' viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-1.746-.872-2.886-1.557-4.034-3.53-.305-.524.305-.486.875-1.62.099-.197.05-.371-.05-.52-.099-.15-.673-1.62-.922-2.19-.247-.57-.498-.494-.673-.494-.169 0-.4-.025-.6-.025-.198 0-.523.075-.797.371-.273.296-1.043 1.02-1.043 2.49 0 1.471 1.07 2.89 1.219 3.085.149.198 2.066 3.16 5.018 4.301 2.95 1.143 2.95.762 3.479.715.526-.05 1.694-.694 1.92-1.36.227-.665.227-1.235.149-1.359-.075-.135-.273-.21-.574-.36" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.851 5.058 2.291 7.034L1.5 22.5l3.61-1.197A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.991 0-3.873-.526-5.518-1.518l-.394-.236-3.07.99.998-2.99-.255-.402A9.738 9.738 0 0 1 2.182 12C2.182 6.582 6.582 2.182 12 2.182S21.818 6.582 21.818 12 17.418 21.818 12 21.818z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section >

      {/* Footer */}
      <footer className='bg-[#523a00] text-white/80 pt-16 pb-8' >
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

            {/* coluna sobre */}
            <div>
              <h3 className='text-lg font-serif font-bold text-white'>Pot Cakes</h3>
              <p className='text-xs uppercase tracking-wide text-[#fcc53a]'>Confeitaria</p>
              <p className='mt-4 text-sm leading-relaxed'>
                Confeitaria artesanal especializada em bolos, doces e sobremesas personalizadas.
                Encomendas com carinho e qualidade.
              </p>
            </div>

            {/* coluna Produtos */}
            <div>
              <h4 className='text-sm font-semibold uppercase tracking-wide text-[#fcc53a]'>
                Produtos
              </h4>
              <ul className='mt-4 space-y-2 text-sm'>
                <li><a href="#produtos" className='hover:text-[#fcc53a] transition-colors duration-300'>Bolos & Tortas</a></li>
                <li><a href="#produtos" className='hover:text-[#fcc53a] transition-colors duration-300'>Doces Finos</a></li>
                <li><a href="#produtos" className='hover:text-[#fcc53a] transition-colors duration-300'>Cookies Artesanais</a></li>
                <li><a href="#produtos" className='hover:text-[#fcc53a] transition-colors duration-300'>Sobremesas</a></li>
              </ul>
            </div>

            {/* coluna Contato */}
            <div>
              <h4 className='text-sm font-semibold uppercase tracking-wide text-[#fcc53a]'>Contato</h4>
              <ul className='mt-4 space-y-3 text-sm'>
                <li>
                  <a
                    href="https://wa.me/5544984645033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 hover:text-[#fcc53a] transition-colors duration-300'
                  >
                    <svg className='size-4' viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-1.746-.872-2.886-1.557-4.034-3.53-.305-.524.305-.486.875-1.62.099-.197.05-.371-.05-.52-.099-.15-.673-1.62-.922-2.19-.247-.57-.498-.494-.673-.494-.169 0-.4-.025-.6-.025-.198 0-.523.075-.797.371-.273.296-1.043 1.02-1.043 2.49 0 1.471 1.07 2.89 1.219 3.085.149.198 2.066 3.16 5.018 4.301 2.95 1.143 2.95.762 3.479.715.526-.05 1.694-.694 1.92-1.36.227-.665.227-1.235.149-1.359-.075-.135-.273-.21-.574-.36" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.851 5.058 2.291 7.034L1.5 22.5l3.61-1.197A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.991 0-3.873-.526-5.518-1.518l-.394-.236-3.07.99.998-2.99-.255-.402A9.738 9.738 0 0 1 2.182 12C2.182 6.582 6.582 2.182 12 2.182S21.818 6.582 21.818 12 17.418 21.818 12 21.818z" />
                    </svg>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pot_cakes.confeitaria?igsh=ZTZnZ256bGQwMXc2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 hover:text-[#fcc53a] transition-colors duration-300'
                  >
                    <LuInstagram className='size-4' />
                    @pot_cakes.confeitaria
                  </a>
                </li>
                <li className='flex items-center gap-2 hover:text-[#fcc53a] transition-colors duration-300 cursor-pointer'>
                  <MapPin className='size-4' />
                  Indianópolis, PR
                </li>
              </ul>
            </div>
          </div>

          {/* Final */}
          <div className='mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60'>
            <p>&copy; {new Date().getFullYear()} Pot Cakes Confeitaria - Todos os direitos reservados</p>
          </div>
        </div>
      </footer >
      <a
        href="https://wa.me/5544984645033"
        target="_blank"
        rel="noopener noreferrer"
        className='fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300'
      >
        <svg className='size-6' viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-1.746-.872-2.886-1.557-4.034-3.53-.305-.524.305-.486.875-1.62.099-.197.05-.371-.05-.52-.099-.15-.673-1.62-.922-2.19-.247-.57-.498-.494-.673-.494-.169 0-.4-.025-.6-.025-.198 0-.523.075-.797.371-.273.296-1.043 1.02-1.043 2.49 0 1.471 1.07 2.89 1.219 3.085.149.198 2.066 3.16 5.018 4.301 2.95 1.143 2.95.762 3.479.715.526-.05 1.694-.694 1.92-1.36.227-.665.227-1.235.149-1.359-.075-.135-.273-.21-.574-.36" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.851 5.058 2.291 7.034L1.5 22.5l3.61-1.197A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.991 0-3.873-.526-5.518-1.518l-.394-.236-3.07.99.998-2.99-.255-.402A9.738 9.738 0 0 1 2.182 12C2.182 6.582 6.582 2.182 12 2.182S21.818 6.582 21.818 12 17.418 21.818 12 21.818z" />
        </svg>
      </a>
    </div >
  )
}

export default App
