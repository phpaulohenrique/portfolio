import Image, { StaticImageData } from 'next/image'
import { Heading } from '../Heading'
import { ButtonLink } from '../Button/Button'
import { Github, Send } from 'lucide-react'
import Link from 'next/link'
import phshopImg from '../../assets/img/phshop.png'
import currencyImg from '../../assets/img/currency.png'
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
            'PHShop é um projeto que simula o funcionamento de um e-commerce, permitindo que os usuários realizem login por meio do Google e efetuem compras. entre outras funcionalidades.',
        appUrl: 'https://ph-shop.vercel.app',
        githubUrl: 'https://github.com/phpaulohenrique/ph-shop',
        techs: 'TypeScript, Javascript, NextJS, ReactJS, Stitches, Stripe, Prisma, RadixUI.',
    },
    {
        name: 'The Currency Converter',
        imgUrl: currencyImg,
        description:
            'The Currency Converter é um projeto de conversão de moedas que exibe a taxa de câmbio entre diferentes moedas e gera um gráfico ilustrativo com o histórico da variação. entre outras funcionalidades.',
        appUrl: 'https://thecurrencyconverter.vercel.app',
        githubUrl: 'https://github.com/phpaulohenrique/currency-converter',
        techs: 'TypeScript, Javascript, NextJS, ReactJS, TailwindCSS, ApexCharts.',
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
            <div className="flex gap-6 sm:gap-6 flex-wrap justify-center">
                <Fade cascade damping={0.2} triggerOnce>
                    {myProjects.map((project) => (
                        <div
                            key={project.name}
                            className="bg-white px-6 py-6 rounded-md w-[22rem] drop-shadow-xl border border-gray-300 text-left hover:scale-[1.02] transition-all"
                        >
                            <h3 className="text-xl font-medium text-green-600 mb-8 text-center">
                                {project.name}
                            </h3>
                            <Image src={project.imgUrl} alt={project.name} className="w-full" />
                            <p className="mt-8 text-sm  leading-relaxed">{project.description}</p>
                            <p className="mt-4 text-sm leading-relaxed ">
                                <span className="font-medium text-sm text-green-700">
                                    Tecnologias Utilizadas:
                                </span>
                                {project.techs} entre outras...
                            </p>
                            <div className="mt-4 flex gap-4 justify-center">
                                <ButtonLink
                                    variant="primary"
                                    href={project.appUrl}
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
                </Fade>
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
