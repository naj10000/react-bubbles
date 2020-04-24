import React from 'react';
import axios from 'axios';


export  function axiosWithAuth() {
    const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            authorization: token
        }, 

        baseURL: 'http://localhost:5000'
    }
       
    )
}
