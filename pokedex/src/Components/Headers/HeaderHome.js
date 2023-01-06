import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Button } from "./styles"
import { goToPokedex } from "../../Router/coordinator"
import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"

function HeaderHome (props) {

    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    return(
        <Container>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>
            <Button onClick={() => goToPokedex(navigate) & context.setActiveScreen("Pokédex")}>Pokédex</Button>
        </Container>
    )
}

export default HeaderHome
