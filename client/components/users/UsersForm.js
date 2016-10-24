import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/usersActions';
import map from 'lodash/map';

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
	}

	render() {
		const users = map(this.state.users, (user, id) => {
            return <li key={id}>{user.username}</li>
		});

		return (
			<div>
				{this.state.users.length ? <ul>{users}</ul> : 'There are no users'}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps, { getAllUsers })(UsersForm);