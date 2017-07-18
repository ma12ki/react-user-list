import { combineEpics } from 'redux-observable';

import { usersEpics } from './users';

export const rootEpic = combineEpics(
    usersEpics,
);
