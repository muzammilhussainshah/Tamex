import ActionTypes from '../constant/constant';
const INITIAL_STATE = {
    isLoader: false,
    isError: "",
    currentUser: [],
    stats: "",
    profile: "",
    aboutus: "",
    taskdelivered: [],
    tasklist: "",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })
        case ActionTypes.ISLOADER:
            return ({
                ...state,
                isLoader: action.payload
            })
        case ActionTypes.ISERROR:
            return ({
                ...state,
                isError: action.payload
            })
        case ActionTypes.STATS:
            return ({
                ...state,
                stats: action.payload
            })
        case ActionTypes.ABOUTUS:
            return ({
                ...state,
                aboutus: action.payload
            })
        case ActionTypes.PROFILE:
            return ({
                ...state,
                profile: action.payload
            })
        case ActionTypes.TASKLIST:
            return ({
                ...state,
                tasklist: action.payload
            })
        case ActionTypes.TASKDELIVERED:
            return ({
                ...state,
                taskdelivered: action.payload
            })
        default:
            return state;
    }

}