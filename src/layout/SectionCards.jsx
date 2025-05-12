import style from './SectionCards.module.scss';
import CardRecipe from '../components/CardRecipe.jsx';

export default function SectionCards(){
    return (
        <section className={style.SectionCards}>
            <CardRecipe/>
            <CardRecipe/>
            <CardRecipe/>
            <CardRecipe/>
            <CardRecipe/>
            <CardRecipe/>
        </section>
    )
}