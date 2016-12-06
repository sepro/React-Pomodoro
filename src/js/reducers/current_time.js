
function current_time(state = 0, action) {
    switch(action.type) {
        case 'DECREASE' :
            if (state - action.data > 0) {
                return state - action.data;
            }
            return 0;
        case 'SET' :
            return action.data;
        default:
            return state;
    }
}

export default current_time;