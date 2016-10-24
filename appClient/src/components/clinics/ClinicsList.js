import React from 'react';
import { connect } from 'react-redux';
import { getAllClinics } from '../../actions/clinicActions';
import map from 'lodash/map';
// import ListView from '../common/ListView';

class ClinicsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clinics: {},
			errors: {}
		};
		
		this.props.getAllClinics().then(
				(res) => { 
					if (res.data.clinics) {
						this.setState({ clinics: res.data.clinics });
					} 
				},
				(err) => this.setState({errors: err.response.data.errors })
		);
	}

	render() {
		const clinics = map(this.state.clinics, (clinic, id) => {
			return <li key={id}>{clinic.name}, {clinic.regional_director}</li>
		});

		return (
			<div>
				{this.state.clinics.length ? <ul>{clinics}</ul> : 'There are no clinics'}
			</div>
		);
	}
}
function mapStateToProps(state){
    return {
        clinics: state.clinics
    }
}
export default connect(mapStateToProps, { getAllClinics })(ClinicsList);