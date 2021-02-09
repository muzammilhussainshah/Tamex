import ActionTypes from '../constant/constant';
import axios from 'axios';
import BaseUrl from '../../common/BaseUrl';
import { Actions } from 'react-native-router-flux';

export const _loading = (bol) => {
    return dispatch => {
        dispatch({ type: ActionTypes.ISLOADER, payload: bol });
    }
}

export function _error(err, time) {
    return dispatch => {
        dispatch({ type: ActionTypes.ISERROR, payload: err });
        setTimeout(() => {
            dispatch({ type: ActionTypes.ISERROR, payload: "" });
        }, time ? time : 3000)
    }
}

export const _checkIsEmptyObj = (obj) => {
    for (var key in obj) {
        if (!obj[key]) {
            return key
        }
    }
}
// *********authentication*********
// *********authentication*********
// *********authentication*********
const _validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const _login = (phoneNumber, password, dialCodeState) => {
    return async (dispatch) => {
        if (_checkIsEmptyObj({ phoneNumber, password, })) {
            dispatch(_error(`${_checkIsEmptyObj({ phoneNumber, password, })} is required.`));
        }
        else {
            dispatch(_loading(true))
            try {
                const option = {
                    method: 'POST',
                    url: `${BaseUrl}user/login`,
                    data: {
                        "username": phoneNumber,
                        "password": password,
                        "pushtoken": "c92fd8c9608549b816990b789c220c1a"
                    }
                };
                const resp = await axios(option);
                if (resp.data.success === false) {
                    dispatch(_error(resp.data.message));
                }
                else {
                    console.log(resp.data.data.token)
                    const stat = await getStat(resp.data.data.token);
                    const profile = await getProfile(resp.data.data.token);
                    const aboutus = await getAboutus(resp.data.data.token);
                    // const status = await getStatus(resp.data.data.token);
                    dispatch({ type: ActionTypes.ABOUTUS, payload: aboutus });
                    dispatch({ type: ActionTypes.PROFILE, payload: profile });
                    dispatch({ type: ActionTypes.STATS, payload: stat });
                    // dispatch({ type: ActionTypes.STATUS, payload: stat });
                    dispatch({ type: ActionTypes.CURRENTUSER, payload: resp.data });
                    Actions.Home();
                }
                dispatch(_loading(false));
            }
            catch (err) {
                dispatch(_loading(false));
                dispatch(_error(err.response.data.errors[0]));
                console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
            }
        }
    }
}
export const _tasklist = (currentUser) => {
    return async (dispatch) => {
        // console.log(currentUser.data.token)

        dispatch(_loading(true))
        try {
            const option = {
                method: 'POST',
                url: `${BaseUrl}task/tasklist`,
                data: {
                    token: currentUser.data.token,
                    "date": Date.now()
                }
            };
            const resp = await axios(option);
            if (resp.data.success === false) {
                // console.log(resp.data)
                dispatch(_error(resp.data.message));
            }
            else {
                // console.log(resp.data)

                dispatch({ type: ActionTypes.TASKLIST, payload: resp.data.data.tasks });
                // console.log(resp.data.data.tasks)
                // dispatch({ type: ActionTypes.CURRENTUSER, payload: resp.data });
            }
            dispatch(_loading(false));
        }
        catch (err) {
            dispatch(_loading(false));
            dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _TASKLIST", JSON.parse(JSON.stringify(err.message)));
        }

    }
}

export const _taskdelivered = (lati, long, taskId, textArea, securityCode, currentUser,lastDigit) => {
    // console.log(currentUser.data.token,)
    // console.log(taskIdh, 'awb', "14362877151562")
    // console.log(lati.toString(), 'lati', "24.25123") 
    // console.log(securityCode, "code", "4444")
    // console.log(long.toString(), "long", "80.25123")
    // console.log(textArea, 'note', "ID:1252154228 ALI AHAMED")
    return async (dispatch) => {
        if (_checkIsEmptyObj({ textArea, securityCode, lastDigit})) {
            dispatch(_error(`${_checkIsEmptyObj({ textArea, securityCode,lastDigit })} is required.`));
        }
        else {

            dispatch(_loading(true))
            try {
                const option = {
                    method: 'POST',
                    url: `${BaseUrl}task/successful`,
                    data: {
                        token: currentUser.data.token,
                        awb: taskId,
                        lati: lati.toString(),
                        lock: securityCode,
                        long: long.toString(),
                        note: textArea,
                        
                    }
                };
                const resp = await axios(option);
                console.log(resp.data) 
                if (resp.data.success === false) {
                    console.log(resp.data.message)
                    dispatch(_error(resp.data.message));
                }
                else { 
                    dispatch({ type: ActionTypes.TASKDELIVERED, payload: resp.data });
                }
                dispatch(_loading(false));
                Actions.Home()
            }
            catch (err) {
                dispatch(_loading(false));
                // dispatch(_error(err.response.data.errors[0]));
                console.log(err.response, "error from _TASKLIST", JSON.parse(JSON.stringify(err.message)));
            }
        }

    }
}
const getStat = async (token) => {
    try {
        const option = {
            method: 'POST',
            url: `${BaseUrl}user/stat`,
            data: {
                token: token,
            }
        };
        const resp = await axios(option);
        // console.log(resp.data)
        return resp.data.data
    }
    catch (err) {
        console.log(err.response, "error from getStat",);
    }
}
const getAboutus = async (token) => {
    try {
        const option = {
            method: 'POST',
            url: `${BaseUrl}user/aboutus`,
            data: {
                token: token,
            }
        };
        const resp = await axios(option);
        return resp.data.data
    }
    catch (err) {
        console.log(err.response, "error from getAboutus",);
    }
}

const getTask = async (token) => {
    try {
        const option = {
            method: 'POST',
            url: `${BaseUrl}task/task`,
            data: {
                token: token,
            }
        };
        const resp = await axios(option);
        return resp.data.data
    }
    catch (err) {
        console.log(err.response, "error from getTask",);
    }
}

const getProfile = async (token) => {
    try {
        const option = {
            method: 'POST',
            url: `${BaseUrl}user/profile`,
            data: {
                token: token,
            }
        };
        const resp = await axios(option);
        return resp.data.data
    }
    catch (err) {
        console.log(err.response, "error from getProfile",);
    }
}

export const _logout = (currentUser) => {
    return async (dispatch) => {
        dispatch(_loading(true))
        try {
            const option = {
                method: 'POST',
                url: `${BaseUrl}user/logout`,
                data: {
                    token: currentUser.data.token,
                }
            };
            const resp = await axios(option);
            if (resp.data.success === false) {
                dispatch(_error(resp.data.message));
            }
            else {
                Actions.LoginScreen()
                dispatch({ type: ActionTypes.CURRENTUSER, payload: "" });
            }
            dispatch(_loading(false));
        }
        catch (err) {
            dispatch(_loading(false));
            dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _logout", JSON.parse(JSON.stringify(err.message)));
        }
    }
}

// *********authentication*********
// *********authentication*********
// *********authentication*********

