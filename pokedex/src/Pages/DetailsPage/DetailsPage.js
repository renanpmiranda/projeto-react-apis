import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderDetails from '../../Components/Headers/HeaderDetails'
import { CardContainer, Heading, Move, MovesContainer, StatsContainer, Titles, FinalImageContainer, FinalImage, Stats, StatValues, ValuesContainer } from './styles'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import pokeball from "../../Assets/pngwing 2.png"
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, PokemonImage, ImagesContainer, InfoMovesContainer } from './styles'
import { getTypes } from "../../Utils/ReturnPokemonType"
import { Progress } from "@chakra-ui/react"

function DetailsPage() {  

  const params = useParams()

  const [pokemonId, setPokemonId] = useState("")

  const [pokemonTypes, setPokemonTypes] = useState([])

  const [pokemonImage, setPokemonImage] = useState("")

  const [pokemonName, setPokemonName] = useState("")

  const [pokemonBackImage, setPokemonBackImage] = useState("")

  const [moves, setMoves] = useState([])

  const [finalImage, setFinalImage] = useState("")

  const [stats, setStats] = useState([])

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = async () => {
    try {

      const response = await axios.get(`${BASE_URL}/pokemon/${params.pokemonId}`)    
      console.log(response)
      setPokemonId(response.data.id)
      setPokemonTypes(response.data.types)               
      setPokemonImage(response.data.sprites.front_default)  
      setPokemonName(response.data.name)
      setPokemonBackImage(response.data.sprites.back_default)
      setMoves(response.data.moves.slice(0,4))     
      setFinalImage(response.data.sprites.other.home.front_default)
      setStats(response.data.stats)

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
      <HeaderDetails/>
      <Heading>Detalhes</Heading> 
      <CardContainer>     
        <Container color={pokemonTypes && pokemonTypes[0]}> 
          <ImagesContainer>
            <PokemonImage src={pokemonImage} alt=''/> 
            <PokemonImage src={pokemonBackImage} alt=''/> 
          </ImagesContainer>  
          <StatsContainer>
            <Titles>Base stats</Titles>
              <Stats>
                {
                  stats.map((stat) => {
                    return(
                      <>   
                        <ValuesContainer>                   
                          <StatValues>{capitalizeFirstLetter(stat.stat.name)}</StatValues>
                          <StatValues>{stat.base_stat}</StatValues> 
                        </ValuesContainer>                    
                          <Progress colorScheme={stat.base_stat < 50 ? "orange" : "yellow"} value={stat.base_stat}/>                                               
                      </>
                    )
                  })
                }                
              </Stats>
          </StatsContainer>                   
          <InfoMovesContainer>              
              <PokemonNumber>#{pokemonId}</PokemonNumber>
              <PokemonName>{capitalizeFirstLetter(pokemonName)}</PokemonName>
                <TypesContainer>
                    {pokemonTypes.map((type) => {              
                        return <PokemonType src={getTypes(type.type.name)} alt='' />
                    })}
                </TypesContainer>  
                <MovesContainer>
                  <Titles>Moves</Titles>
                  {
                    moves.map((move) => {
                      return <Move>{capitalizeFirstLetter(move.move.name)}</Move>
                    })
                  }
                </MovesContainer>                     
            </InfoMovesContainer>  
          <FinalImageContainer>
                  <FinalImage src={finalImage}></FinalImage>
          </FinalImageContainer>         
            <Pokeball src={pokeball} alt="pokeball" />         
          </Container>
        </CardContainer>     
    </>
  )
}

export default DetailsPage