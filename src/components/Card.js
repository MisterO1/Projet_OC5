import '../styles/Card.scss'
import house from '../assets/background-small.jpg'
import { Link } from 'react-router-dom'

export default function Card({CardImage = house, CardTitle = 'Titre de la page', CardId = 'c67ab8a7'}){
    return(
        <Link to={'/housingSheet'} className='card-wrapper'>
            <div className="card">
                <img className='card-img' src={CardImage} alt={CardTitle} />
                <div className='card-title'>{CardTitle}</div>
            </div>
        </Link>
    )
}