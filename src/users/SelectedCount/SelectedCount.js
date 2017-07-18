import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    selectedCount as selectedCountSelector,
    listCount as totalCountSelector,
} from '../users.selectors';

export const SelectedCount = ({ selectedCount, totalCount }) => {
    const text = selectedCount ? `${selectedCount} of ${totalCount} selected` : '';
    return (
        <div>{text}</div>
    );
};

SelectedCount.propTypes = {
    selectedCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
    selectedCount: selectedCountSelector(state),
    totalCount: totalCountSelector(state),
});

export default connect(mapStateToProps)(SelectedCount);
