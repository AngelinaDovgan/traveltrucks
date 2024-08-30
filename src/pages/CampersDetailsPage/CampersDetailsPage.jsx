import { useEffect, useRef } from "react";
import { fetchCampersId } from "../../redux/camperOps";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectLoading, selectError } from "../../redux/camperSlice";
import { useLocation, useParams } from "react-router";
import BackLink from "../../components/BackLink/BackLink";



export default function CampersDetailsPage() {
    const dispatch = useDispatch();
    const locationState = useLocation();
    const { id } = useParams();
    const backLinkHref = useRef(locationState?.state ?? "/catalog");
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const camper = campers.find(camper => camper.id === id);
    
    useEffect(() => {
    if (!camper) {
    dispatch(fetchCampersId(id));
    }
    }, [dispatch, id, camper]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!camper) {
    return <p>No camper data available!</p>;
    }


    const { name, price, description, gallery } = camper;
    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <BackLink to={backLinkHref}>Back</BackLink>
            <main>
            <div>
            <p>{description}</p>
            </div>
            {gallery && gallery.length > 0 && (
                    <div>
                        <img
                            src={gallery[0].thumb}
                            alt="Camper image" />
                    </div>
                )}
            </main>
        </div>
    );
}




              
              
  