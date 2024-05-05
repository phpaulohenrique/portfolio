'use client'
import Link from 'next/link'
import { AboutMe } from './components/Sections/AboutMe'
import { Projects } from './components/Sections/Projects'
import { Knowledge } from './components/Sections/Knowledge'
import { Contact } from './components/Sections/Contact'
import { ButtonLink } from './components/Button/Button'
import { ArrowDown, Briefcase, Menu, Send, X } from 'lucide-react'
import { useState } from 'react'
import { LinesAnimation } from './components/LinesAnimation'
import { Fade, Slide } from 'react-awesome-reveal'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenuBar = () => setIsMenuOpen((state) => !state)

    return (
        <>
            <LinesAnimation />
            <div className="text-slate-800">
                <header className="fixed  top-0 z-20 w-full bg-gray-500 bg-opacity-5 bg-clip-padding shadow backdrop-blur-[5px] backdrop-filter">
                    <div className="m-auto flex h-12 max-w-5xl  items-center justify-between p-4 md:p-3 ">
                        <Link href="#start">
                            <span className="text-base text-gray-800">Paulo Henrique</span>
                        </Link>
                        <ul className="hidden items-center gap-3 text-sm text-gray-700  sm:flex ">
                            <li className="rounded-md px-2 py-1 transition-colors duration-300 hover:bg-slate-300 hover:text-gray-800 ">
                                <Link href="#about-me">Quem sou</Link>
                            </li>
                            <li className="rounded-md px-2 py-1 transition-colors duration-300 hover:bg-slate-300 hover:text-gray-800">
                                <Link href="#projects">Projetos</Link>
                            </li>
                            <li className="rounded-md px-2 py-1 transition-colors duration-300 hover:bg-slate-300 hover:text-gray-800">
                                <Link href="#knowledge">Conhecimentos</Link>
                            </li>
                            <li className="rounded-md px-2 py-1 transition-colors duration-300 hover:bg-slate-300 hover:text-gray-800">
                                <Link href="#contact">Contato</Link>
                            </li>
                        </ul>
                        <button onClick={toggleMenuBar} className="sm:hidden">
                            {isMenuOpen ? (
                                <X className="h-6 w-6 text-sky-600" />
                            ) : (
                                <Menu className="h-6 w-6 text-sky-600" />
                            )}
                        </button>
                    </div>
                </header>

                <div
                    className={`transition-translate fixed z-10 w-full -translate-y-full bg-teal-100 bg-opacity-[.15] bg-clip-padding px-6 py-5 shadow-lg backdrop-blur-[10px] backdrop-filter duration-500 ease-out ${
                        isMenuOpen && 'fixed mt-12 translate-y-0'
                    }`}
                >
                    <nav>
                        <ul className="flex flex-col gap-4 text-sm text-gray-800  sm:hidden  ">
                            <li className="w-max underline decoration-emerald-600 decoration-solid underline-offset-4 ">
                                <Link href="#about-me" onClick={() => setIsMenuOpen(false)}>
                                    Quem sou
                                </Link>
                            </li>
                            <li className="w-max underline decoration-emerald-600 decoration-solid  underline-offset-4">
                                <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
                                    Projetos
                                </Link>
                            </li>
                            <li className="w-max underline decoration-emerald-600 decoration-solid underline-offset-4">
                                <Link href="#knowledge" onClick={() => setIsMenuOpen(false)}>
                                    Conhecimentos
                                </Link>
                            </li>
                            <li className="w-max underline decoration-emerald-600 decoration-solid underline-offset-4">
                                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                                    Contato
                                </Link>
                            </li>
                        </ul>

                    </nav>
                   
                </div>

                <main className="m-auto min-h-screen w-full max-w-5xl p-6 text-center sm:p-4">
                    <section
                        className="flex min-h-screen flex-col items-center justify-center"
                        id="start"
                    >
                        <Slide direction="up" triggerOnce>
                            <h1 className="text-2xl text-slate-700 lg:text-3xl">
                                Olá, eu sou o Paulo Henrique{' '}
                                <Fade delay={200} triggerOnce>
                                    <strong className=" mb-3 block bg-gradient-frontend bg-clip-text p-4 text-[4rem] font-black uppercase leading-[4rem] tracking-tight text-transparent lg:text-[5rem]">
                                        frontend developer
                                    </strong>
                                </Fade>
                            </h1>
                            <p className="max-w-lg text-base text-blue-800">
                                Sou Desenvolvedor Web com especialização em Frontend, Dedicado em
                                transformar desafios em interfaces simples por meio da programação!
                            </p>

                            <div className="mt-8 flex gap-4">
                                <ButtonLink variant="secondary" href="#projects">
                                    <Briefcase className="h-6 w-6 text-emerald-600 " />
                                    Projetos
                                </ButtonLink>
                                <ButtonLink variant="primary" href="#contact">
                                    <Send className="h-5 w-5 text-white " />
                                    Contato
                                </ButtonLink>
                            </div>
                            {/* <div className="flex gap-2">
                            <span className="relative h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="absolute inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                            </span>
                            <span>Open to work</span>

                        </div> */}
                        </Slide>
                        <ArrowDown className="absolute bottom-12 h-5 w-5 animate-bounce text-purple-600 " />
                    </section>
                    <>
                        <AboutMe />
                        <Projects />
                        <Knowledge />
                        <Contact />
                    </>
                </main>

                <footer className="h-20 border border-gray-300"></footer>
            </div>
        </>
    )
}
