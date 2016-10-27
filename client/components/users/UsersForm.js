import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/usersActions';
import map from 'lodash/map';
import CreateUser from './CreateUser';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import validateInput from '../../../server/shared/validations/signup';

class UsersForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			users: {},
			errors: {},
			isLoading: false,
      		invalid: false
		};
		
		this.props.getAllUsers().then(
				(res) => { 
					if (res.data.users) {
						this.setState({ users: res.data.users });
					} 
				},
				(err) => {this.setState({errors: err.response.data.errors })
				console.log("could not save user")}
		);

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.checkUserExists = this.checkUserExists.bind(this);
	}

	onChange(e) {
    	this.setState({ [e.target.name]: e.target.value });
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);

		if (!isValid) {
		this.setState({ errors });
		}

		return isValid;
	}

	checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(
		  
		  res => {
			console.log(res.data.user);
			let errors = this.state.errors;
			let invalid;
			if (res.data.user) {
        errors[field] = 'There is user with such ' + field;
        invalid = true;
			} else {
        errors[field] = '';
        invalid = false;
			}
			this.setState({ errors, invalid });
      },
	  (err) => {
		  console.log("checkUserExists error: ", err)
	  });
    }
  }

  	onSubmit(e) {
		e.preventDefault();

		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
			this.props.userSignupRequest(this.state).then(
				(res) => {
					this.props.addFlashMessage({
						type: 'success',
						text: 'You created a user successfully.'
					});
					this.setState({
					users:[
						...this.state.users,
						{
							username: this.state.username,
							email: this.state.email,
							timezone: this.state.timezone
						}
					]
				})
				},
				(err) => this.setState({ errors: err.response.data, isLoading: false })
			);
		}
	}

	render() {
		const users = map(this.state.users, (user, id) => {
            return (
				<tr key={id}>
				<td>{user.username}</td>
				<td>{user.email}</td>
				<td>{user.timezone}</td>
				</tr>
			)
		});
		const tableHeaders = (
				<thead>
				<tr>
					<th>Username</th>
					<th>Email</th>
					<th>Timezone</th>
				</tr>
				</thead>
				);
		return (
			<div>
				<table className = "table table-striped table-hover">
				{tableHeaders}
				{this.state.users.length ? <tbody>{users}</tbody> : <tbody><tr><th>'There are no users'</th></tr></tbody>}
				</table>
				<CreateUser 
					onSubmit={this.onSubmit} 
					onChange={this.onChange}
					checkUserExists={this.checkUserExists} 
					errors={this.state.errors}
					isLoading={this.state.isLoading}
					invalid={this.state.invalid}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps, { getAllUsers, userSignupRequest, addFlashMessage, isUserExists})(UsersForm);