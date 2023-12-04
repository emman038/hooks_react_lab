import ColourPickerComponent from "../components/ColourPickerComponent";
import { useEffect, useState } from "react";

const ColourPickerContainer = () => {

    const [red, setRed] = useState(50);
    const [green, setGreen] = useState(50);
    const [blue, setBlue] = useState(50);

    const [RGB, setRGB] = useState(0);

    // the callback in useEffect gets called when the values provided in the dependency array changes
    useEffect(()=>{
        let red255 = Math.ceil(red * 2.55);
        let green255 = Math.ceil(green * 2.55);
        let blue255 = Math.ceil(blue * 2.55);

        setRGB(`rgb(${red255}, ${green255}, ${blue255})`)
    }, [red, green, blue]);     // The things inside the Array are what is watched. When any of them change the callback function runs

    return ( 
        <section>
            <ColourPickerComponent red={red} setRed={setRed} green={green} setGreen={setGreen} blue={blue} setBlue={setBlue} RGB={RGB}/>
        </section>
     );
}
 
export default ColourPickerContainer;