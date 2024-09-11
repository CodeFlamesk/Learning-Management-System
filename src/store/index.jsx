import { createStore } from 'redux';

// Ваш редуктор
const defaultState = {
    isLoggedIn: false,
    email: '',
};


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, isLoggedIn: true };
        case 'LOG_OUT':
            return { ...state, isLoggedIn: false };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

// Створення сховища
const store = createStore(reducer);

export default store;
