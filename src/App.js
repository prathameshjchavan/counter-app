import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
	constructor() {
		super();
		this.state = {
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
	}

	handleIncrement = (counterId) => {
		const counters = this.state.counters.map((counter) => {
			counter.id === counterId && counter.value++;
			return counter;
		});
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
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
