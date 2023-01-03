import styled from "styled-components"
import { getColors } from "../../Utils/ReturnCardColor";

export const Heading = styled.h1`
    background: #5E5E5E;
    color: white;
    padding-top: 25px;
    padding-left: 50px;    
`

export const CardContainer = styled.div`
    background: #5E5E5E;
    padding: 10px;
`

export const Container = styled.div`
  padding: 16px;
  height: 663px;
  width: 1389px;
  background-color: ${(props) => getColors(props.color?.type.name)};
  border-radius: 37.89px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;

export const Pokeball = styled.img`
  position: absolute; 
  height: 745px; 
  top:0;  
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #FF6262;  
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: white;
`;

export const Pokemon = styled.img`
width: 450px;
height: 450px;
position: absolute;
top: -150px;
right: 0;
z-index: 2;
`