import '../styles/SlideShow.scss';
import React, { useState } from 'react';


export default function SlideShow({listPictures}){
    
    const [indexPictureToShow, setIndexPictureToShow] = useState(0)
    const total = listPictures.length

    const nextPicture = () => {
        const nextIndex = indexPictureToShow === total-1 ? 0 : indexPictureToShow + 1
        setIndexPictureToShow(nextIndex)
    }
    const previousPicture = () => {
        const prevIndex = indexPictureToShow === 0 ? total-1 : indexPictureToShow - 1
        setIndexPictureToShow(prevIndex)
    }

    return(
        <div className='pictures-container'>
            <img className='picture-img' src={ listPictures[indexPictureToShow] } alt='housing' />
            { total === 1 ?
                null
                :
                <div className='picture-overlay'>
                    <button className='btn btn-previous' onClick={()=> previousPicture()} >
                        <svg className='arrow arrowBack' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" />
                        </svg>
                    </button>
                    <button className='btn btn-next' onClick={()=> nextPicture()} >
                        <svg className='arrow arrowForward' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" />
                        </svg>
                    </button>
                    <span className='pages'>
                        <span className='current-pages'>{indexPictureToShow + 1}</span>
                        /
                        <span className='total-pages'>{total}</span>
                    </span>
                </div>
            }
        </div>
    )
}

