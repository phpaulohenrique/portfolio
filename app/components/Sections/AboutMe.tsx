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
                            Sou o Paulo Henrique, tenho {myAge} anos, sou Desenvolvedor Full Stack
                            entusiasta por Front-end. Com 10 meses de experiência profissional como
                            desenvolvedor e formação em tecnologia pelo IFMT, busco constantemente
                            aprimorar minhas habilidades. Desde 2022, dedico-me ao desenvolvimento
                            web.
                        </p>

                        <p>
                            Embora meu foco atual seja o desenvolvimento Front-end, também tenho
                            conhecimentos e interesse em Back-end e design de interface UI/UX.
                        </p>

                        <p>
                            Adoro criar aplicações modernas e de alta qualidade, prestando atenção a
                            cada detalhe para garantir que funcionem perfeitamente tanto em
                            smartphones quanto em desktops. Desde sistemas web, sites profissionais
                            e landing pages, estou sempre focado em oferecer uma experiência
                            excepcional para os usuários.
                        </p>

                        {/* <p>
                            Meu objetivo é criar soluções digitais que não só impressionem
                            visualmente, mas que também ofereçam uma experiência incrível aos
                            usuários. Estou animado com as possibilidades futuras e sempre em busca
                            de novos desafios!
                        </p> */}
                    </Fade>
                </div>
            </Fade>
        </section>
    )
}
