export default function CampersFeatures({ camper }) {
    const { form, length, width, height, tank, consumption } = camper;

    return (
        <div>
            <h3>Features</h3>
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

