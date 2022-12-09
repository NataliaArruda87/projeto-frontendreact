import { priceFormatter } from "../../utils/priceFormatter"
import { ProducCardContainer, ProducCardContainer2, InfoSection, InfoSection2, BuyingSection } from "./ProductCard.styled"
import addIcon from "../../assets/iconemaior.png"
import subIcon from "../../assets/iconemenor.png"
import subIconCinza from "../../assets/iconemenorcinza.png"

function ProductCard(props) {
    const { product, 
            isOnCartSreen, 
            isOnProductsSreen, 
            addItemNoCarrinho, 
            deletarItemDoCarrinho, 
            addQuantidadeDeProdutos, 
            subQuantidadeDeProdutos } = props
    
    return (
        <div>
        {isOnProductsSreen &&
            <ProducCardContainer>
                <img src={product.imageUrl} alt={product.imageAlt}/>
                <div>
                    <h1>{product.name}</h1>
                    <InfoSection>
                        <span className="price">{priceFormatter.format(product.price)}</span>
                        <span>{product.type}</span>
                    </InfoSection >
                    <BuyingSection>
                        <button onClick={() => addItemNoCarrinho(product)}>Comprar</button>
                    </BuyingSection>
                </div>
            </ProducCardContainer>
        }
        {isOnCartSreen &&
            <ProducCardContainer2>
               <img src={product.imageUrl} alt={product.imageAlt}/>
               <InfoSection2>
                    <h3>{product.name}</h3>
                    <span>{product.type}</span>
               </InfoSection2>
               <span className="cart-price">{priceFormatter.format(product.price)}</span>
               <span className="qteProduct"> 
                    <span>Qte:</span>
                    <span className="change-qte">
                        {product.qte > 1 ?
                            <button className="button-sub" onClick={() => subQuantidadeDeProdutos(product)}><img className="sub-image" src={subIcon} alt="add"/></button> : 
                            <button className="button-sub"><img className="sub-image" src={subIconCinza} alt="add"/></button> 
                        }
                        <span>{product.qte}</span>
                        <button className="button-add" onClick={() => addQuantidadeDeProdutos(product)}><img className="add-image" src={addIcon} alt="add"/></button>
                    </span>
                </span>
                <button onClick={() => deletarItemDoCarrinho(product)}>X</button>
           </ProducCardContainer2>     
        }
        </div>

    )
}

export default ProductCard