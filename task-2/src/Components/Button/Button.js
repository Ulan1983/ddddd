import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return false;
	};

	render() {
		return (
			<div>
				<button className="btn" type="submit" onClick={this.props.newJoke}>Update joke</button>
			</div>
		);
	}
}

export default Button;