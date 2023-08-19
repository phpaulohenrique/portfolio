import { Github, Linkedin } from 'lucide-react'
import { ButtonLink } from '../Button/Button'
import { Heading } from '../Heading'
import { Fade } from 'react-awesome-reveal'

export function Contact() {
    return (
        <section className="min-h-[44vh] pt-14 " id="contact">
            <Fade cascade damping={0.1} triggerOnce>
                <Heading>Onde me encontrar</Heading>
                <div className="flex gap-4 flex-col items-center">
                    <ButtonLink
                        variant="secondary"
                        href="https://www.linkedin.com/in/paulo-henrique-857965187/"
                        className="w-48 justify-center"
                    >
                        <Linkedin className="w-6 h-6 text-emerald-600" />
                        LinkedIn
                    </ButtonLink>
                    <ButtonLink
                        variant="secondary"
                        href="https://github.com/phpaulohenrique"
                        className="w-48 justify-center"
                    >
                        <Github className="w-6 h-6 text-emerald-600" />
                        GitHub
                    </ButtonLink>
                </div>
            </Fade>
        </section>
    )
}
