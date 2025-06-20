import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bannerHome from '../../assets/bannerHome.jpg'

import './Home.scss'
import logements from '../../data/logements.json'

export default function Home() {
    return (
        <div className="comp comp-home">
            <Banner image={ bannerHome } isText={true} />
            <div className='comp comp-card'>
                <div className='card-container'>
                    {logements.map((logement) => 
                        <Card 
                            key={logement.id}
                            CardId={logement.id}
                            CardImage={logement.cover} 
                            CardTitle={logement.title}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}