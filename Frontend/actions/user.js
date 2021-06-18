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