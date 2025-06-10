import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import "../styles/sass/Header.scss"


export default function Header (){
    return (
        <header>
            <Link>
                <img src={logo} alt="logo du site Kasa" />
            </Link>
            <nav>
                <Link>Acceuil</Link>
                <Link>A propos</Link>
            </nav>
        </header>
    )
}