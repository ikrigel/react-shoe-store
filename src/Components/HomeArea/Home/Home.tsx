
import ShoesOnSale from "../ShoesOnSale/ShoesOnSale";
import Specials from "../Specials/Specials";
import YouTube from "../YouTube/YouTube";
import "./Home.css";

function Home(): JSX.Element {
  return (
    <div className="Home ">
      <switch>
        <Specials />
<br />
        <YouTube />
<br />
        <ShoesOnSale />
        
        
        
      </switch>
    </div>
  );
}

export default Home;
