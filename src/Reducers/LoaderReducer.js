const LoaderReducer = (state = false, action) => {
    switch (action.type) {
        case "StartLoading": {
            return true;
        }
        case "EndLoading": {
            return false;
        }
        default: {
            return state;
        }

    }
}
export default LoaderReducer;