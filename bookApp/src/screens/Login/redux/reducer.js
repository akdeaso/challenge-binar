const initialState = {
    // email: '',
    // password: '',
    name: "",
    token: ""
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'SET_EMAIL':
        //     return {
        //         ...state,
        //         email: action.payload,
        //     };

        // case 'SET_PASSWORD':
        //     return {
        //         ...state,
        //         password: action.payload,
        //     };

        case 'SET_NAME':
            return {
                ...state,
                name: action.data,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.data,
            };

        default:
            return state
    }
};