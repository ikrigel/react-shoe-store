// import React from "react";
import { Component } from "react";
// import ReactDOM from "react-dom";
import "./RandomProduct.css";

interface RandomProductState {
    // id: number;
    // name: string;
    items: { id: number, name: string }[];
    index: number;
}

class RandomProduct extends Component<{}, RandomProductState> {
    // randNum2: number = 0;
    // randNum4: number = 0;

    public constructor(props: {}) {
        super(props);

        // this.state = [{ id: 0, name: "Adidas" },
        // { id: 1, name: "Crocks" },
        // { id: 2, name: "Nike" },
        // { id: 3, name: "Source" },
        // { id: 4, name: "Under Armour" }];

        this.state = {
            index: 0,
            items: [
                { id: 0, name: "Adidas" },
                { id: 1, name: "Crocks" },
                { id: 2, name: "Nike" },
                { id: 3, name: "Source" },
                { id: 4, name: "Under Armour" }
            ]
        };

        setInterval(() => {
            this.setState({ index: Math.floor(Math.random() * this.state.items.length) });
        }, 1000);

    }
   



    public render(): JSX.Element {
        return (
            <div className="RandomProduct Box">
                <p>
                
                    {this.state.items[this.state.index].name}
                </p>
            </div>
        );
    }
}

export default RandomProduct;
