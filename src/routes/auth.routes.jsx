import {Routes, Route } from 'react-router-dom'


import { SingIn } from '../pages/singIn'
import { SingUp } from '../pages/singUP'


export function AuthRoutes(){
  return (
    <Routes>
      <Route path="/" element={<SingIn/>}/>
      <Route path="/register" element={<SingUp/>}/>
    </Routes>
  )
}