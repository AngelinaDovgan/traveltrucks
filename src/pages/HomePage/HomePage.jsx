import css from './HomePage.module.css';
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className={css.background}>
            <div className={css.titlecont}>
             <h1 className={css.ti}>Campers of your dreams</h1>
             <h2 className={css.titl}>You can find everything you want in our catalog</h2>    
            </div>
       <Link className={css.button} to={"/catalog/"}>View now </Link>
    </div>
)
}