import Router from "./Router/Router"
import { createGlobalStyle } from "styled-components"
import { GlobalContext } from "./Contexts/GlobalContext"
import { useState, useEffect } from "react"
import axios from "axios"
import { ChakraProvider } from "@chakra-ui/react"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  
  }
` 

function App() {  

  const [pokemons, setPokemons] = useState([]) 

  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {      

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=99&offset=0`)
            
      setPokemons(response.data.results)                   

    } catch (error) {
      console.log(error)
    }
  }
  
  const [modalCatchIsOpen, setModalCatchIsOpen] = useState(false)

  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)

  const [activeScreen, setActiveScreen] = useState("HomePage")

  const capitalizeFirstLetter = (string) => {
      const capitalized = string.charAt(0).toUpperCase() + string.slice(1)
  
      return capitalized
    }

  const handleOpenModalCatch = () => {
      setModalCatchIsOpen(true)
    }
  
  const handleOpenModalDelete = () => {
      setModalDeleteIsOpen(true)
    } 

  const handleCloseModalCatch = () => {
      setModalCatchIsOpen(false)
    }   

  const handleCloseModalDelete = () => {
      setModalDeleteIsOpen(false)
    }   

  const addToPokedex = (pokemonToBeAdded) => {
    const newPokedex = [...pokedex]
    
    const pokemonFound = newPokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.name === pokemonToBeAdded.name)
    
    if(!pokemonFound){
      const newPokemon = {...pokemonToBeAdded}
          newPokedex.push(newPokemon)          
          handleOpenModalCatch()

    } else {
      alert(`${capitalizeFirstLetter(pokemonFound.name)} já foi capturado!`)
    }        
      setPokedex(newPokedex)           
    }  

    const deleteFromPokedex = (pokemonToBeDeleted) => {
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToBeDeleted.name
      )
      setPokedex(newPokedex) 
      handleOpenModalDelete()       
    }      
    
  const context = {
    pokemons,    
    pokedex, 
    setPokedex,
    addToPokedex,
    deleteFromPokedex,
    activeScreen,
    setActiveScreen,
    modalCatchIsOpen,
    handleCloseModalCatch,
    modalDeleteIsOpen,
    handleCloseModalDelete
  }  

  return (
    <GlobalContext.Provider value={context}> 
      <ChakraProvider>
        <GlobalStyle/>   
        <Router />   
      </ChakraProvider>   
    </GlobalContext.Provider>
  );
}

export default App
