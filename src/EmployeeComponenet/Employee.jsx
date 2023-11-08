import { useState } from 'react';
import './Employee.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInEmployee from './LogInEmployee';
import WelcomeEmployee from './WelcomeEmployee';
import ErrorEmployee from './ErrorEmployee';
import ListEmployee from './ListEmployee';
import HeaderEmployee from './HeaderEmployee';
import FooterEmployee from './FooterEmployee';
import LogOutEmployee from './LogOutEmployee copy';
import CreateEmp from './CreateEmp';
function Employee() {
    return (
      <div className="App">
        <HeaderEmployee/>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<LogInEmployee/>}></Route>
                <Route path='/login' element={<LogInEmployee/>}></Route>
                <Route path='/welcome'element={<WelcomeEmployee/>}></Route>
                <Route path='/*' element={<ErrorEmployee/>}></Route>
                <Route path='/list' element={<ListEmployee/>}></Route>
                <Route path='/logout' element={<LogOutEmployee/>}></Route>
                <Route path='/createEmp' element={<CreateEmp/>}></Route>
            </Routes>
        </BrowserRouter>
        <FooterEmployee/>
      </div>
    );
  }


  export default Employee;