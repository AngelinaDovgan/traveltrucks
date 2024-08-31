import { Link, useLocation } from "react-router-dom";
import Camper from "../Camper/Camper";
import css from './CamperList.module.css';

export default function CampersList({ campers }) {
    const location = useLocation();
    return (
        <div>
            <ul className={css.list}>
                {campers.map((camper) => (
                    <li key={camper.id}>
                        <Camper camper={camper}/> 
                </li>
            ))}
            </ul>
        </div>
    )
}

