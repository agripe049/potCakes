import './App.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X
} from 'lucide-react';
import { div } from 'framer-motion/client';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#feedbacks', label: 'Feedbacks' },
  { href: '#nossa-historia', label: 'Nossa história' },
  { href: '#contatos', label: 'Contatos' }
];

function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className='bg-rose-100 text-[#8b6914]'>
      <header className='sticky top-0 z-40 border-b border-white/5'>
        <div className='mx-auto max-w-6xl px-4 py-4 flex items-center justify-between'>
          <a href="#" className='flex items-center gap-2'>
            <span className='font-bold tracking-tight'>Pot Cakes</span>
          </a>

          <nav className='hidden md:flex items-center gap-6 text-sm'>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <button className='md:hidden p-2 rounded-lg'
            onClick={() => setOpen(true)}>
            <Menu className='size-5' />
          </button>
        </div>

        {open && (
          <div className='md:hidden'>
            <div className='fixed bg-black/60'
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
                    <a key={l.href} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default App
