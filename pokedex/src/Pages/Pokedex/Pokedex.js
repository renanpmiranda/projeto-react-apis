import React, { useContext } from "react"
import HeaderPokedex from "../../Components/Headers/HeaderPokedex"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { Container, CardsContainer } from "./styles"
import { Heading, Text } from '@chakra-ui/react'
import { GlobalContext } from "../../Contexts/GlobalContext"
import Modal from "react-modal"

Modal.setAppElement('#root')

function Pokedex() {

  const context = useContext(GlobalContext)

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
    <Container>
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
      <HeaderPokedex />  
      <Heading color={"white"} bg={"#5E5E5E"} pl={"35px"} pt={"25px"} fontWeight={"700"} size={"2xl"}>Meus Pokémons</Heading>      
      <CardsContainer>                
        {context.pokedex.length === 0 ? <Text  color={"white"} w={"2500px"} fontSize={"43px"} fontWeight={"700"} pl={"1300px"} pt={"200px"} pb={"200px"}> Você ainda não capturou nenhum Pokémon!</Text> : context.pokedex.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />
        })}
      </CardsContainer>

    </Container>
  )
}

export default Pokedex