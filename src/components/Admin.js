import React, { Component } from 'react';


export default class Admin extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className = "row">
                    <div className="col-10 mx-auto text-center text-uppercase pt-5">
                        <h2>AdminPage</h2>
                        <img alt = "admin" className="img-fluid" src="https://fr.web.img2.acsta.net/r_1280_720/pictures/16/07/18/15/28/532217.jpg"></img>
                    </div>
                </div>
            </div>
        );
    }
}