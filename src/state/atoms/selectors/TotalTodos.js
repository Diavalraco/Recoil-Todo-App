import { selector } from 'recoil';


export const totalTodos= selector({
    key: 'totalTodos',
    get: ({ get }) => {
        const todos = get(todoState);
        return todos.length;
    },
});
