import styled from "styled-components";

export const ProductsRender = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin-top: 12px;

`
export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 36px;

    input {
        width: 80px;
        margin-right: 8px;
    }

    .max-price {
        margin-right: 24px;
    }

    label {
        margin-right: 4px;
    }
`