'use client'
import Link from 'next/link'
import { AboutMe } from './components/Sections/AboutMe'
import { Projects } from './components/Sections/Projects'
import { Knowledge } from './components/Sections/Knowledge'
import { Contact } from './components/Sections/Contact'
import { ButtonLink } from './components/Button/Button'
import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { LinesAnimation } from './components/LinesAnimation'
import { Introduction } from './components/Sections/Introduction'

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
                            <li className="rounded-md px-2 py-1 transition-colors duration-300 hover:bg-slate-300 hover:text-gray-800">
                                <Link href="#projects">Projetos</Link>
                            </li>
                            <li className="rounded-md px-2 py-1 transition-colors duration-300 hover:bg-slate-300 hover:text-gray-800 ">
                                <Link href="#about-me">Quem sou</Link>
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
                    <Introduction />
                    <>
                        <Projects />
                        <AboutMe />
                        <Knowledge />
                        <Contact />
                    </>
                </main>

                <footer className="h-20 border border-gray-300"></footer>

                <ButtonLink
                    className="fixed  bottom-5 right-3 bg-gradient-to-r from-cyan-500 to-blue-700 shadow-[0px_4px_15px_6px_#00000028] md:bottom-10 md:right-5"
                    variant="primary"
                    href="/Curriculo-Paulo-Henrique-da-Silva-Melo-Desenvolvedor.pdf"
                    target="_blank"
                >
                    <Download className="h-5 w-5 text-white " />
                    <span className="">Currículo</span>
                </ButtonLink>
            </div>
        </>
    )
}
