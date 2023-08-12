'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AboutMe } from './components/Sections/AboutMe'
import { Projects } from './components/Sections/Projects'
import { Knowledge } from './components/Sections/Knowledge'
import { Contact } from './components/Sections/Contact'
import { ButtonLink } from './components/Button/Button'
import { Briefcase, Menu, Send, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenuBar = () => (
        // console.log('oi')
        setIsMenuOpen(state => !state)

    )

    return (
        <>
        <div className="text-gray-800">
            <header className="w-full  bg-gray-500 fixed top-0 bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-5 shadow z-20">
                <div className="max-w-5xl m-auto flex justify-between  items-center p-4 md:p-3 h-12 ">
                    <span className="text-gray-800 text-base">Paulo Henrique</span>
                    <ul className="hidden gap-5 items-center text-sm text-gray-800  sm:flex ">
                        <li>
                            <Link href="#about-me">Quem sou</Link>
                        </li>
                        <li>
                            <Link href="#projects">Projetos</Link>
                        </li>
                        <li>
                            <Link href="#knowledge">Conhecimentos</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contato</Link>
                        </li>
                    </ul>
                    <button onClick={toggleMenuBar} className='sm:hidden'>
                        { isMenuOpen ? <X className="w-6 h-6 text-sky-600"/> : <Menu className="w-6 h-6 text-sky-600"/>}
                        
                    </button>
                </div>
            </header>

            <div className={` bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-opacity-[.15] shadow-lg bg-teal-100 w-full py-5 px-6 -translate-y-full fixed transition-translate duration-500 ease-out z-10 ${isMenuOpen && 'mt-12 fixed translate-y-0'}`}>
                    <ul className="flex flex-col gap-4 text-sm text-gray-800  sm:hidden  ">
                            <li className="underline decoration-solid decoration-green-500 w-max">
                                <Link href="#about-me" onClick={() => setIsMenuOpen(false)}>Quem sou</Link>
                            </li>
                            <li className="underline decoration-solid decoration-green-500 w-max">
                                <Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projetos</Link>
                            </li>
                            <li className="underline decoration-solid decoration-green-500 w-max">
                                <Link href="#knowledge" onClick={() => setIsMenuOpen(false)}>Conhecimentos</Link>
                            </li>
                            <li className="underline decoration-solid decoration-green-500 w-max">
                                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</Link>
                            </li>
                    </ul>
            </div>

            <main className="min-h-screen text-center w-full m-auto max-w-5xl p-6">

                <section className="min-h-screen flex items-center justify-center flex-col ">
                    <h1 className="text-2xl lg:text-3xl text-slate-700">
                        Olá, eu sou o Paulo Henrique{' '}
                        <strong className=" text-[3.5rem] lg:text-[5rem] p-4 uppercase font-black block mt-2 mb-5 tracking-tight bg-clip-text text-transparent bg-gradient-frontend leading-[3.5rem]">
                            frontend developer
                        </strong>
                    </h1>
                    <p className="max-w-lg text-base text-blue-900">
                        Sou Desenvolvedor Web com foco em desenvolvimento Frontend. Transformo
                        problemas em interfaces simples através do código.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <ButtonLink variant="secondary" href="#projects">
                            <Briefcase className="w-6 h-6 text-emerald-600 " />
                            Projetos

                        </ButtonLink>
                        <ButtonLink variant="primary" href="#contact">
                            <Send className="w-5 h-5 text-white " />
                            Contato
                        </ButtonLink>

                    </div>

                </section>
                <>
                    <AboutMe />
                    <Projects />
                    <Knowledge />
                    <Contact/>
                </>
            </main>

            <footer className="bg-gray-200 h-28 mt-20"></footer>
        </div>


        </>
        
    )
}
