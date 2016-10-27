import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map';
import timezones from '../../data/timezones';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';
 
const CreateUser = ({onSubmit, onChange, checkUserExists, errors, isLoading, invalid})=>{
  const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>);
    return (
      <form onSubmit={onSubmit}>
      <h3>Create a new user </h3>
          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={onChange}
            checkUserExists={checkUserExists}
            field="username"
          />

          <TextFieldGroup
            error={errors.email}
            label="Email"
            onChange={onChange}
            checkUserExists={checkUserExists}
            field="email"
          />

          <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={onChange}
            field="password"
            type="password"
          />

          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={onChange}
            field="passwordConfirmation"
            type="password"
          />

          <div className={classnames("form-group", { 'has-error': errors.timezone })}>
            <label className="control-label">Timezone</label>
            <select
              className="form-control"
              name="timezone"
              onChange={onChange}
            >
              <option value="" disabled>Choose Your Timezone</option>
              {options}
            </select>
            {errors.timezone && <span className="help-block">{errors.timezone}</span>}
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Create User
            </button>
          </div>
        </form>
  )}

  CreateUser.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    checkUserExists: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object.isRequired,
    isLoading: React.PropTypes.bool.isRequired,
    invalid: React.PropTypes.bool.isRequired
}

export default CreateUser