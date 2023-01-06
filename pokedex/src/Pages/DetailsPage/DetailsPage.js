import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import HeaderDetails from '../../Components/Headers/HeaderDetails'
import { CardContainer, Move, MovesContainer, StatsContainer, Titles, FinalImageContainer, FinalImage, Stats, StatValues, ValuesContainer } from './styles'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import pokeball from "../../Assets/pngwing 2.png"
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, PokemonImage, ImagesContainer, InfoMovesContainer } from './styles'
import { getTypes } from "../../Utils/ReturnPokemonType"
import { Progress, Heading, Text } from "@chakra-ui/react"
import Modal from "react-modal"
import { GlobalContext } from '../../Contexts/GlobalContext'

Modal.setAppElement('#root')

function DetailsPage() {  

  const context = useContext(GlobalContext)

  const params = useParams()  

  const [pokemonId, setPokemonId] = useState("")

  const [pokemonTypes, setPokemonTypes] = useState([])

  const [pokemonImage, setPokemonImage] = useState("")

  const [pokemonName, setPokemonName] = useState("")

  const [pokemonBackImage, setPokemonBackImage] = useState("")

  const [moves, setMoves] = useState([])

  const [finalImage, setFinalImage] = useState("")

  const [stats, setStats] = useState([])

  const [details, setDetails] = useState({})

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
      setPokemonBackImage(response.data.sprites.back_default)
      setMoves(response.data.moves.slice(0,4))     
      setFinalImage(response.data.sprites.other.home.front_default)
      setStats(response.data.stats)
      setDetails(response.data)

    } catch (error) {
      console.log(error)
    }
  }  
  
  const capitalizeFirstLetter = (string) => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1)

    return capitalized
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '12px',
      width: '450px',
      height: '220px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
      zIndex: '1000'
    }
  } 

  return (
    <>        
      <HeaderDetails details={details}/>
      <Modal
      isOpen={context.modalDeleteIsOpen}
      onRequestClose={context.handleCloseModalDelete}
      style={customStyles}
      >
        <Heading
          fontWeight={"700"}
          fontSize={"48px"}
          textAlign={"center"}
          paddingBottom={"20px"}
        >Oh, no!
        </Heading>
        <Text
          textAlign={"center"}
        >
        O Pokémon foi removido da sua Pokédex!
        </Text>
      </Modal>
      <Heading color={"white"} bg={"#5E5E5E"} pl={"50px"} pt={"30px"} fontWeight={"700"} size={"2xl"}>Detalhes</Heading> 
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