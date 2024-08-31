import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import { BsDiagram3 } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import css from './Camper.module.css';

export default function Camper({ camper }) {
    const dispatch = useDispatch();

    const { name, location, price, description, gallery, rating,  AC, kitchen, engine, transmission } = camper;

    return (
<div className={css.div}> 

        <div className={css.container}>

              {gallery && gallery.length > 0 && (
                <div className={css.picname}>
                    <img className={css.img}
                        src={gallery[0].thumb}
                        alt="Camper image"
                        width="292px;"
                        height="100%" />
                       
                    <h2 className={css.test}>{name}</h2>   
                        <h2>€{price ? price.toFixed(2) : "N/A"}</h2>  
                        
                    <div className={css.details}>
                       <p><FaStar />{rating}</p>  
                    <p><IoMapOutline />{location}</p> 
                     <p>{description}</p>          
                    </div>
                   
                <div className={css.fet}>
                <p className={css.feat}><BsFuelPump />{engine}</p>
                <p className={css.feat}><BsDiagram3 />{transmission}</p>
                {kitchen && <p className={css.feat}><BsCupHot />Kitchen</p>}
                            {AC && <p className={css.feat}><LuWind />AC</p>}               
                        </div>
      
                    </div>
                )}   
         <Link className={css.button} to={`/catalog/${camper.id}`} state={{from: location }}> Show more  </Link>  
            </div>
        </div>
    );
}