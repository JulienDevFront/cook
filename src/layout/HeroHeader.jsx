import style from './HeroHeader.module.scss';

export default function HeroHeader({title}) {
    return (
        <aside className={style.Content}>
            <h2>{title}</h2>
        </aside>
    )
}