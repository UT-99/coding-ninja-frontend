import React from 'react';
import Logo from './Logo';
import Courses from './Courses';
import Scholarship from './Scholarship';
import Community from './Community';
import Practise from './Practise';
import Home from './Home';
import EnrollNow from './EnrollNow';
import Login from './Login';
import CarrerCamp from './CarrerCamp';

import { Routes, Route } from 'react-router-dom';

const Routing = () => {
  return (
  
        <Routes>
            <Route path = '/' element={<Home/>}></Route>
            <Route path = '/logo' element={<Logo/>}></Route>
            <Route path = '/courses' element={<Courses/>}></Route>
            <Route path = '/scholarship' element={<Scholarship/>}></Route>
            <Route path = '/community' element={<Community/>}></Route>
            <Route path = '/practise' element={<Practise/>}></Route>
            <Route path = '/login' element={<Login/>}></Route>
            <Route path = '/enrollNow' element={<EnrollNow/>}></Route>
            <Route path = '/carrercamp' element={<CarrerCamp/>}></Route>
        </Routes>


    
  )
}

export default Routing