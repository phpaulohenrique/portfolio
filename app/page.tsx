'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AboutMe } from './components/Sections/AboutMe'
import { Projects } from './components/Sections/Projects'
import { Knowledge } from './components/Sections/Knowledge'

export default function Home() {
  return (
    <div className="text-gray-900">
      <header className="w-full  bg-gray-500 fixed bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-5 shadow z-10">
        <div className='max-w-5xl m-auto flex justify-between py-3 items-center p-2'>
          <span className='text-gray-800 text-base'>Paulo Henrique</span>
          <ul className='flex gap-5 items-center text-sm text-gray-900 '>
            <li><Link href="#about-me">Quem sou</Link></li>
            <li><Link href="#projects">Projetos</Link></li>
            <li><Link href="#knowledge">Conhecimentos</Link></li>
            <li><Link href="#contact">Contato</Link></li>
          </ul>
        </div>
      </header>

      <main className='min-h-screen text-center w-full m-auto max-w-5xl p-2'>

        <section className='min-h-screen flex items-center justify-center flex-col '>
          <h1 className='text-3xl text-gray-800'>Olá, eu sou o Paulo Henrique <strong className='p-4 uppercase font-black text-[5rem] block mt-3 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-frontend leading-10'>frontend developer</strong></h1>
          <p className='max-w-lg text-base text-blue-900'>Sou Desenvolvedor Web com foco em desenvolvimento Frontend. Transformo problemas em interfaces simples através do código.</p>
        </section>
          <>
            <AboutMe/>
            <Projects/>
            <Knowledge/>
          </>

        
      </main>

      <footer className='bg-gray-200 h-28 mt-20'
      ></footer>
    </div>
  )
}
