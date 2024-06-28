import Image, { StaticImageData } from 'next/image'
import { Heading } from '../Heading'
import { ButtonLink } from '../Button/Button'
import { Github, Send } from 'lucide-react'
import Link from 'next/link'
import phshopImg from '../../assets/img/phshop.png'
import currencyImg from '../../assets/img/currency.png'
import focalPointImg from '../../assets/img/focalpoint.png'
import { Fade } from 'react-awesome-reveal'

interface IProjects {
    name: string
    imgUrl: StaticImageData
    description: string
    appUrl: string
    githubUrl: string
    techs: string
}

export const myProjects: IProjects[] = [
    {
        name: 'PHShop',
        imgUrl: phshopImg,
        description:
            'PHShop é uma aplicação Full Stack que simula o funcionamento de um e-commerce, permitindo que os usuários realizem login por meio do Google e efetuem compras. entre outras funcionalidades.',
        appUrl: 'https://ph-shop.vercel.app',
        githubUrl: 'https://github.com/phpaulohenrique/ph-shop',
        techs: 'TypeScript, Javascript, NextJS, ReactJS, Stitches, Stripe, Prisma, RadixUI',
    },

    {
        name: 'The Currency Converter',
        imgUrl: currencyImg,
        description:
            'The Currency Converter é uma aplicação de conversão de moedas que exibe a taxa de câmbio entre diferentes moedas e gera um gráfico ilustrativo com o histórico da variação. entre outras funcionalidades.',
        appUrl: 'https://thecurrencytracker.vercel.app',
        githubUrl: 'https://github.com/phpaulohenrique/currency-converter',
        techs: 'TypeScript, Javascript, NextJS, ReactJS, TailwindCSS, ApexCharts.',
    },
    {
        name: 'Focal Point',
        imgUrl: focalPointImg,
        description:
            'Focal Point é uma aplicação para gestão de tarefas, permitindo criação de conta, login, criação de tarefas, edição, listagem e exclusão de tarefas. entre outras funcionalidades.',
        appUrl: 'https://focal-point-front-end.vercel.app/sign-up',
        githubUrl: 'https://github.com/phpaulohenrique/focal-point-front-end',
        techs: 'TypeScript, Javascript, NextJS, ReactJS, nodeJS, prisma, Docker, Fastify',
    },
    // {
    //     name: 'PHShop3',
    //     imgUrl: phshopImg,
    //     description: 'PHShop é um projeto que simula um e-commerce',
    //     appUrl: 'https://ph-shop.vercel.app',
    //     githubUrl: 'https://github.com/phpaulohenrique/ph-shop',
    //     techs: 'TypeScript, NextJS, ReactJS, Stitches, Stripe, Prisma, RadixUI.',
    // },
]

export function Projects() {
    return (
        <section className="min-h-[70vh] pt-14" id="projects">
            <Heading>Projetos Principais</Heading>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-6">
                <Fade cascade damping={0.2} triggerOnce>
                    {myProjects.map((project) => (
                        <div
                            key={project.name}
                            className="w-[22rem] rounded-md border border-gray-300 bg-white px-6 py-6 text-left drop-shadow-xl transition-all hover:scale-[1.02]"
                        >
                            <h3 className="mb-8 text-center text-xl font-medium text-green-600">
                                {project.name}
                            </h3>
                            <Image src={project.imgUrl} alt={project.name} className="w-full " />
                            <p className="mt-8 text-sm  leading-relaxed">{project.description}</p>
                            <p className="mt-6 text-sm leading-relaxed ">
                                <span className="text-sm font-medium text-green-700">
                                    Tecnologias Utilizadas:
                                </span>
                                {project.techs} entre outras...
                            </p>
                            <div className="mt-4 flex justify-center gap-4">
                                <ButtonLink
                                    variant="primary"
                                    href={project.appUrl}
                                    className="h-9 min-w-max px-3 text-sm"
                                    target="_blank"
                                >
                                    <Send className="h-5 w-5 text-white " />
                                    Projeto
                                </ButtonLink>
                                <ButtonLink
                                    variant="secondary"
                                    href={project.githubUrl}
                                    className="h-9 min-w-max px-3 text-sm"
                                    target="_blank"
                                >
                                    <Github className="h-5 w-5 text-emerald-600 " />
                                    GitHub
                                </ButtonLink>
                            </div>
                        </div>
                    ))}
                </Fade>
            </div>

            <Link
                href="https://github.com/phpaulohenrique?tab=repositories"
                target="_blank"
                className="mt-8 inline-block text-sm text-blue-800 underline decoration-1 underline-offset-4 transition-colors hover:text-blue-600"
            >
                Mais projetos no GitHub
            </Link>
        </section>
    )
}
