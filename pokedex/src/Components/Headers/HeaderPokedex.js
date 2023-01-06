import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Link } from "./styles"
import { goToHomePage } from "../../Router/coordinator"
import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"

function HeaderPokedex () {

    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    return(
        <Container>
            <Link onClick={() => goToHomePage(navigate) & context.setActiveScreen("HomePage")}>{"< Todos os Pokémons"}</Link>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>            
        </Container>
    )
}

export default HeaderPokedex