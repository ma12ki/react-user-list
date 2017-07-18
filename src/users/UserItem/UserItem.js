import React from 'react';
import PropTypes from 'prop-types';

import { UserCheckbox } from '../UserCheckbox';
import './UserItem.css';

export const UserItem = ({ user }) => {
    return (
        <article className='UserItem'>
            <aside className='UserItem__chk'><UserCheckbox id={user.id} selected={user.selected} /></aside>
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
};

export default UserItem;
