import Preview from './Preview'
import Housing from './Housing'

import backgroundHome from '../assets/background-home.jpg'
// import backgroundAbout from '../assets/background-about.jpg'

import '../styles/Home.scss'

export default function Home() {
    return (
        <div className="comp comp-home">
            <Preview image={ backgroundHome } isText={true} />
            <Housing />
        </div>
    )
}