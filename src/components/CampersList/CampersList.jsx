import { Link, useLocation } from "react-router-dom";
import Camper from "../Camper/Camper";

export default function CampersList({ campers }) {
    const location = useLocation();
    return (
        <div>
            <ul>
                {campers.map((camper) => (
                    <li key={camper.id}>
                        <p>{camper.location}</p>
                        <Camper camper={camper}/> 
                </li>
            ))}
            </ul>
        </div>
    )
}

