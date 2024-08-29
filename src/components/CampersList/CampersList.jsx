import { Link, useLocation } from "react-router-dom";
import Camper from "../Camper/Camper";

export default function CampersList({ campers }) {
    const location = useLocation();
    return (
        <div>
            <ul>
                {campers.map((camper) => (
                    <li key={camper.id}>
                    <Link to={`/campers/${camper.id}`} state={location}></Link>
                    <Camper camper={camper}/>
                </li>
            ))}
            </ul>
        </div>
    )
}
