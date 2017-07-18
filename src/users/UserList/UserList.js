import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { list as userListSelector } from '../users.selectors';

export const UserList = ({ users }) => {
    const userItems = users.map((user) => {
        return (
            <div key={user.id}>
                {user.id} {user.name} {user.email}
            </div>
        );
    });

    return (<div>{userItems}</div>);
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            email: PropTypes.string,
            selected: PropTypes.bool,
        })
    ).isRequired,
};

const mapStateToProps = (state) => ({
    users: userListSelector(state),
});

export default connect(mapStateToProps)(UserList);
