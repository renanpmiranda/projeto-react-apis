import React, { useContext, useEffect, useState } from 'react'
import HeaderHome from '../../Components/Headers/HeaderHome'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../Contexts/GlobalContext'
import { Container, CardsContainer } from './styles'
import { Heading } from '@chakra-ui/react'

function HomePage(props) {

  const context = useContext(GlobalContext)

  return (
    <Container>   
      <HeaderHome setActiveScreen={props.setActiveScreen}/> 
      <Heading color={"white"} bg={"#5E5E5E"} pl={"35px"} pt={"25px"} fontWeight={"700"} size={"2xl"}>Todos os Pokémons</Heading>  
      <CardsContainer>  
        {
          context.pokemons.map((pokemon) => {            
            return <PokemonCard pokemon={pokemon} addToPokedex={props.addToPokedex} activeScreen={props.activeScreen}/>
          })
        }   
      </CardsContainer>
    </Container>
  )
}

export default HomePage