import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectUser } from '../users.duck';
import './UserItem.css';

export const UserItem = ({ user, toggleSelect }) => {
    return (
        <article className='UserItem'>
            <aside className='UserItem__chk'><input type='checkbox' checked={user.selected} onClick={() => toggleSelect(user.id)} /></aside>
            <header className='UserItem__name'>{user.name}</header>
            <div className='UserItem__email'>{user.email}</div>
        </article>
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
