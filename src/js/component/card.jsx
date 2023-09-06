import React from "react";

const Card= () => {
	return (
        <div className="container m-3 p-5 d-inline-block col-2 text-center">
            <div className="card m-x-5" style={{width: "12rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
        </div>
	);
};

export default Card;