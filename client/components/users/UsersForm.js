import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers, createUser } from '../../actions/usersActions';
import map from 'lodash/map';
import CreateUser from './CreateUser';

class UsersForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			users: {},
			errors: {}
		};
		
		this.props.getAllUsers().then(
				(res) => { 
					if (res.data.users) {
						this.setState({ users: res.data.users });
					} 
				},
				(err) => this.setState({errors: err.response.data.errors })
		);

		this.onCreateUser = this.onCreateUser.bind(this);
	}
	onCreateUser(username, email){
		this.setState({
			users:[
				...this.state.users,
				{
					username:username,
					email:email
				}
			]
		})
	}
	render() {
		const users = map(this.state.users, (user, id) => {
            return <li key={id}>{user.username}, {user.email}</li>
		});

		return (
			<div>
				{this.state.users.length ? <ul>{users}</ul> : 'There are no users'}
				<CreateUser onCreateUser={this.onCreateUser} createUser={this.props.createUser}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps, { getAllUsers, createUser })(UsersForm);