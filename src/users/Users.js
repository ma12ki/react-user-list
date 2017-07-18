import React from 'react';

import { SelectedCount } from './SelectedCount';
import { UserList } from './UserList';
import { ConfirmButton } from './ConfirmButton';

export default () => {
    return (
        <div>
            <SelectedCount />
            <UserList />
            <ConfirmButton />
        </div>
    );
};
