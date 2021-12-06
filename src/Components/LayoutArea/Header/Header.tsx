import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Marquee from "../Marquee/Marquee";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">

            <Marquee />
            <AuthMenu />
            <h1>The coolest shoe store in the country</h1>


        </div>
    );
}

export default Header;
