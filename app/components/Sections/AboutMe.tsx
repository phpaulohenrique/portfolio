import { Fade } from 'react-awesome-reveal'
import { Heading } from '../Heading'

export function AboutMe() {
    return (
        <section className="min-h-[50vh] pt-14 " id="about-me">
            <Fade cascade damping={0.1} triggerOnce>
                <Heading>Sobre mim</Heading>
                <div className="text-left text-sm leading-loose max-w-[44rem] m-auto">
                    <Fade cascade damping={0.3} triggerOnce>
                    <p>
                        Sou o Paulo Henrique, tenho 22 anos, sou Desenvolvedor Front-end tenho formação em
                        análise e desenvolvimento de sistemas.
                    </p>
                    <p>
                        Estou focado no desenvolvimento front-end desde 2021, mas estou interessado em
                        aprender mais sobre back-end e design de interface do usuário.
                    </p>
                    <p>
                        Desenvolvo sites modernos de alta qualidade, concentrado em performance,
                        responsividade e SEO.
                    </p>
                    <p>
                        Desenvolvimento de sites profissionais, blogs, portfólios, landing pages, e sistemas
                        web.
                    </p>
                    </Fade>

                </div>
            </Fade>
        </section>
    )
}
