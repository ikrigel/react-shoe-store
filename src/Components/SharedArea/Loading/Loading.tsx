import "./Loading.css";
import loadingImage from "../../../Assets/Images/Blocks-1s-200px.gif";

function Loading(): JSX.Element {
    return (
        <div className="Loading">
			<img src={loadingImage}  />
        </div>
    );
}

export default Loading;
