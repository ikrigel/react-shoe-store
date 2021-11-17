
import Shoes from "../Shoes/Shoes";
import ShoesOnSale from "../ShoesOnSale/ShoesOnSale";
import Specials from "../Specials/Specials";
import YouTube from "../YouTube/YouTube";
import "./Home.css";
import Adidas from "../../../Assets/Images/Adidas.jpg";
import Nike from "../../../Assets/Images/Nike.jpg";
import Crocks from "../../../Assets/Images/Crocks.jpg";
import Source from "../../../Assets/Images/Source.jpg";
import UnderArmour from "../../../Assets/Images/Under-Armour.jpg";
import RandomProduct from "../RandomProduct/RandomProduct";
import Clock from "../Clock/Clock";
import RandomBrand from "../RandomBrand/RandomBrand";
import RandomShoes from "../RandomShoes/RandomShoes";
import RssEnhancer from "../../LayoutArea/RssEnhancer/RssEnhancer";
import RandomShoes2 from "../RandomShoes2/RandomShoes2";

function Home(): JSX.Element {
  return (
    <div className="Home ">
      <br />
      <RssEnhancer label={"http://www.ynet.co.il/Integration/StoryRss1854.xml"} />
      <br />
      <RandomProduct />
      {/* Lifecycle Hooks */}
      <RandomBrand />
      <RandomShoes />
      <RandomShoes2/>
      <br />
      <Clock />
      <br />
      <Specials />
      <br />
      <YouTube />
      <br />
      <ShoesOnSale />
      <br />
      <Shoes brand="Adidas" size={37} price={225} picture={Adidas} />
      <Shoes brand="Nike" size={39} price={245} picture={Nike} />
      <Shoes brand="Crocks" size={40} price={122} picture={Crocks} />
      <Shoes brand="Source" size={41} price={99} picture={Source} />
      <Shoes brand="Under Armour" size={42} price={170} picture={UnderArmour} />
      <br />


    </div>
  );
}

export default Home;
