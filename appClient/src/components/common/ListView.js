import React from 'react';
import classnames from 'classnames';

const ListView = ({ field, value, error, type  }) => {
    return (
        <div className={classnames("form-group", { 'has-error': error } )}>
            <table>
                
                <input 
                    value={value}
                    type={type}
                    name={field}
                    className="form-control"
                />
            {error && <span className="help-block">{ error }</span>}
            </table>
        </div>
    );
}

ListView.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
}

ListView.defaultProps = {
    type: 'text'
}

export default ListView;