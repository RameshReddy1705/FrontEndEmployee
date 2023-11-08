import { useEffect, useState } from "react";
import { listEmployees } from "./ServiceApi";

function ListEmployee02() {
     const [employee, setEmployees] = useState([])
     useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="container">
            <h2 className = "text-center">List Employees</h2>
             <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map(
                            employee=>(
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
  }
  
  export default ListEmployee02;