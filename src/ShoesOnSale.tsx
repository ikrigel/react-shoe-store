import "./ShoesOnSale.css";

function ShoesOnSale(): JSX.Element {
  const items = [
    { id: 1, name: "Nike" },
    { id: 2, name: "Snickers" },
    { id: 3, name: "Crocks" },
    { id: 4, name: "Adidas" },
  ];

  return (
    <div className="ShoesOnSale Box">
      <p>



        Our Shoes:
        <ul>
          {items.map((item) => (
            <li>
              <span className="showsColor" key={item.id}>{item.name} </span>
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
}

export default ShoesOnSale;
