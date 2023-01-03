import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, DeleteButton, Link } from "./styles"
import { goToHomePage } from "../../Router/coordinator"

function HeaderDetails (props) {

    const navigate = useNavigate()

    return(
        <Container>
            <Link onClick={() => goToHomePage(navigate) && props.setActiveScreen("HomePage")}>{"< Todos os Pokémons"}</Link>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>
            <DeleteButton>Excluir da Pokédex</DeleteButton>
        </Container>
    )
}

export default HeaderDetails