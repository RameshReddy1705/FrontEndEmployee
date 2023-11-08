import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInEmployee() {
    const[username, setUsername]= useState('Ramesh')
    function handleusername(e){
        setUsername(e.target.value)
        console.log(e.target.value);
    }
    const[password, setPassword]=useState('')
    function handlepassword(e){
        setPassword(e.target.value)
        console.log(e.target.value);
    }
    const[success, setSuccess]=useState(false)
    const[error, setError]=useState(false)
    const navigate=useNavigate();
    function handlelogin(){
        if(username==='Ramesh'&&password=='9705')
        {
            setSuccess(true)
            setError(false)
            navigate(`/welcome`)

            console.log('success');
        }
        else
        {
            setError(true)
            setSuccess(false)
            console.log('fail');
        }
    }
    function Errormessage(){
            if(error)
            {
                return <div className='successMessage'> Authentication Failed</div>
            }
            return null;
    }

    return (
      <div className="LogiForm">
        <Errormessage/>
        <div>
            <label>User Name</label>
            <input type="text" name="username" value={username} onChange={handleusername}/>
        </div>
        <div>
            <label>Pasword</label>
            <input type="password" name={password} onChange={handlepassword}/>
        </div>
        <div>
            <button onClick={handlelogin}>LogIn</button>
        </div>
        
      </div>
    );
  }
export default LogInEmployee