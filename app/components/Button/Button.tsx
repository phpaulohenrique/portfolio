import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface IButtonLink extends LinkProps {
    variant: 'primary' | 'secondary'
    children: ReactNode
    className?: string
    target?: string
}

export function ButtonLink({ variant, children, className, ...rest }: IButtonLink) {
    return variant === 'primary' ? (
        <Link
            className={`transition-brightness flex h-11 min-w-[8rem] items-center gap-2 rounded-lg border border-sky-500 bg-sky-600 px-6 font-medium text-white duration-300 hover:brightness-110 ${className}`}
            {...rest}
        >
            {children}
        </Link>
    ) : (
        <Link
            className={`flex h-11 min-w-[8rem] items-center gap-2 rounded-lg border border-emerald-400 bg-transparent px-6 font-medium text-zinc-700 transition-colors duration-300 hover:bg-green-100 ${className}`}
            {...rest}
        >
            {children}
        </Link>
    )
}
