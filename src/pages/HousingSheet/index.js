import './HousingSheet.scss'

import { useParams, useNavigate } from 'react-router-dom'

import logements from '../../data/logements.json'

import DropDown from '../../components/DropDown'
import SlideShow from '../../components/Slideshow'
import { useEffect } from 'react'

export default function HousingSheet(){

    const { logementId } = useParams()
    const navigate = useNavigate()

    const logement = logements.find(logement => logement.id === logementId)

    useEffect(()=>{
        if (!logement) {
            navigate('/404', {replace: true})
        }
    },[logement, navigate])

    if (!logement) {
      return <p>Logement introuvable. Redirection...</p>;
    }
    
    return(
        <div className='comp comp-housingSheet'>
            <SlideShow listPictures={logement.pictures}/>
            <section className='presentation'>
                <div className='infos infos-housing'>
                    <div className='title-location'>
                        <h1 className='title'>{logement.title}</h1>
                        <span className='location'>{logement.location}</span>
                    </div>
                    <div className='tags'>
                        {logement.tags.map((tag) => 
                            <div key={tag} className='tag'>{tag}</div>
                        )}
                    </div>
                </div>
                <div className='infos infos-host'>
                    <div className='host'>
                        <span className='host-name'>{logement.host.name}</span>
                        <div className='host-picture'>
                            <img className='host-img' src={logement.host.picture} alt='hôte du logement'/>
                        </div>
                    </div>
                    <div className='rating'>
                        {
                            [1,2,3,4,5].map((rate)=>
                                rate <= logement.rating ?
                                    <svg key={rate} className='star active' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" />
                                    </svg>
                                    :
                                    <svg key={rate} className='star' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" />
                                    </svg>
                            )
                        }                                
                    </div>
                </div>
            </section>
            <section className='details'>
                <DropDown title="Description" contents = {[logement.description]}/>
                <DropDown title="Equipments" contents = {logement.equipments}/>
            </section>
        </div>
    )
}