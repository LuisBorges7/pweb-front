import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import VehicleForm from "./pages/VehicleForm"
import Login from "./pages/Login"
import ChecklistForm from "./pages/ChecklistForm"
import EmployeeRegistrationForm from "./pages/EmployeeRegistrationForm"
import ReservationForm from "./pages/ReservationForm"
import ClientForm from "./pages/ClientForm"
import ProviderRegistrationForm from "./pages/ProviderRegistrationForm"
import CarList from "./pages/CarList"
import pgAdmin from "./pages/pgAdmin"



export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/vehicle-create" element={<VehicleForm/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/client-create" element={<ClientForm/>} />
                <Route exact path="/checklist" element={<ChecklistForm/>} />
                <Route exact path="/employee-register" element={<EmployeeRegistrationForm/>} />                
                <Route exact path="/provider-register" element={<ProviderRegistrationForm/>} />                
                <Route exact path="/reservation" element={<ReservationForm/>} />
                <Route exact path="/carlist" element={<CarList/>} />
                <Route exact path="/pgAdmin" element={<pgAdmin/>} />
            </Routes>
            
        </BrowserRouter>
    )

}