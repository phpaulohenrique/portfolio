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
            <div className="text-gray-800">
                <header className="w-full  bg-gray-500 fixed top-0 bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-5 shadow z-20">
                    <div className="max-w-5xl m-auto flex justify-between  items-center p-4 md:p-3 h-12 ">
                        <Link href="#start">
                            <span className="text-gray-800 text-base">Paulo Henrique</span>
                        </Link>
                        <ul className="hidden gap-3 items-center text-sm text-gray-700  sm:flex ">
                            <li className="px-2 py-1 rounded-md hover:bg-slate-300 hover:text-gray-800 transition-colors duration-300 ">
                                <Link href="#about-me">Quem sou</Link>
                            </li>
                            <li className="px-2 py-1 rounded-md hover:bg-slate-300 hover:text-gray-800 transition-colors duration-300">
                                <Link href="#projects">Projetos</Link>
                            </li>
                            <li className="px-2 py-1 rounded-md hover:bg-slate-300 hover:text-gray-800 transition-colors duration-300">
                                <Link href="#knowledge">Conhecimentos</Link>
                            </li>
                            <li className="px-2 py-1 rounded-md hover:bg-slate-300 hover:text-gray-800 transition-colors duration-300">
                                <Link href="#contact">Contato</Link>
                            </li>
                        </ul>
                        <button onClick={toggleMenuBar} className="sm:hidden">
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-sky-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-sky-600" />
                            )}
                        </button>
                    </div>
                </header>

                <div
                    className={`bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-opacity-[.15] shadow-lg bg-teal-100 w-full py-5 px-6 -translate-y-full fixed transition-translate duration-500 ease-out z-10 ${
                        isMenuOpen && 'mt-12 fixed translate-y-0'
                    }`}
                >
                    <ul className="flex flex-col gap-4 text-sm text-gray-800  sm:hidden  ">
                        <li className="underline decoration-solid decoration-emerald-600 underline-offset-4 w-max ">
                            <Link href="#about-me" onClick={() => setIsMenuOpen(false)}>
                                Quem sou
                            </Link>
                        </li>
                        <li className="underline decoration-solid decoration-emerald-600 underline-offset-4  w-max">
                            <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
                                Projetos
                            </Link>
                        </li>
                        <li className="underline decoration-solid decoration-emerald-600 underline-offset-4 w-max">
                            <Link href="#knowledge" onClick={() => setIsMenuOpen(false)}>
                                Conhecimentos
                            </Link>
                        </li>
                        <li className="underline decoration-solid decoration-emerald-600 underline-offset-4 w-max">
                            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

                <main className="min-h-screen text-center w-full m-auto max-w-5xl p-6 sm:p-4">
                    <section
                        className="min-h-screen flex items-center justify-center flex-col"
                        id="start"
                    >
                        <Slide direction="up" triggerOnce>
                            <h1 className="text-2xl lg:text-3xl text-slate-700">
                                Olá, eu sou o Paulo Henrique{' '}
                                <Fade delay={200} triggerOnce>
                                    <strong className=" text-[4rem] lg:text-[5rem] p-4 uppercase font-black block mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-frontend leading-[4rem]">
                                        frontend developer
                                    </strong>
                                </Fade>
                            </h1>
                            <p className="max-w-lg text-base text-blue-800">
                                Sou Desenvolvedor Web com especialização em Frontend, Dedicado em
                                transformar desafios em interfaces simples por meio da programação!
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
                            {/* <div className="flex gap-2">
                            <span className="relative h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="absolute inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                            </span>
                            <span>Open to work</span>

                        </div> */}
                        </Slide>
                        <ArrowDown className="w-5 h-5 text-purple-600 absolute bottom-20 animate-bounce " />
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
