import React from 'react'
import axios from 'axios';


export default function axiosWithAuth() {
    const token = JSON.parse(localStorage.getItem('token'))
    return axios.create({
        headers: {
            authorization: token
        }, 

        baseURL: 'http://localhost:5000'
    }
       
    )
}
