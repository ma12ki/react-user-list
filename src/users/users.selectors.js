const users = (state) => state.users;
export const list = (state) => users(state).list;
export const loading = (state) => users(state).loading;
export const error = (state) => users(state).error;
export const listCount = (state) => list(state).length;
export const selectedCount = (state) => users(state).filter((user) => user.selected).length;
