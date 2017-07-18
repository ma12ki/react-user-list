import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectUser } from '../users.duck';
import './UserCheckbox.css';

export const UserCheckbox = ({ id, selected, toggleSelect }) => {
    return (
        <label className='UserCheckbox'>
            <input type='checkbox' checked={selected} onClick={() => toggleSelect(id)} />
            <span className='UserCheckbox__box'>
                &#x2714;
            </span>
        </label>
    );
};

UserCheckbox.propTypes = {
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    toggleSelect: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    toggleSelect: (id) => dispatch(selectUser(id)),
});

export default connect(undefined, mapDispatchToProps)(UserCheckbox);
