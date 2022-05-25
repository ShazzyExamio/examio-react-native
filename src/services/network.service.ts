import axios from 'axios'
import { config } from '../config/config';


export const postRequest = async (path: string, body: Object, headers?: any) => {
    try {
           return axios.post(config.apiUrl + path, body, {headers: headers }).then(response => {
            if (response) {
                return response.data;
            }
            else {
                return false
            }
        })
    } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
    }
} 

  export const getRequest = (path: string, param: Object, headers: any):any => {
    try {
      return axios.get(config.apiUrl + path, { params: param , headers: headers}).then(response => {
            if (response) {
                return response;
            }
            else {
                return false
            }
        })
    } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
    }
} 

  export const putRequest = (path: string, body: Object, headers?: Object) => {
    try {
      return axios.put(config.apiUrl + path, body, headers).then(response => {
            if (response) {
                return response;
            }
            else {
                return false
            }
        })
    } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
    }
} 