import ActionTypes from '../constant/constant';
const INITIAL_STATE = {
    isLoader: false,
    isError: "",
    topicList:[],
    currentUser: [],
    freePotatoes: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case ActionTypes.TOPICLIST:
            return ({
                ...state,
                topicList: action.payload
            })
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })
        case ActionTypes.FREEPOTATOES:
            return ({
                ...state,
                freePotatoes: action.payload
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
        default:
            return state;
    }

}