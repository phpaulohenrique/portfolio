'use client'

import Image from 'next/image'
import { Heading } from '../Heading'
// import phshopImg from '../../assets/phshop.png'
import { projects } from '../../assets/projects'
// import Link from 'next/link'
// import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
    console.log(projects)
    return (
        <section className="min-h-[60vh] pt-14" id="projects">
            <Heading>Projetos</Heading>
            <div className="flex gap-6 sm:gap-4 flex-wrap justify-center">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-white px-6 py-6 rounded-md w-[28rem] drop-shadow-xl border border-gray-300 text-left hover:scale-105 transition-all "
                    >
                        <h3 className="text-xl font-medium text-sky-900 mb-8 text-center">
                            {project.name}
                        </h3>
                        <Image src={project.imgUrl} alt={project.name} className="w-full" />
                        <p className="mt-8 text-sm  leading-relaxed">{project.description}</p>
                        <p className="mt-4 text-sm leading-relaxed ">
                            <span className="font-medium text-base text-emerald-700">
                                Tecnologias Utilizadas:
                            </span>
                            {project.techs} entre outras...
                        </p>
                        <div className="mt-8 flex gap-4 justify-center"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
