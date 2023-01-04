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
  
  const context = {
    pokemons: pokemons
  }  

  return (
    <GlobalContext.Provider value={context}> 
      <ChakraProvider>
        <GlobalStyle/>   
        <Router/>   
      </ChakraProvider>   
    </GlobalContext.Provider>
  );
}

export default App
