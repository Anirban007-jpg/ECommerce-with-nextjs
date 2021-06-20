import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie'
import Router from 'next/router'
import { handleResponse } from './auth';

export const getspecuser = userId => {
    return fetch(`${API}/user/${userId}`, {
        method: 'GET'
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
}; 

export const getProfile = (token) => {
    return fetch(`${API}/profile`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        handleResponse(response);
        return response.json();
    }).catch(err => console.log(err));
}

export const update = (token, formdata) => {
    return fetch(`${API}/user/profile`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: formdata
    }).then(response => { 
        handleResponse(response);
        return response.json();
    }).catch(err => console.log(err))
}