import axios from 'axios'
import React, { useEffect, useState } from 'react'

const List = () => {
    let[content,setcontent]=useState([ ])
    useEffect(()=>
    {
        axios.get(`http://localhost:8080/emp02`)
        .then((res)=>
        {
            setcontent(res.data)
            console.log(res.data);
        }).catch((err)=>
        {
     console.log(`not loading`);
        })
    },[])
  return (
    <div>
      {
        content.map((x)=>
        {
            return(
               <div>
                 <table>
            <tr>
              <th colSpan="2">USER ID:{x.id}</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>:{x.firstname}</td>
            </tr>
            <tr>
              <td>phone </td>
              <td>:{x.lastname}</td>
            </tr>
            <tr>
              <td>Email </td>
              <td>:{x.email}</td>
            </tr>
            
            </table>
               </div>
            )
        })
      }
    </div>
  )
}

export default List
