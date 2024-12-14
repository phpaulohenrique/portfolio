import { Briefcase, Send, ArrowDown } from 'lucide-react'
import { Slide, Fade } from 'react-awesome-reveal'
import { ButtonLink } from '../Button/Button'

export function Introduction() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center" id="start">
            <Slide direction="up" triggerOnce>
                <h1 className="text-2xl text-slate-700 lg:text-3xl">
                    Olá, eu sou o Paulo Henrique{' '}
                    <Fade delay={200} triggerOnce>
                        <strong className=" mb-3 block bg-gradient-frontend bg-clip-text p-4 text-[3.8rem] font-black uppercase leading-[4rem] tracking-tight text-transparent lg:text-[5rem]">
                            fullstack developer
                        </strong>
                    </Fade>
                </h1>
                <p className="max-w-lg text-base text-blue-800">
                    Desenvolvedor Full Stack, dedicado em construir sistemas eficientes no Backend,
                    e criar interfaces intuitivas no Frontend, transformando desafios em soluções
                    inteligentes!
                </p>

                <div className="mt-8 flex gap-4">
                    <ButtonLink variant="secondary" href="#projects">
                        <Briefcase className="h-6 w-6 text-emerald-600 " />
                        Projetos
                    </ButtonLink>
                    <ButtonLink variant="primary" href="#contact">
                        <Send className="h-5 w-5 text-white " />
                        Contato
                    </ButtonLink>
                </div>

                {/* <div className="flex gap-2">
                <span className="relative h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="absolute inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
                <span>Open to work</span> */}

                {/* </div> */}
            </Slide>
            <ArrowDown className="absolute bottom-12 h-6 w-6 animate-bounce text-emerald-700 " />
        </section>
    )
}
