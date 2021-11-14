import "./RandomShoes.css";
import UnderArmour from "../../../Assets/Images/Under-Armour.jpg";
import Nike from "../../../Assets/Images/Nike.jpg";
import Source from "../../../Assets/Images/Source.jpg";
import Crocks from "../../../Assets/Images/Crocks.jpg";
import Adidas from "../../../Assets/Images/Adidas.jpg";

import React from "react";

function RandomShoes(): JSX.Element {

    //...

    // Taking the state value: 
    // Taking the function to change the state value
    // setState for that value

    // Helper function returning a random product:
    const RandomNumber = () => {
        const [number, setNumber] = React.useState(0);
        const brands = [UnderArmour, Nike, Crocks, Source, Adidas];
        // add side effect to component
        React.useEffect(() => {
            // create interval
            const interval = setInterval(
                // set number every 1s
                () => setNumber(Math.floor(Math.random() * 5)),
                2000
            );

            // clean up interval on unmount
            return () => {
                clearInterval(interval);
            };
        }, []);

        return <p><img className="RandomShoesImg" src={brands[number]} alt="Brands"></img> </p>;
    };


    return (
        <div className="RandomShoes Box">


            <RandomNumber />

        </div>
    );
}

export default RandomShoes;
