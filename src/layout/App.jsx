import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import style from './App.module.scss';

export default function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}