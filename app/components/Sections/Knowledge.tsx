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
import stitchesIcon from '@/app/assets/icons/stitches.svg'
import chakrauiIcon from '@/app/assets/icons/chakraui.svg'
import storybookIcon from '@/app/assets/icons/storybook.svg'
import nestIcon from '@/app/assets/icons/nestjs.svg'
import nodeIcon from '@/app/assets/icons/node.svg'
import sqlIcon from '@/app/assets/icons/sql.svg'

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
        name: 'ReactJS',
        icon: reactjsIcon,
        description:
            'ReactJS é uma biblioteca JavaScript usada para construir interfaces de usuário interativas e reativas, permitindo a criação de componentes reutilizáveis para construir aplicativos web modernos.',
    },
    {
        name: 'Typescript',
        icon: tsIcon,
        description:
            'TypeScript é uma linguagem de programação que estende o JavaScript, adicionando tipagem estática e recursos avançados de orientação a objetos, tornando o desenvolvimento de software mais robusto e escalável.',
    },
    {
        name: 'NextJS',
        icon: nextjsIcon,
        description:
            'NextJS é um framework de desenvolvimento React que simplifica a criação de aplicativos web com renderização do lado do servidor, facilitando o desempenho, SEO e a construção de páginas dinâmicas.',
    },
    {
        name: 'NestJS',
        icon: nestIcon,
        description:
            'NestJS é um framework Node.js progressivo para construção de aplicações server-side eficientes e escaláveis. Ele utiliza TypeScript por padrão e é baseado em conceitos como modularidade e injeção de dependência.',
    },
    {
        name: 'NodeJS',
        icon: nodeIcon,
        description:
            'Node.js é um ambiente de execução JavaScript que permite criar aplicações escaláveis no lado do servidor. Ele utiliza um modelo assíncrono e orientado a eventos, ideal para construir APIs rápidas e eficientes.',
    },
    {
        name: 'SQL',
        icon: sqlIcon,
        description:
            'SQL (Structured Query Language) é uma linguagem padrão para gerenciar e manipular bancos de dados relacionais. Ela permite criar, consultar, atualizar e excluir dados de forma eficiente e estruturada.',
    },
    {
        name: 'TailwindCSS',
        icon: tailwindIcon,
        description:
            'TailwindCSS é um framework de design de código aberto que oferece classes utilitárias pré-definidas para criar interfaces de usuário responsivas e estilizadas de forma eficiente, permitindo a construção rápida de designs personalizados em aplicações web.',
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
    {
        name: 'Stitches',
        icon: stitchesIcon,
        description:
            'Stitches é uma biblioteca de estilo em JavaScript que visa oferecer uma abordagem de "CSS-in-JS" mais eficiente e performática. Ela permite criar componentes estilizados com uma sintaxe simples, enquanto gera estilos otimizados em tempo de compilação para melhor desempenho. Stitches também oferece recursos como tema, variantes e regras de estilo globais.',
    },
    {
        name: 'ChakraUI',
        icon: chakrauiIcon,
        description:
            'Chakra UI é um poderoso framework de design para React que oferece uma ampla gama de componentes prontos para uso, seguindo princípios de design moderno e acessibilidade. Com uma documentação detalhada e flexibilidade para personalização.',
    },
    {
        name: 'Storybook',
        icon: storybookIcon,
        description:
            'Storybook é uma ferramenta de desenvolvimento de interface de usuário que permite criar, visualizar e testar componentes de maneira isolada. Ele oferece um ambiente interativo para desenvolvedores construírem e documentarem componentes UI independentes, ajudando a garantir a consistência e reutilização.',
    },
]

export function Knowledge() {
    const [currentTechOnHover, setCurrentTechOnHover] = useState<ITech | null>(null)

    const showTechDescription = (techName: string) => {
        setCurrentTechOnHover(techs.find((el) => el.name === techName) || null)
    }
    return (
        <section className="mt-10 min-h-[70vh] pt-14" id="knowledge">
            <Fade damping={0.1} cascade triggerOnce>
                <Heading>Conhecimentos</Heading>
                <div className="flex flex-col items-center justify-around gap-6 sm:flex-row sm:gap-0 md:items-start">
                    <div className="order-2 w-full max-w-sm sm:order-1">
                        {
                            <p className="text-left text-sm leading-loose ">
                                {currentTechOnHover?.description ||
                                    '*passe o cursor do mouse no card para ler'}
                            </p>
                        }
                    </div>

                    <div className="order-1 grid w-max grid-cols-3 gap-4 sm:order-2 lg:grid-cols-4  ">
                        <Fade damping={0.2} cascade triggerOnce>
                            {techs.map((tech) => (
                                <Image
                                    key={tech.name}
                                    title={tech.name}
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-[4.5rem] w-[4.5rem] rounded border border-blue-300 p-4  transition-colors duration-700 hover:border-sky-600 hover:shadow-md hover:shadow-sky-200"
                                    onMouseOver={() => showTechDescription(tech.name)}
                                    onMouseOut={() => setCurrentTechOnHover(null)}
                                />
                            ))}
                        </Fade>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
