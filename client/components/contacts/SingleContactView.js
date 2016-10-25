import React from 'react';
import { connect } from 'react-redux';
import { getSingleContact } from '../../actions/contactActions';

class SingleContactView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            errors: {},
            isLoading: false
        };
        console.log("fired singlecontactview")
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.getSingleContact(this.state);
    }

    render() {
        const { title, errors, isLoading } = this.state;

        return (
            <div>{contacts}</div>
        );
    }
}

SingleContactView.propTypes = {
    getSingleContact: React.PropTypes.func.isRequired
}

export default connect(null, { getSingleContact })(SingleContactView);