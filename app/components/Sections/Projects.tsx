'use client'

import Image from 'next/image'
import { Heading } from '../Heading'
// import phshopImg from '../../assets/phshop.png'
import { projects } from '../../assets/projects'
import { ButtonLink } from '../Button/Button'
import { Github, Send } from 'lucide-react'
import Link from 'next/link'
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
                        className="bg-white px-6 py-6 rounded-md w-[28rem] drop-shadow-xl border border-gray-300 text-left hover:scale-[1.02] transition-all "
                    >
                        <h3 className="text-xl font-medium text-blue-800 mb-8 text-center">
                            {project.name}
                        </h3>
                        <Image src={project.imgUrl} alt={project.name} className="w-full" />
                        <p className="mt-8 text-sm  leading-relaxed">{project.description}</p>
                        <p className="mt-4 text-sm leading-relaxed ">
                            <span className="font-medium text-base text-green-700">
                                Tecnologias Utilizadas:
                            </span>
                            {project.techs} entre outras...
                        </p>
                        <div className="mt-4 flex gap-4 justify-center">
                            <ButtonLink
                                variant="primary"
                                href={project.githubUrl}
                                className="h-9 px-3 min-w-max text-sm"
                            >
                                <Send className="w-5 h-5 text-white " />
                                Projeto
                            </ButtonLink>
                            <ButtonLink
                                variant="secondary"
                                href={project.githubUrl}
                                className="h-9 px-3 min-w-max text-sm"
                            >
                                <Github className="w-5 h-5 text-emerald-600 " />
                                GitHub
                            </ButtonLink>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="https://github.com/phpaulohenrique?tab=repositories"
                target="_blank"
                className="text-sm mt-6 inline-block text-blue-800 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors"
            >
                Mais projetos no GitHub
            </Link>
        </section>
    )
}
