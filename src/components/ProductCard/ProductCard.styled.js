import styled from "styled-components";

export const ProducCardContainer = styled.article`
    box-shadow: 2px 3px 5px 0px rgba(176,166,166,0.74);
    width: 290px;
    height:400px;
    margin: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;

    :hover {
            cursor: pointer;
            border: 1px solid black;
        }
    
    h1 {
        display: flex;
        margin-top: 16px;
        margin-bottom: 12px;
        
    }

`

export const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    margin-bottom: 16px;
    
    .price {
        font-size: 20px;
    }

`

export const BuyingSection = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

    button {
        font-size: 22px;
        font-weight: 700;
        color: rgb(61,55,55);
        background-image: linear-gradient(to bottom, #F28705, #F27329);
        border-radius: 0.625rem 0.625rem;
        box-shadow: 2px 3px 5px 0px rgba(176,166,166,0.74);
        border: none;
        padding: 6px 16px;

        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }
        :active {
            filter: brightness(0.95);
        }
        
    }

    span {
        font-size: 20px;
    }

`
