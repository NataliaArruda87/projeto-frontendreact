import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import { useState } from "react";

const Router = () => {
    //const {carrinho, addItemNoCarrinho, deletarItemDoCarrinho} = props
    const [carrinho, setCarrinho] = useState([])

    const [filtertext, setFilterText] = useState("")

    const [minprice, setMimPrice] = useState("")

    const [maxprice, setMaxPrice] = useState("")

    const [ordenarprodutos, setOrdenarProdutos] = useState("asc")

    const addItemNoCarrinho = (novoProdutoAdd) => {
        const novoCarrinho = [...carrinho]

        const itemProcurado = novoCarrinho.find((produtoJaNoCarrinho) => produtoJaNoCarrinho.id === novoProdutoAdd.id)

        if (!itemProcurado ) {
            const novoProduto = {...novoProdutoAdd, qte: 1}
            novoCarrinho.push(novoProduto)
        }else{
            itemProcurado.qte++
        }
        setCarrinho(novoCarrinho)
    }

    const deletarItemDoCarrinho = (produtoParaDeletar) => {
        const novoCarrinho = [...carrinho]
        const encontarItem = novoCarrinho.findIndex(
            (produtoNoCarrinho) => produtoNoCarrinho.id === produtoParaDeletar.id
        )
            novoCarrinho.splice(encontarItem, 1)
            setCarrinho(novoCarrinho)
    }

    const addQuantidadeDeProdutos = (produtoParaAddQte) => {
        const novoCarrinho = [...carrinho]
        const encontarItem = novoCarrinho.find(
            (produtoNoCarrinho) => produtoNoCarrinho.id === produtoParaAddQte.id
        )
        encontarItem.qte++
        setCarrinho(novoCarrinho)

    }

    const subQuantidadeDeProdutos = (produtoParasubQte) => {
        const novoCarrinho = [...carrinho]
        const encontarItem = novoCarrinho.find(
            (produtoNoCarrinho) => produtoNoCarrinho.id === produtoParasubQte.id
        )
        encontarItem.qte--
        setCarrinho(novoCarrinho)
    }

    const onChangeFilterText = (e) => {
        setFilterText(e.target.value)
    }

    const onChangeMimPrice = (e) => {
        setMimPrice(e.target.value)
    }

    const onChangeMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }

    const onChangeOrdenarProdutos = (e) => {
        setOrdenarProdutos(e.target.value)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage 
                                        addItemNoCarrinho={addItemNoCarrinho}
                                        qteItensCarrinho={carrinho.length}
                                        filtertext={filtertext}
                                        onChangeFilterText={onChangeFilterText}
                                        minprice={minprice}
                                        onChangeMimPrice={onChangeMimPrice}
                                        maxprice={maxprice}
                                        onChangeMaxPrice={onChangeMaxPrice}
                                        ordenarprodutos={ordenarprodutos}
                                        onChangeOrdenarProdutos={onChangeOrdenarProdutos}
                                        />}/>
                <Route path="/cart" element={<CartPage 
                                        carrinho={carrinho} 
                                        deletarItemDoCarrinho={deletarItemDoCarrinho}
                                        addQuantidadeDeProdutos={addQuantidadeDeProdutos}
                                        subQuantidadeDeProdutos={subQuantidadeDeProdutos}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router