import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
// import { browserHistory } from 'react-router';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.checkUserExists = this.checkUserExists.bind(this);
	}
	
	onChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);
		if (!isValid){
			console.log("!isValid: ", this.state)
			this.setState({ errors });
		}
		return isValid;
	}

	checkUserExists(e){
		const field = e.target.name;
		const val = e.target.value;
		if(val !== ''){
			this.props.isUserExists(val).then(res => {
				let errors = this.state.errors;
				if (res.data.user) {
					errors[field] = 'A user with this ' + field + ' already exists.';
				} else {
					errors[field] = '';
				}
				this.setState({ errors });
			});
		}
	}

	onSubmit(e){
		e.preventDefault();
		if(this.isValid()){
			this.setState({ errors: {}, isLoading: true });
			this.props.userSignupRequest(this.state).then(
				(res) => {
					this.props.addFlashMessage({
						type: 'success',
						text: 'You have signed up successfully. Bienvenidos!'
					})
					this.context.router.push('/');				
				},
				(err) => {
					console.log("onSubmit error", err)
					this.setState({ errors: err, isLoading: false });
				}
			);
		}
		
	}
	render() {
		
		const { errors } = this.state;
		const options = map(timezones, (val, key) =>
			<option key={val} value={val}>{key}</option>
		);
		console.log("render errors: ", errors.username)
		return(
			<form onSubmit={this.onSubmit}>
				<h1>Join our community</h1>

				<TextFieldGroup
					error={errors.username}
					label="Username"
					onChange={this.onChange}
					checkUserExists={this.checkUserExists}
					value={this.state.username}					
					field="username"
				/>

				<TextFieldGroup
					error={errors.email}
					label="Email"
					onChange={this.onChange}
					checkUserExists={this.checkUserExists}
					value={this.state.email}					
					field="email"
				/>

				<TextFieldGroup
					error={errors.password}
					label="Password"
					onChange={this.onChange}
					value={this.state.password}					
					field="password"
					type="password"
				/>

				<TextFieldGroup
					error={errors.passwordConfirmation}
					label="Password confirmation"
					onChange={this.onChange}
					value={this.state.passwordConfirmation}					
					field="passwordConfirmation"
					type="password"
				/>

				<div className={classnames("form-group", { 'has-error': errors.timezone} )}>
					<label className="control-label">Timezone</label>
					<select 
						value={this.state.timezone}
						onChange={this.onChange}
						type="text"
						name="timezone"
						className="form-control"
					>
						<option value="" disabled>Choose your timezone</option>
						{options}
					</select>
					{errors.timezone && <span className="help-block">{ errors.timezone }</span>}
				</div>
				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-large">Signup</button>
				</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired,
	isUserExists: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}
export default SignupForm;