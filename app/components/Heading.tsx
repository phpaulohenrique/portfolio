interface IHeadingProps {
    children: string
}

export function Heading({ children }: IHeadingProps) {
    return (
        <h2 className="mb-12 bg-gradient-frontend bg-clip-text text-2xl font-semibold text-transparent">
            {children}
        </h2>
    )
}
