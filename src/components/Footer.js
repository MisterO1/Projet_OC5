import logoDark from "../assets/logo_dark-small.png"
import "../styles/sass/Footer.scss"


export default function Footer (){
    return (
        <footer>
            <img src={logoDark} className="logo" alt="logo dark du site Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}