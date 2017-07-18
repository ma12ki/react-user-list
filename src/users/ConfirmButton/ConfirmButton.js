import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { confirmSelection } from '../users.duck';

export const ConfirmButton = ({ confirm }) => {
    return (
        <button type='button' onClick={confirm}>Confirm</button>
    );
};

ConfirmButton.propTypes = {
    confirm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    confirm: () => dispatch(confirmSelection()),
});

export default connect(undefined, mapDispatchToProps)(ConfirmButton);
