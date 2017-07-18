import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectUser } from '../users.duck';

export const UserItem = ({ user, toggleSelect }) => {
    return (
        <div>
            <input type='checkbox' checked={user.selected} onClick={() => toggleSelect(user.id)} />
            <h4>{user.name}</h4>
            <code>{user.email}</code>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        selected: PropTypes.bool,
    }).isRequired,
    toggleSelect: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    toggleSelect: (id) => dispatch(selectUser(id)),
});

export default connect(undefined, mapDispatchToProps)(UserItem);
