import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.getContacts(this.state);
    }

    render() {
        const { title, errors, isLoading } = this.state;

        return (
            <div>{contacts}</div>
        );
    }
}

ContactList.propTypes = {
    getContacts: React.PropTypes.func.isRequired
}

export default connect(null, { getContacts })(ContactList);