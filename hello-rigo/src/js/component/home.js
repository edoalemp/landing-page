import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//construye Pagina
export const Page = props => {
	return (
		<div>
			<div>
				<MenuBar />
			</div>
			<div className="container mt-3">
				<div className="row justify-content-md-center mt-3">
					<div className="col col-12 mt-3">
						<Welcome />
					</div>
				</div>
				<div className="row ">
					<div className="col-3">
						<Cards />
					</div>
					<div className="col-3 ">
						<Cards />
					</div>
					<div className="col-3 ">
						<Cards />
					</div>
					<div className="col-3 ">
						<Cards />
					</div>
				</div>
			</div>
			<div>
				<BottomPage />
			</div>
		</div>
	);
};

Page.propTypes = {};

// Construye Barra Menu
const MenuBar = () => {
	return (
		<nav className="navbar fixed-top navbar-dark bg-dark">
			<a className="navbar-brand">Fixed tops</a>
		</nav>
	);
};

// Construye tarjeta

const Cards = () => {
	return (
		<div className="card rounded-lg" style={{ width: "16rem" }}>
			<img
				src="http://placehold.it/500x325"
				className="card-img-top"
				alt="..."
			/>
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

//Construye bienvenida

const Welcome = () => {
	return (
		<div className="jumbotron mt-5">
			<h1 className="display-2">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>

			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
};

// Construye Pie

const BottomPage = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mt-3">
			<a className="navbar-brand">Copyright</a>
		</nav>
	);
};
