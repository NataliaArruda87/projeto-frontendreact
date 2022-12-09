import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utils/priceFormatter"
import { CartScreenContainer } from "./CartPage.styled"
import Header from "../../components/Header/Header"
import cartIcon from "../../assets/cart.svg"
import arrowIcon from "../../assets/arrow.png"
import idIcon from "../../assets/identification.png"
import creditCardIcon from "../../assets/creditcard.png"
import confirmIcon from "../../assets/confirmation.png"
import { useNavigate } from "react-router-dom"

import { goToHomePage } from "../../Router/coordinator"



function CartPage(props) {
    const {carrinho, 
           deletarItemDoCarrinho, 
           addQuantidadeDeProdutos, 
           subQuantidadeDeProdutos,
        } = props

    const total = carrinho.reduce((acumulador, product) => product.price * product.qte + acumulador, 0)

    const navigate = useNavigate()
    
    return (
        <>
        <Header isOnCartSreen={true}/>
        <CartScreenContainer>
            <section>
                <div className="flux">
                    <img className="buying-sequence-first-icon" src={cartIcon} alt="Cart icon" />
                    <img className="arrowImg" src={arrowIcon} alt="arrow-icon"/>
                    <img className="buying-sequence-icons" src={idIcon} alt="Cart icon" />
                    <img className="arrowImg" src={arrowIcon} alt="arrow-icon"/>
                    <img className="buying-sequence-icons" src={creditCardIcon} alt="Cart icon" />
                    <img className="arrowImg" src={arrowIcon} alt="arrow-icon"/>
                    <img className="buying-sequence-icons" src={confirmIcon} alt="Cart icon" />
                </div>
                <h1>Seu Carrinho</h1>
                <hr/>
                <div className="cart-display">
                    <div className="cards">
                        {carrinho.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.id}
                                isOnCartSreen={true}
                                deletarItemDoCarrinho={deletarItemDoCarrinho}
                                addQuantidadeDeProdutos={addQuantidadeDeProdutos}
                                subQuantidadeDeProdutos={subQuantidadeDeProdutos}
                            />
                        ))}
                    </div>
                    <div className="resumo">
                        <span className="title">RESUMO</span>
                        <span className="total">
                            <span className="text">Valor total:</span> 
                            <span className="value">{priceFormatter.format(total)}</span>
                        </span>
                        <hr/>
                        <button>IR PARA O PAGAMENTO</button>
                        <button onClick={() => goToHomePage(navigate)}>CONTINUAR COMPRANDO</button>
                    </div>
                </div>
                
                
            </section>
        </CartScreenContainer>
        </>
    )
}

export default CartPage