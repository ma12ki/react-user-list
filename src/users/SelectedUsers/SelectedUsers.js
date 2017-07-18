import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    showSelected as showSelectedSelector,
    selectedUsers as selectedUsersSelector,
    selectedCount as selectedCountSelector,
} from '../users.selectors';

export const SelectedUsers = ({ show, selectedCount, selectedUsers }) => {
    if (!(show && selectedCount)) {
        return <i />;
    }
    const list = selectedUsers.map((user) => <div key={user.id}>{user.name}</div>);
    return (
        <div>
            <h4>Exquisite choice!</h4>
            {list}
        </div>
    );
};

SelectedUsers.propTypes = {
    show: PropTypes.bool.isRequired,
    selectedCount: PropTypes.number.isRequired,
    selectedUsers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            email: PropTypes.string,
            selected: PropTypes.bool,
        })
    ).isRequired,
};

const mapStateToProps = (state) => ({
    show: showSelectedSelector(state),
    selectedCount: selectedCountSelector(state),
    selectedUsers: selectedUsersSelector(state),
});

export default connect(mapStateToProps)(SelectedUsers);
