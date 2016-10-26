import React from 'react'
import { connect } from 'react-redux'
// import { getAllUsers, createUser } from '../../actions/usersActions';
 
const CreateUser = ({createUser,onCreateUser})=>{
  let txtUsername, txtEmail, txtPassword, txtTimeZone;
    return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!txtEmail.value.trim()&&!txtUsername.value.trim()&&!txtPassword.value.trim&&!txtTimeZone.value.trim) {
          return
        }

        createUser({
          username: txtUsername.value,
          email: txtEmail.value,
          password: txtPassword.value,
          passwordConfirmation: txtPassword.value,
          timezone: txtTimeZone.value
        }).then(res =>{
          console.log(res);
          onCreateUser(
          txtUsername.value,
          txtEmail.value
          )
          txtUsername.value = ''
          txtEmail.value = ''
          txtPassword.value = ''
          txtTimeZone.value = ''
        }).catch(console.log('Cannot create user.')) ;
      }}>
        <input ref={node => {
          txtUsername = node
        }} />
        <input ref={node => {
          txtEmail = node
        }} />
        <input ref={node => {
          txtPassword = node
        }} />
        <input ref={node => {
          txtTimeZone = node
        }} />
        <button type="submit" >
          Create User
        </button>
      </form>
    </div>
  )}
  
  CreateUser.propTypes = {
    onCreateUser: React.PropTypes.func.isRequired,
    createUser: React.PropTypes.func.isRequired
}


export default CreateUser