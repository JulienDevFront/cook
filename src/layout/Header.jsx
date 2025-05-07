import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.Header}>
            <h1>
                <a href='index.html'>.SUSHI</a>
            </h1>
            <ul>
                <li>
                    <button>panier</button>
                </li>
                <li>
                    <button>connexion</button>
                </li>
            </ul>
        </header>
    );
};