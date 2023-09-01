import { Github, Linkedin } from 'lucide-react'
import { ButtonLink } from '../Button/Button'
import { Heading } from '../Heading'
import { Fade } from 'react-awesome-reveal'

export function Contact() {
    return (
        <section className="min-h-[60vh] pt-14 " id="contact">
            <Fade cascade damping={0.1} triggerOnce>
                <Heading>Onde me encontrar</Heading>
                <div className="flex flex-col items-center gap-4">
                    <ButtonLink
                        variant="secondary"
                        href="https://www.linkedin.com/in/paulo-henrique-857965187/"
                        className="w-48 justify-center"
                        target="_blank"
                    >
                        <Linkedin className="h-6 w-6 text-emerald-600" />
                        LinkedIn
                    </ButtonLink>
                    <ButtonLink
                        variant="secondary"
                        href="https://github.com/phpaulohenrique"
                        className="w-48 justify-center"
                        target="_blank"
                    >
                        <Github className="h-6 w-6 text-emerald-600" />
                        GitHub
                    </ButtonLink>
                </div>
            </Fade>
        </section>
    )
}
