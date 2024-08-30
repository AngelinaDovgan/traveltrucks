import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import { BsDiagram3 } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

export default function Camper({ camper }) {
    const dispatch = useDispatch();

    const { name, location, price, description, gallery, rating,  AC, kitchen, engine, transmission } = camper;

    return (
        <div>
            <h2>{name}</h2>
            <p><FaStar />{rating}</p>
            <p><IoMapOutline />{location}</p>
            <h2>€{price.toFixed(2)}</h2>
            <p>{description}</p>
            <p><BsDiagram3 />{transmission}</p>
            <p><BsFuelPump />{engine}</p>
            <ul>
                {kitchen && <li><BsCupHot />Kitchen</li>}
                {AC && <li><LuWind />AC</li>}
                
            </ul>
            {gallery && gallery.length > 0 && (
                <div>
                    <img
                        src={gallery[0].thumb}
                        alt="Camper image"/>
                </div>
                
            )}
            <Link to={`/catalog/${camper.id}`} state={{from: location }}>
                        Show more   
                    </Link>
        </div>
    );
}