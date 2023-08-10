
interface IHeadingProps {
    children: string

}

export function Heading({children}: IHeadingProps){
    return (
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-frontend mb-12">{children}</h2>
    )
}