const carReducerActionType = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}
const initialArr = () => [];

const actions = {
    ADD: (value) => ({type: carReducerActionType.ADD, payload: value}),
    DELETE_BY_ID: (id) => ({type: carReducerActionType.DELETE_BY_ID, payload: id})
};

const reducerFunc = (state, action) => {
    switch (action.type) {
        case carReducerActionType.ADD:
            const slice = state.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0
            return [state, {id, ...action.payload}]

        case carReducerActionType.DELETE_BY_ID:
            const findIndex = state.findIndex(data => data.id === action.payload);
            state.splice(findIndex, 1)
            return [...state]
    }

};
export {
    reducerFunc,
    actions,
    initialArr
};