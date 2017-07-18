import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    showSelected as showSelectedSelector,
    selectedUsers as selectedUsersSelector,
} from '../users.selectors';

export const SelectedUsers = ({ show, selectedUsers }) => {
    const list = show ? selectedUsers.map((user) => <div>{user.name}</div>) : '';
    return (
        <div>{list}</div>
    );
};

SelectedUsers.propTypes = {
    show: PropTypes.bool.isRequired,
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
    selectedUsers: selectedUsersSelector(state),
});

export default connect(mapStateToProps)(SelectedUsers);
