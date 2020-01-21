import React, {Component} from 'react';
import Joke from "../../Components/Joke/Joke";
import Button from "../../Components/Button/Button";

class Jokes extends Component {

	state = {
		jokeText: ''
	};

	componentDidMount() {
		this.requestJoke();
	}

	updateJoke = () => {
		this.requestJoke();
	};

	requestJoke = () => {
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