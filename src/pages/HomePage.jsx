import style from './HomePage.module.scss';
import Header from '../layout/Header.jsx';
import HeroHeader from '../layout/HeroHeader.jsx';
import SectionCards from '../layout/SectionCards.jsx';
import Footer from '../layout/Footer.jsx';

export default function HomePage(){

    return(
        <div className={style.HomePage}>
            <Header/>
            <HeroHeader title='Découvrez nos sushi'/>
            <SectionCards>


            </SectionCards>
            <Footer/>
        </div>
    )
}