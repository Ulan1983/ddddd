import React, {Component} from 'react';
import MovieName from "../../Components/MovieName/MovieName";
import MovieList from "../../Components/MovieList/MovieList";
import nanoid from 'nanoid';
import './Movie.css';

class Movie extends Component {
	state = {
		movieName:'',
		movieList: []
	};

	createMovieName = e => {
		this.setState({movieName: e.target.value});
	};

	addMovieName = e => {
		e.preventDefault();

		const movieList = [...this.state.movieList];
		const movie = {id: nanoid(), text: this.state.movieName};
		movieList.push(movie);

		this.setState({movieList, movieName: ''});
	};

	changeMovieName = (e, id) => {
		const index = this.state.movieList.findIndex(p => p.id === id);
		const movieList = [...this.state.movieList];
		const movie = movieList[index];
		movie.text = e.target.value;
		movieList[index] = movie;

		this.setState({movieList});
	};

	removeMovieName = id => {
		const index = this.state.movieList.findIndex(p => p.id === id);
		const movieList = [...this.state.movieList];
		movieList.splice(index, 1);

		this.setState({movieList});
	};

	render() {
		return (
			<div className="movie">
				<MovieName
					movieName={this.state.movieName}
					newMovie={e => this.createMovieName(e)}
					addMovie={this.addMovieName}
				/>
				<p>To watch list:</p>
				{this.state.movieList.map(item => (
					<MovieList
						key={item.id}
						text={item.text}
						changeMovie={e => this.changeMovieName(e, item.id)}
						removeMovie={() => this.removeMovieName(item.id)}
					/>
				))}
			</div>
		);
	}
}

export default Movie;