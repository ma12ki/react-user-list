import { http } from '../utils';

const userSort = (a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
};

export const getUsers$ = () => {
    return http.get$('users')
        .map((users) => users.map((user) => {
                user.selected = false;
                return user;
            })
            .sort(userSort));
};
