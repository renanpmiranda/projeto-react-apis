import React, { useContext, useEffect, useState } from 'react'
import HeaderHome from '../../Components/Headers/HeaderHome'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../Contexts/GlobalContext'
import { Container, CardsContainer, Heading } from './styles'

function HomePage(props) {

  const context = useContext(GlobalContext)

  return (
    <Container>   
      <HeaderHome setActiveScreen={props.setActiveScreen}/> 
      <Heading>Todos os Pokémons</Heading>  
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