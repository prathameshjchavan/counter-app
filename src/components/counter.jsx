import React, { Component } from "react";

class Counter extends Component {
	componentDidUpdate(prevProps, prevState) {
		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		if (prevProps.counter.value !== this.props.counter.value) {
			// Ajax call and get new data from the server
		}
	}

	componentWillUnmount() {
		console.log("Counter - Unmount");
	}

	render() {
		console.log("Counter - Rendered");

		return (
			<div className="row">
				<div className="col-2">
					<h2>
						<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
					</h2>
				</div>
				<div className="col">
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className="btn btn-secondary btn-md fw-bolder"
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						disabled={!this.props.counter.value}
						className="btn btn-secondary btn-md m-2 fw-bolder"
					>
						-
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-md fw-bolder"
					>
						x
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 bg-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
