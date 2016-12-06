export function decrease_time(data) {
    return {
        type: 'DECREASE',
        data
    }
}

export function set_time(data) {
    return {
        type: 'SET',
        data
    }
}
