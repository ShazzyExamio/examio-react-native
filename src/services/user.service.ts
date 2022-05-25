import { config } from '../config/config';
import axios from 'axios'


export const loginFunction = async (email: string, password: string): Promise<Boolean> => {
    try
    {
        return await axios.post(config.apiUrl + '/login/user',
        {
            email: email,
            password: password
        }).then(response => {
            if (response.data.token) {
                //store user#
                console.log(response.data.user)
                return true;
            }
            else {
                return false;
            }
        });
    }
    catch(error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return false;
          } else {
            console.log('unexpected error: ', error);
            return false;
          }
    }
  } 

  export const logout = () => {
    // remove user from local storage to log user out
  }