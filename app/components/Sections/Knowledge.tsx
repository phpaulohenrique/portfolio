import { Heading } from '../Heading'
import jsIcon from '@/app/assets/icons/js.svg'
import reactjsIcon from '@/app/assets/icons/reactjs.svg'
import tsIcon from '@/app/assets/icons/ts.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

interface ITech {
    name: string
    icon: any
    description: string
}

const techs: ITech[] = [
    {
        name: 'Javascript',
        icon: jsIcon,

        description:
            'JavaScript é uma linguagem de programação amplamente utilizada para desenvolver interatividade e funcionalidade em páginas da web. Ela permite criar elementos dinâmicos e responder a ações dos usuários no navegador.',
    },
    {
        name: 'Typescript',
        icon: tsIcon,
        description:
            'TypeScript é uma linguagem de programação que estende o JavaScript, adicionando tipagem estática e recursos avançados de orientação a objetos, tornando o desenvolvimento de software mais robusto e escalável.',
    },
    {
        name: 'ReactJS',
        icon: reactjsIcon,
        description:
            'ReactJS é uma biblioteca JavaScript usada para construir interfaces de usuário interativas e reativas, permitindo a criação de componentes reutilizáveis para construir aplicativos web modernos.',
    },
    {
        name: 'NextJS',
        icon: jsIcon,
        description:
            'NextJS é um framework de desenvolvimento React que simplifica a criação de aplicativos web com renderização do lado do servidor, facilitando o desempenho, SEO e a construção de páginas dinâmicas.',
    },
]

export function Knowledge() {
    const [currentTechOnHover, setCurrentTechOnHover] = useState<ITech | null>(null)

    const showTechDescription = (techName: string) => {
        setCurrentTechOnHover(techs.find((el) => el.name === techName) || null)
    }
    return (
        <section className="min-h-[60vh] pt-14 mt-10" id="knowledge">
            <Fade damping={0.1} cascade triggerOnce>
            <Heading>Conhecimentos</Heading>
            <div className="flex justify-around flex-col gap-6 sm:flex-row sm:gap-0 items-center md:items-start">
                <div className="max-w-sm w-full order-2 sm:order-1">
                    {
                        <p className="text-sm text-gray-700 leading-loose text-left">
                            {currentTechOnHover?.description ??
                                '*passe o cursor do mouse no card para ler'}
                        </p>
                    }
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-4 w-max gap-4 order-1 sm:order-2">
                    {techs.map((tech) => (
                        <Image
                            key={tech.name}
                            src={tech.icon}
                            alt="Javascript logo"
                            className="border border-gray-300 w-20 rounded bg-gray-100 hover:border-sky-600 transition-colors"
                            onMouseOver={() => showTechDescription(tech.name)}
                            onMouseOut={() => setCurrentTechOnHover(null)}
                        />
                    ))}
                </div>
            </div>
            </Fade>
        </section>
    )
}
