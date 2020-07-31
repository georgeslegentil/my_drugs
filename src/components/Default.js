import React, { Component } from 'react';


export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className = "row">
                    <div className="col-10 mx-auto text-center text-uppercase pt-5">
                        <h2>404 error page not found</h2>
                        <h3>
                            the requested URL <span className="text-danger">{this.props.location.pathname}</span>
                            {" "}
                            was was not found
                        </h3>
                        <img alt = "freeze" className="img-fluid" src="https://images.genius.com/3363b0155abaa3b46e956c5e90f88ff2.973x973x1.jpg"></img>
                    </div>
                </div>
            </div>
        );
    }
}