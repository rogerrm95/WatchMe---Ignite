import '../styles/header.scss'

interface HeaderProps{
    title: String
}

export function Header({title}: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {title}</span></span>
        </header>
    )
}