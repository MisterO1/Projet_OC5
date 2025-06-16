import Preview from './Preview'
import Card from './Card'
import backgroundHome from '../assets/background-home.jpg'

import '../styles/Home.scss'

export default function Home() {
    return (
        <div className="comp comp-home">
            <Preview image={ backgroundHome } isText={true} />
            <div className='comp comp-card'>
                <div className='card-container'>
                    <Card /> 
                    <Card /> 
                    <Card /> 
                    <Card /> 
                    <Card /> 
                </div>
            </div>
        </div>
    )
}