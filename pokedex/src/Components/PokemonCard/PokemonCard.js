import React, { useContext, useEffect, useState } from "react"
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, DeleteButton, Pokemon } from './styles'
import pokeball from "../../Assets/pngwing 2.png"
import { getTypes } from "../../Utils/ReturnPokemonType"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Router/coordinator"
import { Link } from '@chakra-ui/react'
import { GlobalContext } from "../../Contexts/GlobalContext"

function PokemonCard (props) {

  const navigate = useNavigate()    

  const context = useContext(GlobalContext)

  const [pokemonId, setPokemonId] = useState("")

  const [pokemonTypes, setPokemonTypes] = useState([])

  const [pokemonImage, setPokemonImage] = useState("")  
  
  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = async () => {
    try {

      const response = await axios.get(props.pokemon.url)    
        
      setPokemonId(response.data.id)
      setPokemonTypes(response.data.types)               
      setPokemonImage(response.data.sprites.front_default)         

    } catch (error) {
      console.log(error)
    }
  }

  const capitalizeFirstLetter = (string) => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1)

    return capitalized
  }   
  
  return (
    <>         
    <Container color={pokemonTypes && pokemonTypes[0]}>            
      <div>
        <PokemonNumber>#{pokemonId}</PokemonNumber>
        <PokemonName>{capitalizeFirstLetter(props.pokemon.name)}</PokemonName>
        <TypesContainer>
            {pokemonTypes.map((type) => {              
                return <PokemonType src={getTypes(type.type.name)} alt='' />
            })}
        </TypesContainer>
        <Link onClick={() => goToDetails(navigate, pokemonId)}>Detalhes</Link>
      </div>
      <div>
        <Pokemon src={pokemonImage} alt="" />        
        {context.activeScreen === "HomePage" ? <CatchButton onClick={() => context.addToPokedex(props.pokemon)}>Capturar!</CatchButton> : <DeleteButton onClick={() => context.deleteFromPokedex(props.pokemon)}>Excluir</DeleteButton>}
               
      </div>
      <Pokeball src={pokeball} alt="pokeball" />         
    </Container>
  </>  
  );
};

export default PokemonCard;