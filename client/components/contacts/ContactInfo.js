import React from 'react';
import { connect } from 'react-redux';
import { getContact } from '../../actions/contactActions';
import TextFieldGroup from '../common/TextFieldGroup';

class ContactInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log("contact info: ", props);
        
        this.state = {
            contact: {},
            errors: {},
            isLoading: false,
            id: props.id
        };
        
        this.props.getContact(this.state.id).then(
            (res) => {
                console.log(res.data.contact);
                this.setState({ contact: res.data.contact });
            },
            (err) => this.setState({ errors: err })
        )

    }
    render() {
        const { contact, errors, isLoading } = this.state;
        return (
            <div>
                {contact.first}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        prop: state.contact
    }
}
export default connect(mapStateToProps, { getContact })(ContactInfo);