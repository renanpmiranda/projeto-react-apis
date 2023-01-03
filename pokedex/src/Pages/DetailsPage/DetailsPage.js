import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderDetails from '../../Components/Headers/HeaderDetails'
import { CardContainer, Heading } from './styles'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import pokeball from "../../Assets/pngwing 2.png"
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, Pokemon } from './styles'
import { getTypes } from "../../Utils/ReturnPokemonType"

function DetailsPage() {  

  const params = useParams()

  const [pokemonId, setPokemonId] = useState("")

  const [pokemonTypes, setPokemonTypes] = useState([])

  const [pokemonImage, setPokemonImage] = useState("")

  const [pokemonName, setPokemonName] = useState("")

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = async () => {
    try {

      const response = await axios.get(`${BASE_URL}/pokemon/${params.pokemonId}`)    
      
      setPokemonId(response.data.id)
      setPokemonTypes(response.data.types)               
      setPokemonImage(response.data.sprites.front_default)  
      setPokemonName(response.data.name)     

    } catch (error) {
      console.log(error)
    }
  }  
  
  return (
    <>
      <HeaderDetails/>
      <Heading>Detalhes</Heading> 
      <CardContainer>     
        <Container color={pokemonTypes && pokemonTypes[0]}>            
            <div>
              <PokemonNumber>#{pokemonId}</PokemonNumber>
              <PokemonName>{pokemonName}</PokemonName>
              <TypesContainer>
                  {pokemonTypes.map((type) => {              
                      return <PokemonType src={getTypes(type.type.name)} alt='' />
                  })}
              </TypesContainer>            
            </div>
            <div>
              <Pokemon src={pokemonImage} alt="" />
            </div>
            <Pokeball src={pokeball} alt="pokeball" />         
          </Container>
        </CardContainer>     
    </>
  )
}

export default DetailsPage