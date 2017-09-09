const initState = {
    todos: [{
            id: 1,
            name: 'Render static UI',
            isComplete: true
        },
        {
            id: 2,
            name: 'Create initial state',
            isComplete: false
        },
        {
            id: 3,
            name: 'Render based on state',
            isComplete: false
        }
    ],
    currentTodo: ''
}

export const actions = {
    TODO_ADD: 'TODO_ADD',
    CURRENT_UPDATE: 'CURRENT_UPDATE'
}
export const updateCurrent = (val) => {
    return {
        type: actions.CURRENT_UPDATE,
        payload: val
    }
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return { ...state,
                todos: state.todos.concat(action.payload)
            }
            break;
        case 'CURRENT_UPDATE':
            return { ...state,
                currentTodo: action.payload
            }
        default:
            return state;
    }

}