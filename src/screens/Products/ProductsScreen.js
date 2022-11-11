import products from "../../assets/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import { ProductsPage } from "./ProductsScreen.styled"

function ProductsScreen(props) {

    // digitei x no campo de busca

    const filterProductsByText = () => {
        return products.filter((product) => product.name.includes("x"))
    }

    return (
        <ProductsPage>
            {
                products
                // .filter((product) => product.name.toLowerCase().includes("a".toLowerCase()))
                // .filter((product) => product.price <= 499)
                .map((product) => (
                    <ProductCard 
                        product={product}
                        key={product.id}/>
                ))
            }
        </ProductsPage>
    )
}

export default ProductsScreen