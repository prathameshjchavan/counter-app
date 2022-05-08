import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import _ from "lodash";

class App extends Component {
	state = {
		counters: [
			{
				id: 1,
				value: 1,
			},
			{
				id: 2,
				value: 4,
			},
			{
				id: 3,
				value: 2,
			},
			{
				id: 4,
				value: 0,
			},
		],
	};

	constructor() {
		super();
		console.log("App - Constructor");
	}

	componentDidMount() {
		console.log("App - Mounted");
	}

	handleIncrement = (counter) => {
		// let counters = _.cloneDeep(this.state.counters);
		// counters = counters.map((counter) => {
		// 	counter.id === counterId && counter.value++;
		// 	return counter;
		// });
		// this.setState({ counters });

		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((counter) => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(
			(counter) => counter.id !== counterId
		);
		this.setState({ counters });
	};

	render() {
		console.log("App - Rendered");

		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
