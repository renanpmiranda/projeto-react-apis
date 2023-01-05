import React from "react"
import HeaderPokedex from "../../Components/Headers/HeaderPokedex"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { Container, CardsContainer, Message } from "./styles"
import { Heading, Text } from '@chakra-ui/react'

function Pokedex(props) {

  return (
    <Container>
      <HeaderPokedex activeScreen={props.activeScreen} setActiveScreen={props.setActiveScreen}/>  
      <Heading color={"white"} bg={"#5E5E5E"} pl={"35px"} pt={"25px"} fontWeight={"700"} size={"2xl"}>Meus Pokémons</Heading>      
      <CardsContainer>                
        {props.pokedex.length === 0 ? <Text  color={"white"} w={"2500px"} fontSize={"43px"} fontWeight={"700"} pl={"1300px"} pt={"200px"} pb={"200px"}> Você ainda não capturou nenhum pokémon!</Text> : props.pokedex.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} deleteFromPokedex={props.deleteFromPokedex}/>
        })}
      </CardsContainer>

    </Container>
  )
}

export default Pokedex