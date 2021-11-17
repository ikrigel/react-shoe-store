import "./Marquee.css";
import Marquee1 from "react-fast-marquee";
import RssEnhancer from "../RssEnhancer/RssEnhancer";
import RSS from "../../SharedArea/RSS/RSS";
import Clock from "../../HomeArea/Clock/Clock";
function Marquee(): JSX.Element {
  return (
    <div className="Marquee ">
      <Marquee1 speed={40} gradientColor={[255, 255, 44]} pauseOnHover={true}>
        My Cool Shoe Store
        <Clock />
        {/* <RSS name={"https://www.reddit.com/.rss"} /> */}
        {/* <RssEnhancer label={"http://www.ynet.co.il/Integration/StoryRss1854.xml"} /> */}
      </Marquee1>
    </div>
  );
}

export default Marquee;
