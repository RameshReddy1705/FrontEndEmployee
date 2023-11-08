import axios from "axios";
import { useState } from "react";

function CreateEmp() {
    const[firstName, setFirstname] = useState()
    const[lastName, setLastname] = useState()
    const[email, setEmail] = useState()
    const data={firstName,lastName,email}

    // useEffect(
    //     ()=>refreshTodos(), []
    // )
    // function refreshTodos()
    // {
    //     retriveAllTodosForUsernameApi(username)
    //     .then(reponse=>{
    //         console.log(reponse.data)
    //         setTodos(reponse.data)
    //     }
    //     )
    //     .catch(error=>console.log(error))
    // }

    function handlesubmit()
    {
        axios.post('http://localhost:8080/emp02',data)
        // createEmployee()
        .then((reponse)=>
        {
            alert("Data submitted Successfully")
        })
        .catch((error)=>{
            alert("Invalid Data")
        })
    }
    return (
      <div className="container">
            <form>
                <input type="text" value={firstName} onChange={(e)=>{setFirstname(e.target.value)}} placeholder="Enter First Name"/>
                <input type="text" value={lastName} onChange={(e)=>{setLastname(e.target.value)}} placeholder="Enter Last Name"/>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email Id"/>
                <button onClick={handlesubmit}>Submit</button>
            </form>
      </div>
    );
  }
  
  export default CreateEmp;