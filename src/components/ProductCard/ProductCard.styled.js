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
export const ProducCardContainer2 = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 2px 3px 5px 0px rgba(176,166,166,0.74);
    height: 150px;
    width: 800px;
    position: relative;
    //border: 2px solid black;

    img {
        width: 100px;
        height: 100px;
        padding: 8px;
        border: 1px solid black;
        margin: 24px;
    }

    .cart-price {
        margin-right: 16px;
        font-weight: bold;
        font-size: 20px;
    }


    .qteProduct {
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .change-qte {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 4px;

            .button-add, .button-sub {
                background-color: white;
                border: none;
                height: 12px;
                width: 12px;
                font-size: 16px;
                position: unset;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 4px;
            }
            .add-image, .sub-image {
                width: 30px;
                height: 30px;
                padding: 8px;
                margin: 24px;
                border: none;
            }
        }
    }

    button {
        position: absolute;
        right: 85%;
        top: 20%;
        background-color: #F27329;
        border: none;
        height: 15px;
        width: 12px;
        font-size: 12px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }
        :active {
            filter: brightness(0.95);
        }

    }

`
export const InfoSection2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
    margin-right: 48px;
    display: flex;
`

