import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		console.log("Counters - Rendered");

		const { onReset, counters, onDelete, onIncrement, onDecrement } =
			this.props;

		return (
			<div>
				<button
					onClick={onReset}
					className="btn btn-primary btn-md fw-bold m-2"
				>
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
