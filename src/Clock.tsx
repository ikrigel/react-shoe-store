import { Component } from "react";
import "./Clock.css";
interface ClockProps {

}

interface ClockState {
    time: string;
}

class Clock extends Component<ClockProps, ClockState> {

    private timerId: number;

    public constructor(props: ClockProps) {
        super(props);
        this.state = { time: this.getTime() };
    }
    getTime() {
        const now = new Date();
        return now.toLocaleTimeString();
    }


    // componentDidMount - performs once, can do side-effects:
    public componentDidMount(): void {
        this.timerId = window.setInterval(() => this.setState({ time: this.getTime() }), 1000);
    }

    // componentDidUpdate - performs whenever props or state changes, can do side-effects:
    public componentDidUpdate(prevProps: ClockProps, prevState: ClockState): void {
        // ...
    }

    // componentWillUnmount - performs once just before component destroyed, can do side-effects:
    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }






    public render(): JSX.Element {
        return (
            <div className="Clock Box" >
                <p>
                    {this.state.time}
                </p>
            </div>
        );
    }
}

export default Clock;
