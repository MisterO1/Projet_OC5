import { Link } from "react-router-dom"
import "../styles/Error.scss"

export default function Error (){
    return(
        <main className="comp">
            <span className="ErrorStatus">404</span>
            <p>Oups, la page que vous demandez n'existe pas</p>
            <Link to='/'>Retourner sur la page d'acceuil</Link>
        </main>
    )
}