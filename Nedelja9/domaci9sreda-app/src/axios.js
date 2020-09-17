import axios from 'axios'
export function getData(){

    return axios.get('https://reqres.in/api/users?page=1')
}