import styled from "styled-components"
import { getColors } from "../../Utils/ReturnCardColor";

export const Container = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => getColors(props.color?.type.name)};
  border-radius: 12px;
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
  display: flex;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
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
  z-index: 1;
  color: #000;
  :hover{
    cursor: pointer;
    background-color: wheat;
  }
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
  z-index: 1;
  color: white;
  :hover{
    cursor: pointer;
    background-color: red;
  }
`;

export const Pokemon = styled.img`
  width: 210px;
  height: 240px;
  position: absolute;
  top: -75px;
  right: 0;
  z-index: 1;
`