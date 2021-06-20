import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie'
import Router from 'next/router'

export const handleResponse = response => {
    if (response.status === 401) {
        logout(() => {
            Router.push({
                pathname: '/login',
                query : {
                    message : 'Your session has expired. Please Log in again'
                }
            })
        })
    }
}

export const loginWithGoogle = user => {
    return fetch(`${API}/google-login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}; 


export const register = (user) => {
    return fetch(`${API}/register`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(user)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const login = user => {
    return fetch(`${API}/login`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const logout = (next) => {
    removeCookie('token');
    removeLocalStorage('user');
    next();

    return fetch(`${API}/logout`, {
        method: "GET"
    }).then(response => {
        console.log("signout success");
    }).catch(err => {
        console.log(err);
    })
}

// helper function

// helper function 1 : setting the cookie
export const setCookie = (key, value) => {
    // checking if we are on client side or not
    if (process.browser){
        cookie.set(key, value, {
            expires: 1
        });
    }
}

// helper function 2: removing the cookie
export const removeCookie = (key) => {
    if (process.browser){
        cookie.remove(key, { expires: 1});
    }
}

// helper function 3: Getting the cookie value
export const getCookie = (key) => {
    if (process.browser){
        return cookie.get(key, { expires: 1});
    }
}

// helper function 4: Setting value in Local storage
export const setLocalStorage = (key, value) => {
    if (process.browser){
        localStorage.setItem(key, JSON.stringify(value));
    }
}

// helper function 5: Removing value in local localStorage
export const removeLocalStorage = (key) => {
    if (process.browser){
        localStorage.removeItem(key);
    }
}

// authenticate user by passing data and token to setLocalStorage
export const authenticate = (data,next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
}

// function to get all details from local storage
export const isAuth = () => {
    if (process.browser){
        const isCookiepresent = getCookie('token');
         // Step 1 : check whether cookie is present in localstorage or not
        if (isCookiepresent){
            // Step 2 : check whether user present in localstorage 
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'));
            }else {
                return false;
            }
        }
    }else {
        return false;
    }
}

export const updateUser = (user,next) => {
    if(process.browser){
        if(localStorage.getItem('user')){
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }else{
            return;
        }
    }else {
        return false;
    }
}


export const forgotPassword = email => {
    return fetch(`${API}/forgot-password`, {
        method: 'PUT',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(email)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}



export const resetPassword = resetInfo => {
    return fetch(`${API}/reset-password`, {
        method: 'PUT',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(resetInfo)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}
