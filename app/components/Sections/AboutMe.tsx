import { Fade } from 'react-awesome-reveal'
import { Heading } from '../Heading'
import { useEffect, useState } from 'react'

export function AboutMe() {
    const [myAge, setMyAge] = useState(23)

    useEffect(() => {
        calculateMyAge()
    }, [])

    const calculateMyAge = () => {
        const birthdayDate = new Date('2000-11-24')
        const currentDate = new Date()

        const diffInMs = currentDate.getTime() - birthdayDate.getTime()

        const pastYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25)

        setMyAge(Math.floor(pastYears))
    }

    return (
        <section className="min-h-[50vh] pt-14 " id="about-me">
            <Fade cascade damping={0.1} triggerOnce>
                <Heading>Sobre mim</Heading>
                <div className="m-auto flex max-w-[44rem] flex-col gap-3 text-left text-sm leading-loose">
                    <Fade cascade damping={0.3} triggerOnce>
                        <p>
                            Sou o Paulo Henrique, tenho {myAge} anos e atualmente atuo como
                            Desenvolvedor Front-end em uma empresa de Software. Tenho formação em
                            tecnologia em análise e desenvolvimento de sistemas pelo Instituto
                            Federal de MT.
                        </p>
                        <p>
                            Crio sites modernos de alta qualidade, nos quais dedico atenção aos
                            mínimos detalhes, com foco em garantir performance e responsividade
                            desde smartphones até desktops.
                        </p>
                        <p>
                            Minha expertise abrange o desenvolvimento de uma variedade de projetos
                            web, desde sistemas web a blogs, portfólios e landing pages. Meu
                            objetivo é proporcionar soluções digitais que não apenas impressionem
                            visualmente, mas também ofereçam uma experiência excepcional aos
                            usuários!
                        </p>
                    </Fade>
                </div>
            </Fade>
        </section>
    )
}
