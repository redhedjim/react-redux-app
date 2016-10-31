import React from 'react';
import ContactInfo from './ContactInfo';

class SingleContactPage extends React.Component {    
    render() {
        return (
            <div>
                <ContactInfo id={ this.props.params.id } />
            </div>
        );
    }
}
export default SingleContactPage;