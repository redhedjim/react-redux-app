import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/users';
import { connect } from 'react-redux';
import { getUser, updateUser, deleteUser } from '../../actions/userActions';
import { username } from '../../actions/authActions';
import map from 'lodash/map';

class UserForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            username: '',
            email: '',
            timezone: '',
            errors: {},
            isLoading: false
        };
        console.log("fired")
       
        let userId = window.location.href.replace('http://localhost:3000/user/','');

        this.props.getUser(userId).then(
            (res) => {
                console.log(res.data.user);
                if (res.data.user) {
                    console.log(res.data.user);
                    this.setState({ id: res.data.user.id, username: res.data.user.username, email: res.data.user.email });
                }
            },
            (err) => this.setState({ errors: err.response.data.errors })
        )

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({errors: err.response.data.errors, isLoading: false })
            );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { id, username, errors, email, timezone, isLoading } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Admin</h1>
                
                { errors.form && <div className="alert alert-danger">{errors.form}</div> }

                <TextFieldGroup 
                    field="id"
                    label="ID"
                    value={id.toString()}
                    error={errors.id}
                    onChange={this.onChange}
                />
                <TextFieldGroup 
                    field="username"
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={this.onChange}
                />
                <TextFieldGroup 
                    field="email"
                    label="Email"
                    value={email}
                    error={errors.email}
                    onChange={this.onChange}
                />
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>Update</button>
                    <button className="btn btn-primary btn-lg" disabled= {isLoading}>Delete User</button>
                </div>
            </form>
        );
    }
}

UserForm.propTypes = {
    username: React.PropTypes.func.isRequired
}

UserForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(null, { username, getUser, deleteUser, updateUser })(UserForm);