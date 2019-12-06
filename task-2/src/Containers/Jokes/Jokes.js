import React, {Component} from 'react';
import Joke from "../../Components/Joke/Joke";
import Button from "../../Components/Button/Button";

class Jokes extends Component {

	state = {
		jokeText: ''
	};

	componentDidMount() {
		const url = 'https://api.chucknorris.io/jokes/random';
		fetch(url).then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Something went wrong with network request!');
		}).then(joke => {
			const jokeValue = joke.value;

			this.setState({jokeText: jokeValue});
		}).catch(error => console.error(error));
	}

	updateJoke = () => {
		this.componentDidMount();
	};

	render() {
		return (
			<div>
				<Joke
					text={this.state.jokeText}
				/>
				<Button
					newJoke={this.updateJoke}
				/>
			</div>
		);
	}
}

export default Jokes;