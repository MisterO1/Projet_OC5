import logo from "../assets/logo.png"
import logoSmall from "../assets/logo_small.png"
import { Link, NavLink, useLocation } from "react-router-dom"

import "../styles/Header.scss"

export default function Header (){
    const location = useLocation()
    console.log(location)
    return (
        <header className="comp">
            <Link to="/">
                <picture>
                    <source media="(max-width: 768px)" srcSet={logoSmall} />
                    <img src={logo} className="logo" alt="logo du site Kasa"/>
                </picture>
            </Link>
            <nav>
                <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''} >Acceuil</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? 'active' : ''} >A propos</NavLink>
            </nav>
        </header>
    )
}