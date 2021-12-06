import BackColorByHour from "../BackColorByHour/BackColorByHour";
import "./Specials.css";

function Specials(): JSX.Element {
    return (
        <div className="Specials ">
			
            <p>
                Our Specials:

                {isSundayOrMonday() ? " Nike | " : " Under Armor | "}
                
                { isSundayOrMonday() && " Snickers | " }

                { isSundayOrMonday() || " Adidas | " }

            </p>
        </div>
    );
}

function isSundayOrMonday(): boolean {
    const now = new Date();
    const dayOfWeek = now.getDay() + 1; // Sunday = 1, Monday = 2...
    // return (dayOfWeek == 3 ||dayOfWeek == 4);
    return (dayOfWeek === 1 ||dayOfWeek === 2);
    
}
export default BackColorByHour(Specials);
