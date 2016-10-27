import React from 'react';
import UserForm from './UserForm';

class UserPage extends React.Component {
    render() {
        return (
            <div className="row">   
                <div className="col-md-4">
                    <UserForm />
                </div>
            </div>
        );
    }
}

export default UserPage;