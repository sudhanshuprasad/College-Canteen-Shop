const reducer = (state = false, action) => {
    if(action.type==="set-Theme-Dark"){
        localStorage.setItem('darkTheme', Boolean(action.payload));
        return action.payload;
    }
    return state;
}

export default reducer;