import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import "./Clock.css";

interface ClockState {
    id: number;
    name: string;
}

class Clock extends Component<{}, ClockState[]> {


    public constructor(props: {}) {
        super(props);

    }




    updateMe() {
        setInterval(() => { this.setState({}) }, 1000)
    }
    private ranNum = 0;


    private tick = () => {
        const element = (
            <div>

                <span><h2> {new Date().toLocaleTimeString()}</h2></span>

            </div>
        );
        ReactDOM.render(
            element,
            document.getElementById('Clock1')
        );
    }





    public render(): JSX.Element {
        return (
            <div className="Clock Box" id="Clock1">
                <p>
                    {setInterval(this.tick, 1000)}
                </p>
            </div>
        );
    }
}

export default Clock;
