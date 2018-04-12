import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.CHANGE_AUTH:
            return {...state, auth: action.payload};
        default:
            return state;
    }
}
