import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface IButtonLink extends LinkProps {
    variant: 'primary' | 'secondary'
    children: ReactNode
    className?: string
}

export function ButtonLink({ variant, children, className, ...rest }: IButtonLink) {
    return variant === 'primary' ? (
        <Link
            className={`h-11 px-6 border border-sky-500 bg-sky-600 text-white rounded-lg font-medium flex items-center gap-2 min-w-[8rem] hover:brightness-110 transition-brightness duration-300 ${className}`}
            {...rest}
        >
            {children}
        </Link>
    ) : (
        <Link
            className={`h-11 px-6 bg-transparent border border-emerald-400 text-zinc-700 rounded-lg font-medium flex items-center gap-2 min-w-[8rem] hover:bg-green-100 transition-colors duration-300 ${className}`}
            {...rest}
        >
            {children}
        </Link>
    )
}
