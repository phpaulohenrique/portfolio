'use client'
import { Heading } from "../Heading"
import jsIcon from '../../assets/icons/js.svg'
import Image from "next/image"
import { useState } from "react"



const TechsNames = {
    Javascript: 'Javascript',
    Typescript: 'Typescript'
}

const techs = [
    {
        id: 1,
        name: TechsNames.Javascript,
        icon: jsIcon,
        description: "JavaScript is a high-level, interpreted, object-oriented programming language."
    },
    {
        id: 2,
        name: TechsNames.Typescript,
        icon: jsIcon,
        description: "Typescript is a high-level, interpreted, object-oriented programming language."
    },

]


export function Knowledge(){
    const [isTechHover, setIsTechHover] = useState<any>('')
    let techDescription
    const showTechDescription = (techName : keyof typeof TechsNames) => {
        // techDescription = 
        setIsTechHover(techs.find(el => el.name == techName) ?? '')
        console.log(techs.find(el => el.name == 'Typescript'))

    }
    return(
        <section className="min-h-[60vh] pt-14" id="knowledge">
            <Heading>Conhecimentos</Heading>
            <div className="flex justify-around">
                <div className="max-w-sm w-full">
                    {
                        isTechHover ? <p>{isTechHover.description}</p> : (<span className="text-sm text-gray-600">*passe o cursor do mouse no card para ler*</span>)
                    }
                    
                </div>

                <div className="grid grid-cols-3 w-max gap-6">
                    {
                        techs.map((tech) => (
                            <Image
                                key={tech.id}
                                src={jsIcon}
                                alt="Javascript logo"
                                className="border border-gray-300 w-20 rounded bg-gray-100 hover:border-sky-600 transition-colors"
                                onMouseOver={() => showTechDescription(tech.name)}
                                onMouseOut={() => setIsTechHover('')}
                            
                        />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}