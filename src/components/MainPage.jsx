import React, { Component } from 'react';

export class MainPage extends Component {

	render() {
		return(
			<div className="mainPage ">
				<h1 className="heading">Are You Happy?</h1>
				<button className="yes">Yes</button>
				<button className="no">No</button>
				<img className="backgroundImage" src={"/images/trees_Rae.jpg"}/>
			</div>
		);
	}
}

export default MainPage;