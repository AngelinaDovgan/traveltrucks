import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from "clsx";

const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
        <nav>
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/catalog" className={activeLink}>Catalog</NavLink>
        </nav>
    )
}