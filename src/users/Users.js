import React from 'react';

import { SelectedCount } from './SelectedCount';
import { UserList } from './UserList';
import { ConfirmButton } from './ConfirmButton';
import { SelectedUsers } from './SelectedUsers';

export default () => {
    return (
        <div>
            <SelectedCount />
            <UserList />
            <ConfirmButton />
            <SelectedUsers />
        </div>
    );
};
