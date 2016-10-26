import React from 'react';
import UsersForm from './UsersForm';
import CreateUser from './CreateUser';
const UsersPage = ()=>{
    return (
        <div className="row">   
            <div className="col-md-4">
                <UsersForm />                
            </div>
        </div>
    );
}

export default UsersPage;