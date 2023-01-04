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
  margin-top: 20px;
`;

export const PokemonName = styled.h1`
  width: 238px;
  height: 58px;
  left: 771px;
  top: 39px;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF; 
  margin-bottom: 15px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 18px;
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

export const PokemonImage = styled.img`
  width: 282px;
  height: 282px;
  left: 44px;
  top: 26px;
  background:  #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
`
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  margin-left: 44px;
  margin-top: 10px;
  height: 613px;
  width: 343px;
`

export const StatsContainer = styled.div`
  width: 343px;
  height: 613px;
  margin-top: 10px;
  background: #FFFFFF;
  border-radius: 12px;
`

export const InfoMovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 68px;
  margin-bottom: 10px;
`

export const Titles = styled.h1`
  color: black;
  margin: 25px;
  font-weight: 700;
  font-size: xx-large;
`

export const MovesContainer = styled.div`
  width: 292px;
  height: 453px;
  left: 771px;
  top: 184px;
  background: #FFFFFF;
  border-radius: 8px;
`

export const Move = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  height: 37px;
  margin-left: 18px;  
  margin-bottom: 20px;
  max-width: fit-content;
  color: black;
  background: #ECECEC;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`

export const FinalImageContainer = styled.div`
  position: absolute;
  left: 1050px;
  top: -160px;
  z-index:1;
`

export const FinalImage = styled.img`
  width: 370px;
  height: 370px;

`
export const Stats = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px;
  margin-left: 25px;
  margin-right: 25px;
`

export const StatValues = styled.span`
  color: black;  
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`