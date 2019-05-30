import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//construye Pagina
export const Page = props => {
	return (
		<div>
			<MenuBar />
			<Welcome />
			<div>
				<Cards />
			</div>
		</div>
	);
};

Page.propTypes = {};

// Construye Barra Menu
const MenuBar = () => {
	return (
		<nav className="navbar fixed-top navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Fixed tops
			</a>
		</nav>
	);
};

// Construye tarjeta

const Cards = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card&apos;s content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

const Welcome = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
};
