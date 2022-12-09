import products from "../../assets/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import { ProductsRender, FiltersContainer } from "./HomePage.styled"
import Header from "../../components/Header/Header"

function HomePage(props) {

    const {addItemNoCarrinho, 
           qteItensCarrinho, 
           filtertext,
           onChangeFilterText,
           minprice,
           onChangeMimPrice,
           maxprice,
           onChangeMaxPrice,
           ordenarprodutos,
           onChangeOrdenarProdutos} = props

    /*const filterProductsByText = () => {
        return products.filter((product) => product.name.toLowerCase().includes(filtertext.toLowerCase()))
    }*/

    return (
        <>
            <Header 
                qteItensCarrinho={qteItensCarrinho} 
                isOnProductsSreen={true}
                filtertext={filtertext}
                onChangeFilterText={onChangeFilterText}
                />
            <FiltersContainer>
                <label>Valor Mínimo:</label>
                <input 
                    type="number"
                    value={minprice}
                    onChange={onChangeMimPrice}>
                </input>
                <label>Valor Maximo:</label>
                <input 
                    type="number"
                    value={maxprice}
                    onChange={onChangeMaxPrice}
                    className="max-price">
                </input>
                <select
                    value={ordenarprodutos}
                    onChange={onChangeOrdenarProdutos}>
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                </select>
            </FiltersContainer>
            <ProductsRender>
                {
                    products
                    .filter((product) => product.name.toLowerCase().includes(filtertext.toLowerCase()))
                    .filter((product) => product.price >= minprice || minprice === "")
                    .filter((product) => product.price <= maxprice || maxprice === "")
                    .sort((currProduct, nextProduct) => {
                        if(ordenarprodutos === "asc") {
                            return currProduct.price - nextProduct.price
                        }else{
                            return nextProduct.price - currProduct.price
                        }
                    })
                    .map((product) => (
                        <ProductCard 
                            product={product}
                            key={product.id}
                            isOnProductsSreen={true}
                            addItemNoCarrinho={addItemNoCarrinho }
                            />
                    ))
                }
            </ProductsRender>
           
        </>
    )
}

export default HomePage