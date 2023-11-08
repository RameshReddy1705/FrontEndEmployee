import axios from "axios";

const Emp_Base_Url='http://localhost:8080/emp02';

export const listEmployees=()=>{
    return axios.get(Emp_Base_Url)
};

export const createEmployee=(employee)=>{
    return axios.post(Emp_Base_Url,employee)
};

export const updateEmployee=(employeeId,employee)=>{
    return axios.put(Emp_Base_Url+'/'+employeeId,employee)
};