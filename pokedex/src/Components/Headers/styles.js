import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;     
    height: 160px;
`

export const Image = styled.img`
    position: absolute;
    width: 307px;
    height: 113px;
    left: 566px;
    top: 21px;
`

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    position: absolute;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;
    background: #33A4F5;
    border-radius: 8px;
    :hover{
        cursor: pointer;
        background-color: #1081d2;
    }
` 

export const DeleteButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    position: absolute;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;
    color: white;
    background:#FF6262;
    border-radius: 8px;
    :hover{
        cursor: pointer;
        background-color: red;
    }
` 

export const Link = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 70px 50px;
    width: 350px;
    height: 74px;
    left: 1112px;
    top: 41px;
    font-size: 23px;
    font-weight: 700;
    :hover{
        cursor: pointer;
        text-decoration: underline
    }
`