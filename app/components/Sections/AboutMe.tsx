import { Fade } from 'react-awesome-reveal'
import { Heading } from '../Heading'

export function AboutMe() {
    return (
        <section className="min-h-[50vh] pt-14 " id="about-me">
            <Fade cascade damping={0.1} triggerOnce>
                <Heading>Sobre mim</Heading>
                <div className="m-auto flex max-w-[44rem] flex-col gap-3 text-left text-sm leading-loose">
                    <Fade cascade damping={0.3} triggerOnce>
                        <p>
                            Sou o Paulo Henrique, tenho 22 anos e atuo como Desenvolvedor Front-end.
                            Tenho formação em tecnologia em análise e desenvolvimento de sistemas
                            pelo Instituto Federal de MT.
                        </p>
                        <p>
                            Crio sites modernos de alta qualidade, nos quais dedico atenção aos
                            mínimos detalhes, com foco em garantir performance e responsividade
                            desde smartphones até desktops.
                        </p>
                        <p>
                            Minha expertise abrange o desenvolvimento de uma variedade de projetos
                            web, desde sites profissionais a blogs, portfólios e landing pages. Meu
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
