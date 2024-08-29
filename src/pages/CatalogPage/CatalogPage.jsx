import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/camperOps";
import CampersList from "../../components/CampersList/CampersList";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectLoading, selectError } from "../../redux/camperSlice";


export default function CatalogPage() {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Catalog</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {campers.length > 0 ? (
                <CampersList campers={campers} />
            ) : (<p>No campers available</p>
            )}
        </div>
    );
}


