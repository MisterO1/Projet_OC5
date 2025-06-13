import '../styles/Housing.scss'
import house from '../assets/background-small.jpg'
import { Link } from 'react-router-dom'

export default function Housing(){
    return(
        <div className='comp comp-housing'>
            <div className='housing-container'>
                <Link to='/housingSheet' className="housing">
                    <img src={house} alt='housing' />
                    <span className='title'>Titre de la location</span>
                </Link>
                <Link to='/housingSheet' className="housing">
                    <span className='title'>Titre de la location</span>
                </Link>
                <Link to='/housingSheet' className="housing">
                    <img src={house} alt='housing' />
                    <span className='title'>Titre de la location</span>
                </Link>
                <Link to='/housingSheet' className="housing">
                    <span className='title'>Titre de la location</span>
                </Link>
                <Link to='/housingSheet' className="housing">
                    <img src={house} alt='housing' />
                    <span className='title'>Titre de la location</span>
                </Link>
                <Link to='/housingSheet' className="housing">
                    <span className='title'>Titre de la location</span>
                </Link>
            </div>
        </div>
    )
}