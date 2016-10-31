import React from 'react';
import classnames from 'classnames';
import map from 'lodash/map';
import { Link } from 'react-router';

const TableList = ({ collection }) => {
    const items = map(collection, (item, id) => {        
        return (
            <tr key={id}>
                <td><button className="btn-xs btn-primary"><Link to={{ pathname: `contacts/${item.id}`, query: `${item.id}` }} >View</Link></button></td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.email}</td>
                <td>{item.job_title}</td>
            </tr>
        );
    });

    return (
        <table className={classnames("table table-hover")}>
            <tbody>
                <tr>
                    <th>Action</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th>Job Title</th>
                </tr>
            {items}    
            </tbody>
        </table>
    );
}

TableList.propTypes = {
    collection: React.PropTypes.array.isRequired,
}

TableList.defaultProps = {
    type: "array"
}

export default TableList;