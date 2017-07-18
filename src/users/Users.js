import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadUsersStart } from './users.duck';
import { SelectedCount } from './SelectedCount';
import { UserList } from './UserList';
import { ConfirmButton } from './ConfirmButton';
import { SelectedUsers } from './SelectedUsers';

export class Users extends React.PureComponent {
    static propTypes = {
        loadUsers: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        return (
            <div>
                <SelectedCount />
                <UserList />
                <ConfirmButton />
                <SelectedUsers />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadUsers: () => dispatch(loadUsersStart()),
});

export default connect(undefined, mapDispatchToProps)(Users);
