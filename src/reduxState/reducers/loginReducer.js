const reducer = (state = false, action) => {
    if(action.type==="set-Login"){
        return action.payload;
    }
    return state;
}

export default reducer;