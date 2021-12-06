import "./BackColorRandom.css";

// This is the higher order component

function BackColorRandom(InnerComponent: Function): Function {

    const style = {
        backgroundColor: getColor()
    }

    function getColor(): string {
       
        const hue1 = Math.floor(Math.random()* 256 );
        const hue2 = Math.floor(Math.random()* 256 );
        const hue3 = Math.floor(Math.random()* 256 );
        const color = `rgb(${hue1},${hue2},${hue3})`;
        return color;
    }

    return function (props: any) {
        return (
            <div className="BackColorRandom Box" style={style}>
                < InnerComponent {...props } />
        </div >
    );
    }
}

export default BackColorRandom;
