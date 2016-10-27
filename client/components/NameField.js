import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';

class NameField extends React.Component {
  render() {
    return (
      <div>
        <TextFieldGroup
            field="name"
            label="Name"
            name="name"
            value={name}
            onChange={this.onChange}
            error={errors.name}
        />
      </div>
    )
  }
}

export default NameField;