import '../styles/Card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card({CardId, CardImage, CardTitle = 'Titre de la page'}){
    return(
        <Link to={'/housingSheet/'+ CardId} className='card-wrapper'>
            <div className="card">
                <img className='card-img' src={CardImage} alt={CardTitle} />
                <div className='card-title'>{CardTitle}</div>
            </div>
        </Link>
    )
}

Card.propTypes = {
    CardId: PropTypes.number.isRequired,
    CardImage: PropTypes.string.isRequired,
    CardTitle: PropTypes.string.isRequired,
}

Card.defaultProps = {
    CardTitle: 'Titre manquant !',
}