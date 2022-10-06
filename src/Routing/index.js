import Sign  from '../Pages/Login'
import Register  from '../Pages/Register'
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Tables from "../Pages/GameRoom";
import Header from "../Components/Header";
import {IndexPage} from "../Pages/Index";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<IndexPage/>}></Route>
                <Route path="/sign" element={<Sign/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/tables" element={<Tables/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter