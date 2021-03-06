import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import UserDataService from "../services/user.service";


class manage_account extends Component {

	deleteAccount(username) {
		if (username != null) {
			var data = {
                status: 'Deleted'
            }
            UserDataService.update(username, data).then(response => {
                console.log(response.data);
                alert('Your account has been deleted');
                this.props.history.push("/");
            }).catch(e => {
                alert('Something went wrong. Please try again');
                console.log(e)
            });
			this.props.history.push("/");
		} else {
			/*
			second clicking will redirect back to login page
			*/
			this.props.history.push("/login");
		}

	}


	render() {
		// const {user} = this.props;
		const cookies = new Cookies();
		var type = cookies.get('type');
		var email = cookies.get('email');
        if (typeof type === 'undefined' || typeof email === 'undefined') {
            this.props.history.push("/");
        }
		if (type === '' || email === '') {
			this.props.history.push("/");
		}
		return (
			<div className="account">
                <h5><Link className = "link" to="/home">Home</Link></h5>
                <h2>Manage Account</h2>
				<h4>Current Account: {email} </h4>
				<button onClick = {() => {if (window.confirm("Delete this user?")) {this.deleteAccount(email)};}} >Delete My Account </button>

				<Link className="link"to="/home">return home</Link>
				<div class="image"></div>

			</div>
		);
	}
}


export default manage_account;
