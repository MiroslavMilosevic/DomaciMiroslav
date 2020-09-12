import axios from 'axios'


export const getAllPast=()=>{

return axios.get('https://api.spacexdata.com/v3/launches/past')

}

export const getCompanyInfo=()=>{

    return axios.get('https://api.spacexdata.com/v3/info')
    
    }