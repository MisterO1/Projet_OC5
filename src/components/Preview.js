import '../styles/Preview.scss'

export default function Preview({ image, isText }) {
    return (
        <div className='comp comp-preview'>
            <div className='image-container'>
                <img src={image} alt="background"/>
                <div className='overlay'></div>
                {isText ? <div className='text'>Chez vous, <br/> partout et ailleurs</div> : null }
            </div>
        </div>
    )
}