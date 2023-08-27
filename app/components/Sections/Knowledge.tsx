import { Heading } from '../Heading'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import jsIcon from '@/app/assets/icons/js.svg'
import tailwindIcon from '@/app/assets/icons/tailwind.svg'
import reactjsIcon from '@/app/assets/icons/react.svg'
import nextjsIcon from '@/app/assets/icons/nextjs.svg'
import tsIcon from '@/app/assets/icons/ts.svg'
import cssIcon from '@/app/assets/icons/css.svg'
import htmlIcon from '@/app/assets/icons/html.svg'
import styledcomponentsIcon from '@/app/assets/icons/styledcomponents.svg'
import radixuiIcon from '@/app/assets/icons/radixui.svg'
import sassIcon from '@/app/assets/icons/sass.svg'

interface ITech {
    name: string
    icon: StaticImageData
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
        icon: nextjsIcon,
        description:
            'NextJS é um framework de desenvolvimento React que simplifica a criação de aplicativos web com renderização do lado do servidor, facilitando o desempenho, SEO e a construção de páginas dinâmicas.',
    },
    {
        name: 'TailwindCSS',
        icon: tailwindIcon,
        description:
            ' Tailwind CSS é um framework de design de código aberto que oferece classes utilitárias pré-definidas para criar interfaces de usuário responsivas e estilizadas de forma eficiente, permitindo a construção rápida de designs personalizados em aplicações web.',
    },
    {
        name: 'HTML',
        icon: htmlIcon,
        description:
            'HTML (HyperText Markup Language) é uma linguagem de marcação utilizada para estruturar o conteúdo de páginas da web. Ela define elementos e tags que permitem definir a semântica e a organização do conteúdo, como títulos, parágrafos, imagens e links, para que os navegadores possam interpretar e exibir corretamente o conteúdo aos usuários.',
    },
    {
        name: 'CSS',
        icon: cssIcon,
        description:
            'CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a apresentação e o design visual de páginas da web escritas em HTML ou outras linguagens de marcação. Com o CSS, é possível controlar a cor, fonte, espaçamento, layout e outros aspectos visuais dos elementos HTML, permitindo a criação de páginas web atraentes e consistentes.',
    },
    {
        name: 'Radix UI',
        icon: radixuiIcon,
        description:
            'Radix UI é um conjunto de componentes de interface de usuário (UI) em código aberto construído para ser modular, acessível e fácil de usar. Ele fornece componentes de base para criação de interfaces de usuário modernas e interativas. Os componentes do Radix UI abrangem desde menus e modais até tooltips e popovers.',
    },
    {
        name: 'Styled Components',
        icon: styledcomponentsIcon,
        description:
            'Styled Components é uma biblioteca popular de estilo para aplicações React. Ela permite que você crie componentes React com estilos CSS diretamente no código JavaScript, usando uma abordagem baseada em tagged template literals. Isso torna o gerenciamento de estilos mais modular, permitindo a criação de componentes estilizados de maneira mais organizada e reutilizável.',
    },
    {
        name: 'Sass',
        icon: sassIcon,
        description:
            'Sass (Syntactically Awesome Style Sheets) é uma extensão da linguagem CSS que oferece recursos avançados, como variáveis, aninhamento, mixins e funções, para facilitar a escrita e a organização de estilos. Com o Sass, é possível criar estilos mais eficientes e flexíveis, permitindo uma abordagem mais modular e escalável para o design de páginas da web.',
    },
]

export function Knowledge() {
    const [currentTechOnHover, setCurrentTechOnHover] = useState<ITech | null>(null)

    const showTechDescription = (techName: string) => {
        setCurrentTechOnHover(techs.find((el) => el.name === techName) || null)
    }
    return (
        <section className="min-h-[70vh] pt-14 mt-10" id="knowledge">
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
                                className="border border-gray-300 w-20 h-20 p-4 rounded   hover:border-sky-500 transition-colors hover:shadow-lg hover:shadow-emerald-200"
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
