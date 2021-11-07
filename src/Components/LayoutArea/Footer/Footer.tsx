import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>All Rights Reserved &copy;{currentDate()}</p>
        </div>
    );
}

function currentDate(separator='-'): string {
    //separator = separator;
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }


export default Footer;
