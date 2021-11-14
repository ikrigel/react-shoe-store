import { Component } from "react";
import "./RandomBrand.css";
import UnderArmour from "../../../Assets/Images/Under-Armour-logo.jpg";
import Nike from "../../../Assets/Images/Nike-logo.jpg";
import NB from "../../../Assets/Images/NB-logo.jpg";
import Saucony from "../../../Assets/Images/Saucony-logo.jpg";
import Adidas from "../../../Assets/Images/Adidas-logo.jpg";

interface RandomBrandState {
    randomBrand: string;
}

class RandomBrand extends Component<{}, RandomBrandState> {
    private timerId: number;

    public constructor(props: {}) {
        super(props);

        // Init state with one random number: 
        this.state = { randomBrand: this.getrandomBrand() };
    }

    public componentDidMount(): void {
        // Create timer which set a random number in state each second: 
        this.timerId = window.setInterval(() => this.setState({ randomBrand: this.getrandomBrand() }), 2000); // 1000 ms = 1 sec
    }
    // componentWillUnmount - performs once just before component destroyed, can do side-effects:
    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }


    // Helper function returning a random product:
    private getrandomBrand(): string {
        const brands = [UnderArmour, Nike, NB, Saucony, Adidas];
        const index = Math.floor(Math.random() * brands.length);
        return brands[index];
    }



    public render(): JSX.Element {
        return (
            <div className="RandomBrand Box">
                <p><img className="RandomBrandImg" src={this.state.randomBrand} alt="Brands" /></p>
            </div>
        );
    }
}

export default RandomBrand;
