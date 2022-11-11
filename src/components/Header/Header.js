import { HeaderContainer, Image, ImageIcon } from "./Header.styled"
import searchIcon from "../../assets/search.svg"
import productIcon from "../../assets/product.svg"
import cartIcon from "../../assets/cart.svg"
import logoIcon from "../../assets/logo.png"

function Header(props) {
    const { goToCartScreen, goToProductsScreen } = props

    return (
        <HeaderContainer>
            <button className="logo-button" onClick={goToProductsScreen}>
                <Image src={logoIcon} alt="Logo icon"/>
            </button>

            <div className="search-group">
                <input placeholder="Search" />
                <button>
                    <ImageIcon src={searchIcon} alt="Search icon" />
                </button>
            </div>

            <div className="button-group">
                <button onClick={goToCartScreen}>
                    <img src={cartIcon} alt="Cart icon" />
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header

