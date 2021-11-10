import "./Shoes.css";

interface ShoesProps {
    brand: string;
    size: number;
    price: number;
    picture: string;
}

function Shoes(props: ShoesProps): JSX.Element {
    return (
        <div className="Shoes Box">

            <p>
                <ul>
                    <li>Brand: {props.brand} </li>
                    <li>Size: {props.size}</li>
                    <li>Price: {props.price}&#8362;</li>
                    <li> <div className="picture"> Picture:< img src={props.picture} height={100} width={100}  alt="" /></div></li>
                </ul>
            </p>
        </div>
    );
}

export default Shoes;
