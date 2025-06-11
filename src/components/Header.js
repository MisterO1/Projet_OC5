import logo from "../assets/logo.png"
import logoSmall from "../assets/logo_small.png"
import { Link } from "react-router-dom"
import "../styles/Header.scss"


export default function Header (){
    return (
        <header className="comp">
            <Link to="/">
                <picture>
                    <source media="(max-width: 768px)" srcSet={logoSmall} />
                    <img src={logo} className="logo" alt="logo du site Kasa"/>
                </picture>
            </Link>
            <nav>
                <Link to="/" className="active" >Acceuil</Link>
                <Link to="/about" >A propos</Link>
            </nav>
        </header>
    )
}