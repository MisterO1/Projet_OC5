import './Banner.scss'

export default function Banner({ image, isText }) {
    return (
        <div className='comp comp-Banner'>
            <div className='image-container'>
                <img src={image} alt="Bannière"/>
                <div className='overlay'></div>
                {isText ? <div className='text'>Chez vous, <br/> partout et ailleurs</div> : null }
            </div>
        </div>
    )
}