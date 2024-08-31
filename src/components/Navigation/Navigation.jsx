import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from "clsx";
import logo from '../../assets/Logo.png';

const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
        <nav>
            <ul className={css.list}>
            <li><NavLink to="/" className={css.trucks}>Travel<span className={css.span}>Trucks</span></NavLink></li>
            <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
            <li><NavLink to="/catalog" className={activeLink}>Catalog</NavLink> </li>   
            </ul>
           
        </nav>
    )
}