import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import "./RandomProduct.css";

interface RandomProductState {
    id: number;
    name: string;
}

class RandomProduct extends Component<{}, RandomProductState[]> {
    randNum2: number = 0;
    randNum4: number = 0;

    public constructor(props: {}) {
        super(props);

        this.state = [{ id: 0, name: "Adidas" },
        { id: 1, name: "Crocks" },
        { id: 2, name: "Nike" },
        { id: 3, name: "Source" },
        { id: 4, name: "Under Armour" }];
    }
    private arr1 = [];
    private initProduct = () => {
        // The only way to change the state:

        this.setState([{ id: 0, name: "Adidas" }, { id: 1, name: "Crocks" }, { id: 2, name: "Nike" }, { id: 3, name: "Source" }, { id: 4, name: "Under Armour" }]); // Will render the component immediately!
    }
    private randNum = 0;
    private randomNumber = () => {

        this.randNum = Math.floor(Math.random() * 5);

        return this.randNum
    }
    private interval = () => {
        setInterval(() => this.randNum2 = this.randomNumber(), 1000)

        return this.randNum2;
    }
    updateMe() {
        setInterval(() => { this.setState({}) }, 1000)
    }
    private ranNum = 0;

    // private RandomNumber = () => {
    //     const [number, setNumber] = React.useState(0);

    //     // add side effect to component
    //     React.useEffect(() => {
    //       // create interval
    //       const interval = setInterval(
    //         // set number every 5s
    //         () => setNumber(Math.floor(Math.random() * 5)),
    //         5000
    //       );

    //       // clean up interval on unmount
    //       return () => {
    //         clearInterval(interval);
    //       };
    //     }, []);

    //     return <p>{number}</p>;
    //   };
    private tick = () => {
        const element = (
            <div>
                <h1>Hello, world!</h1>
                {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
                <span><h2>It is {this.state[this.randomNumber()].name}.</h2></span>
            </div>
        );
        ReactDOM.render(
            element,
            document.getElementById('RandomProduct1')
        );
    }



    // randNum1 = this.randomNumber();//setInterval( this.randomNumber, 1000);
    // randNum3 = this.interval();
    // randNum5 = setInterval(this.randomNumber, 1000);

    public render(): JSX.Element {
        return (
            <div className="RandomProduct Box" id="RandomProduct1">
                <p>
                    {setInterval(this.tick, 2000)}
                    {/* <button onClick={this.initProduct}>Init Bestseller Product</button> */}
                    {/* <button onClick={this.showProduct}>Show Bestseller Product</button> */}
                    {/* {setInterval(() => this.randNum = Math.floor(Math.random() * 5), 1000)} */}
                    {/* Random Number2: {this.randNum2} */}
                    <br />
                    {/* Random Number4: {setInterval(() => this.randNum4 = this.randomNumber(), 1000)} */}
                    <br />
                    {/* Random Number1: {this.randNum1} */}
                    <br />
                    {/* <span>Random Shoes -  ID: {this.state[this.randNum1].id}, Name: {this.state[this.randNum1].name}</span> */}

                    {/* <span>Random Shoes -Name: {this.state[this.randNum1].name}</span> */}
                </p>
            </div>
        );
    }
}

export default RandomProduct;
