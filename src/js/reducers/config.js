
function config(state = {pomodoro: 1500000, short: 300000, long: 600000}, action) {
    switch(action.type) {
        case 'SET_POMODORO' :
            return {...state, pomodoro: action.data};
        case 'SET_SHORT_BREAK' :
            return {...state, short: action.data};
        case 'SET_LONG_BREAK' :
            return {...state, long: action.data};
        default:
            return state;
    }
}

export default config;