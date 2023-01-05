import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "../Pages/HomePage/HomePage"
import Pokedex from "../Pages/Pokedex/Pokedex"
import DetailsPage from "../Pages/DetailsPage/DetailsPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"

function Router () {

    const [pokedex, setPokedex] = useState([])

    const [activeScreen, setActiveScreen] = useState("HomePage")

    const capitalizeFirstLetter = (string) => {
      const capitalized = string.charAt(0).toUpperCase() + string.slice(1)
  
      return capitalized
    }

    const addToPokedex = (pokemonToBeAdded) => {
        const newPokedex = [...pokedex]
    
        const pokemonFound = newPokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.name === pokemonToBeAdded.name)
    
        if(!pokemonFound){
          const newPokemon = {...pokemonToBeAdded}
          newPokedex.push(newPokemon)
          alert("Gotcha! O Pokémon foi adicionado a sua Pokédex")
        } else {
          alert(`${capitalizeFirstLetter(pokemonFound.name)} já foi capturado!`)
        }        
        setPokedex(newPokedex)    
      }  

    const deleteFromPokedex = (pokemonToBeDeleted) => {
      const newPokedex = [...pokedex]
      
      const foundIndex = newPokedex.findIndex(
        (pokemonInPokedex) => pokemonInPokedex.id === pokemonToBeDeleted.id
      )
      
      alert("Oh, no! O Pokémon foi removido da sua Pokédex")
      newPokedex.splice(foundIndex, 1)
      setPokedex(newPokedex)
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage addToPokedex={addToPokedex} activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}/>
                <Route path="/pokedex" element={<Pokedex pokedex={pokedex} deleteFromPokedex={deleteFromPokedex} activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}/>
                <Route path="/pokemon/:pokemonId" element={<DetailsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router