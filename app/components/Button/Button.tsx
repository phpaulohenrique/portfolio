import { Link, Github } from "lucide-react";

interface IButtonLink{
    variant: 'primary' | 'secondary',
}

export function ButtonLink({ variant}: IButtonLink){
    return(
        variant === 'primary' ? (
            <Link
            className="py-[0.375rem] px-4 bg-white border border-sky-600 rounded-md font-medium flex items-center gap-2"
            href={project.githubUrl} target="_blank">
                <Github className="w-5 h-5 text-sky-700 " />
                GitHub
                </Link>
        ) : (
            <Link
            className="py-[0.375rem] px-4 bg-sky-600 text-white rounded-md font-medium flex items-center gap-2"
            href={project.appUrl} target="_blank">
                <ExternalLink className="w-5 h-5 text-white " />
                Acessar
            </Link>

        )

    )
}