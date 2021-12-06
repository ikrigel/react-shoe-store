import { Component } from "react";
import { Unsubscribe } from "redux";
import employeesStore from "../../../Redux/Store";
import "./TotalEmployees.css";

interface TotalEmployeesState {
	count: number;
}

class TotalEmployees extends Component<{}, TotalEmployeesState> {
    private unsubscribeMe: Unsubscribe;

   
    public componentDidMount() {
        this.unsubscribeMe =employeesStore.subscribe(() => {
            const count = employeesStore.getState().employees.length;
            this.setState({ count });
        });
    }

    public render(): JSX.Element {
        return (
            <div className="TotalEmployees">
				 {this.state?.count && <span>Total Employees: {this.state?.count}</span>}
            </div>
        );
    }

    public componentWillUnmount(): void {
        this.unsubscribeMe();
    }
}

export default TotalEmployees;
