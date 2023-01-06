import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Button, DeleteButton, Link } from "./styles"
import { goToHomePage } from "../../Router/coordinator"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useContext } from "react"

function HeaderDetails (props) {

    const navigate = useNavigate() 

    const context = useContext(GlobalContext)

    return(
        <Container>
            <Link onClick={() => goToHomePage(navigate) & context.setActiveScreen("HomePage")}>{"< Todos os Pokémons"}</Link>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>   
            <DeleteButton onClick={() => context.deleteFromPokedex(props.details)}>Excluir da Pokédex</DeleteButton>
        </Container>
    )
}

export default HeaderDetails