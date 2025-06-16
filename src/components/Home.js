import Preview from './Preview'
import Card from './Card'
import backgroundHome from '../assets/background-home.jpg'

import '../styles/Home.scss'
import logements from '../data/logements.json'

export default function Home() {
    return (
        <div className="comp comp-home">
            <Preview image={ backgroundHome } isText={true} />
            <div className='comp comp-card'>
                <div className='card-container'>
                    {logements.map((logement) => 
                        <Card 
                            key={logement.id}
                            CardId={logement.id}
                            CardImage={logement.pictures[0]} 
                            CardTitle={logement.title}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}