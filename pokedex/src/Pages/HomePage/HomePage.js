import React, { useContext } from 'react'
import HeaderHome from '../../Components/Headers/HeaderHome'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../Contexts/GlobalContext'
import { Container, CardsContainer } from './styles'
import { Heading, Text } from "@chakra-ui/react"
import Modal from "react-modal"

Modal.setAppElement('#root')

function HomePage() {

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
      isOpen={context.modalCatchIsOpen}
      onRequestClose={context.handleCloseModalCatch}
      style={customStyles}
      >
        <Heading
          fontWeight={"700"}
          fontSize={"48px"}
          textAlign={"center"}
          paddingBottom={"20px"}
        >Gotcha!
        </Heading>
        <Text
          textAlign={"center"}
        >
        O Pokemon foi adicionado a sua Pokédex!
        </Text>
    </Modal>    
      <HeaderHome/> 
      <Heading color={"white"} bg={"#5E5E5E"} pl={"35px"} pt={"25px"} fontWeight={"700"} size={"2xl"}>Todos os Pokémons</Heading>  
      <CardsContainer>  
        {
          context.pokemons.map((pokemon) => {            
            return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
          })
        }   
      </CardsContainer>
    </Container>
  )
}

export default HomePage