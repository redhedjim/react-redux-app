import React from 'react';
import { connect } from 'react-redux';
import { getAllContacts } from '../../actions/contactActions';
import map from 'lodash/map';
import TableList from '../common/TableList';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            errors: {},
            isLoading: false
        };
        this.props.getAllContacts().then(
            (res) => {
                this.setState({ contacts: res.data.contacts });
            },
            (err) => this.setState({ errors: err })
        )
    }

    render() {
        const { errors, isLoading, contacts } = this.state;     
        return (
            <div>
                <h1>Contacts</h1>
                {contacts.length ? <TableList collection={contacts} /> : <h3>There are no contacts yet.</h3> }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        contacts: state.contacts
    }
}

ContactList.propTypes = {
    getAllContacts: React.PropTypes.func.isRequired,
    contacts: React.PropTypes.array
}

export default connect(mapStateToProps, { getAllContacts })(ContactList);