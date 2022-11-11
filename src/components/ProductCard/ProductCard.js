import { priceFormatter } from "../../utils/priceFormatter"
import { ProducCardContainer, InfoSection, BuyingSection } from "./ProductCard.styled"
 
function ProductCard(props) {
    const { product } = props
    
    return (
        <ProducCardContainer>
            <img src={product.imageUrl} alt={product.imageAlt}/>
            <div>
                <h1>{product.name}</h1>
                <InfoSection>
                    <span className="price">{priceFormatter.format(product.price)}</span>
                    <span>{product.type}</span>
                </InfoSection >
                <BuyingSection>
                    <button>Comprar</button>
                </BuyingSection>
            </div>
        </ProducCardContainer>

    )
}

export default ProductCard