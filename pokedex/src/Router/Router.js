import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "../Pages/HomePage/HomePage"
import Pokedex from "../Pages/Pokedex/Pokedex"
import DetailsPage from "../Pages/DetailsPage/DetailsPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"

function Router () {  
   
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pokedex" element={<Pokedex />}/>
                <Route path="/pokemon/:pokemonId" element={<DetailsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router