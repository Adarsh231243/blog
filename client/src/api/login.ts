import axios from 'axios';
import { serverBaseUrl } from '@/lib/data';

export async function login(){
    return axios({
        url: serverBaseUrl + '/auth/login',
        method: 'GET'
    })
}

export async function getUserData(token: string){
    return axios({
        url: serverBaseUrl + '/user/info',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}