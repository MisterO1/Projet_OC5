import DropDown from '../../components/DropDown'
import Banner from '../../components/Banner'

import './About.scss'
import bannerAbout from '../../assets/bannerAbout.jpg'

export default function About() {
    return(
        <div className='comp comp-about'>
            <Banner image={bannerAbout} isText={false} />
            <section className='comp section-about'>
                <DropDown 
                    title="Fiabilité"
                    contents={["les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confomes aux logements et toutes les informations sont régulièrements vérifiées."]}
                />
                <DropDown 
                    title="Respect"
                    contents={["La bienveillance fait parties des valeurs fondamentales de Kasa. Tout comportement discriminatoire ou de pertubations du voisinage entrainera une exclusion de notre plateforme."]}
                />
                <DropDown 
                    title="Services"
                    contents={["La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."]}
                />
                <DropDown 
                    title="Sécurité"
                    contents={["La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que pour nos locataires, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons des atéliers sur la sécurité domestique pour nos hôtes."]}
                />
            </section>
        </div>
            
    )
}