import '../styles/Card.scss'
import house from '../assets/background-small.jpg'
import { Link } from 'react-router-dom'

export default function Card({CardImage = house, CardTitle = 'Titre de la page', CardId = 'c67ab8a7'}){
    return(
        <Link to={'/housingSheet'} >
            <div className="card">
                <img className='card-img' src={CardImage} alt={CardTitle} />
                <h2 className='card-title'>{CardTitle}</h2>
            </div>
        </Link>
    )
}