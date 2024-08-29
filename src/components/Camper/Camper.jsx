import { useDispatch } from "react-redux";

export default function Camper({ camper }) {
    const dispatch = useDispatch();

    const { name, location, description, gallery, rating,  AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water } = camper;

    return (
        <div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{description}</p>
             <p>{rating}</p>
            {gallery && gallery.length > 0 && (
                <div>
                    <img
                        src={gallery[0].thumb}
                        alt="Camper image"/>
                </div>
            )}
            <ul>
                {AC && <li>Air Cond</li>}
                {bathroom && <li>Bathroom</li>}
            </ul>
        </div>
    );
}