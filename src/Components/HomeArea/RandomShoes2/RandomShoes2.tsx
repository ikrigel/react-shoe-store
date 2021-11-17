import UnderArmour from "../../../Assets/Images/Under-Armour.jpg";
import Nike from "../../../Assets/Images/Nike.jpg";
import Source from "../../../Assets/Images/Source.jpg";
import Crocks from "../../../Assets/Images/Crocks.jpg";
import Adidas from "../../../Assets/Images/Adidas.jpg";

import "./RandomShoes2.css";
import { useEffect, useState } from "react";


function RandomShoes2(): JSX.Element {
    const [number, setNumber] = useState<number>(RandomNumber());
    const brands = [UnderArmour, Nike, Crocks, Source, Adidas];

    useEffect(() => {
        const timerId = setInterval(() => setNumber(RandomNumber()), 1000);
        return () => clearInterval(timerId);
    }, []);


    const value = brands[number];
    
    return (
        <div className="RandomShoes2 Box">
            <p><img className="RandomShoesImg" src={value} alt="Brands"></img> </p>
        </div>
    );
    
}

    function RandomNumber(): number {

        const rnd = Math.floor(Math.random() * 5);



        return rnd;

    }

export default RandomShoes2;
