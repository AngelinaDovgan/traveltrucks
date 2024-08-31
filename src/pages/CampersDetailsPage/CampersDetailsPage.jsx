import { useEffect, useRef } from "react";
import { fetchCampersId } from "../../redux/camperOps";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectLoading, selectError } from "../../redux/camperSlice";
import { useLocation, useParams } from "react-router";
import BackLink from "../../components/BackLink/BackLink";
import CampersFeatures from "../../components/CampersFeatures/CampersFeatures";
import { useState } from "react";
import CampersReviews from "../../components/CampersReviews/CampersReviews";
import CamperForm from "../../components/CamperForm/CamperForm";




export default function CampersDetailsPage() {
    const dispatch = useDispatch();
    const locationState = useLocation();
    const { id } = useParams();
    const [showFeatures, setShowFeatures] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const backLinkHref = useRef(locationState?.state ?? "/catalog");
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const camper = campers.find(camper => camper.id == id);
    
    useEffect(() => {
    if (!camper) {
    dispatch(fetchCampersId(id));
    }
    }, [dispatch, id, camper]);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!camper) return <p>No camper data available!</p>;


    const { name, price, description, gallery, reviews } = camper;
    const toggleFeatures = () => {
        setShowFeatures(true);
        setShowReviews(false);
    }
       const toggleReviews = () => {
        setShowFeatures(false);
        setShowReviews(true);
}
   
    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <main>
            <div>
            <p>{description}</p>
            </div>
            {gallery && gallery.length > 0 && (
                    <div>
                        {gallery.map((image, index) => (
                            <img
                                key={index}
                                src={image.thumb}
                                alt={`Camper image ${index + 1}`} />
                     ))}   
                    </div>
                )}

<ul>
<li>
<button onClick={toggleFeatures}>Features</button>
<button onClick={toggleReviews}>Reviews</button>                           
                    </li>
                    <li>
    <CamperForm/>
                    </li>
                </ul>
                {showFeatures && <CampersFeatures camper={camper} />}
                 {showReviews && <CampersReviews reviews={reviews}/>}
            </main>
        </div>
    );
}