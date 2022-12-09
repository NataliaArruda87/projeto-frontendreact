import { HeaderContainer, Image, ImageIcon, HeaderContainer2, Image2 } from "./Header.styled"
import searchIcon from "../../assets/search.svg"
import cartIcon from "../../assets/cart.svg"
import logoIcon from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToHomePage } from "../../Router/coordinator"

function Header(props) {
    const navigate = useNavigate()
    const {qteItensCarrinho, isOnCartSreen, isOnProductsSreen, filtertext, onChangeFilterText} = props
    return (
        <>
        {isOnProductsSreen &&
        <HeaderContainer>
            <button className="logo-button" onClick={() => goToHomePage(navigate)}>
                <Image src={logoIcon} alt="Logo icon"/>
            </button>

            <div className="search-group">
                <input placeholder="Buscar"
                       value={filtertext}
                       onChange={onChangeFilterText}/>
                <button>
                    <ImageIcon src={searchIcon} alt="Search icon" />
                </button>
            </div>

            <div className="cart-button">
                <button onClick={() => goToCartPage(navigate)}>
                    <img src={cartIcon} alt="Cart icon" />
                    {qteItensCarrinho > 0
                    && <span className="cart-qtes">{qteItensCarrinho}</span>}
                </button>
            </div>
        </HeaderContainer>
        }
        {isOnCartSreen &&
            <HeaderContainer2>
            <button onClick={() => goToHomePage(navigate)}>
                <Image2 src={logoIcon} alt="Logo icon"/>
            </button>
            </HeaderContainer2>
        }
        </>
    )
}

export default Header

