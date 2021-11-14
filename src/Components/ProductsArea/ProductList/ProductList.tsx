import { Component } from "react";
import Shoes from "../../HomeArea/Shoes/Shoes";
import "./ProductList.css";
import Adidas from "../../../Assets/Images/Adidas.jpg";
import Nike from "../../../Assets/Images/Nike.jpg";
import Crocks from "../../../Assets/Images/Crocks.jpg";
import Source from "../../../Assets/Images/Source.jpg";
import UnderArmour from "../../../Assets/Images/Under-Armour.jpg";
import Sneakers from "../../../Assets/Images/Sneakers.jpg";

interface ProductListState {

}

class ProductList extends Component<{}, ProductListState>{

    public constructor(props: {}) {
        super(props);
        this.state = {

        };
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList ">
                <h2>Products List...</h2>
                <div className="Box"><ul>
                    <li>                <a href="https://en.wikipedia.org/wiki/Shoe">Shoes on wikipedia</a></li>
                    <li>            <a href="https://loomfootwear.com/blogs/news/5-best-shoes-sneakers-to-wear-without-socks-in-2021">shoes sneakers to wear without socks in 2021</a></li>
                    <li>            <a href="https://www.youtube.com/watch?v=3HjIljJd-o0">Kelly-"Shoes"</a></li>
                </ul>
                </div>

                <br />
                <Shoes brand="Adidas" size={37} price={225} picture={Adidas} />
                <Shoes brand="Nike" size={39} price={245} picture={Nike} />
                <Shoes brand="Crocks" size={40} price={122} picture={Crocks} />
                <Shoes brand="Source" size={41} price={99} picture={Source} />
                <Shoes brand="Under Armour" size={42} price={170} picture={UnderArmour} />
                <Shoes brand="Sneakers" size={46} price={190} picture={Sneakers} />
            </div>
        );
    }
}

export default ProductList;
