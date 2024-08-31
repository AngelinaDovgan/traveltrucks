import { BsDiagram3 } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { BsCupHot } from "react-icons/bs";
import { MdConnectedTv } from "react-icons/md";
import { MdOutlineRadio } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineMicrowave } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";

export default function CampersFeatures({ camper }) {
    const { form, length, width, height, tank, consumption, transmission, engine, AC, bathroom,  kitchen, TV, radio, refrigerator, microwave, gas, water } = camper;

    return (
        <div>
            <h3>Vehicle details</h3>
            <ul>
                <li><p><BsDiagram3 />{transmission}</p></li>
                <li><p><BsFuelPump />{engine}</p></li>
                <li>{AC ? <p><LuWind /> AC</p> : ""}</li>
                <li>{bathroom ? <p><LuBath /> Bathroom</p> : ""}</li>
                <li>{kitchen ? <p><BsCupHot /> Kitchen</p> : ""}</li>
                <li>{TV ? <p><MdConnectedTv /> TV</p> : ""}</li>
                <li>{radio ? <p><MdOutlineRadio /> Radio </p> : ""}</li>
                <li>{refrigerator ? <p><CgSmartHomeRefrigerator /> Refrigerator </p> : ""}</li>
                <li>{microwave ? <p><MdOutlineMicrowave /> Microwave </p> : ""}</li>
                <li>{gas ? <p><GiGasStove /> Gas </p> : ""}</li>
                <li>{water ? <p><IoWaterOutline /> Water </p> : ""}</li>
            </ul>
            <ul>
                {form && <li>Form: {form}</li>}
                {length && <li>Length: {length}</li>}
                {width && <li>Width: {width}</li>}
                {height && <li>Height: {height}</li>}
                {tank && <li>Tank: {tank}</li>}
                {consumption && <li>Consumption: {consumption}</li>}
            </ul>
        </div>
    );
} 


