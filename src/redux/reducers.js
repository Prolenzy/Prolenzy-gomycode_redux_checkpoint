const initialState = {
    tasks: [],
    };

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        return {
            ...state,
            tasks: [...state.tasks, { ...action.payload, id: state.tasks.length + 1 }],
        };
        case 'UPDATE_TASK':
        return {
            ...state,
            tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
            ),
        };
        case 'DELETE_TASK':
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
        default:
        return state;
    }
    };

    export default reducer;
