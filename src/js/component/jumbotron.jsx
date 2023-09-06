import React from "react";

const Jumbotron= () => {
	return (
		<div className="container">
			<div className="jumbotron bg-secondary rounded p-5 m-x-1">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi odit laboriosam est earum eos inventore voluptas voluptatem ullam provident assumenda, quidem minima itaque placeat rerum dolores quod soluta asperiores cum.</p>
				<hr className="my-4"/>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;