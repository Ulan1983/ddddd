import React, {Component} from 'react';
import './MovieName.css';

class MovieName extends Component {

	render() {
		return (
			<div className="movie_name">
				<form onSubmit={this.props.addMovie}>
					<input className="movie_inp" type="text" required placeholder="Movie name" onChange={this.props.newMovie} value={this.props.movieName}/>
					<button className="movie_btn" type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default MovieName;