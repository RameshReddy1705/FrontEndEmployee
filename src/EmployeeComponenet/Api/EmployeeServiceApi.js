import axios from "axios";

const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const retriveAll
                =()=>apiClient.get(`/emp02`)
                
export const retriveId
                =(id)=>apiClient.delete(`/empo2/${id}`)

export const createEmployee
                =()=>apiClient.post(`/empo2`)

