import styled from "styled-components"

export const CartScreenContainer = styled.main`
    section {

        margin-bottom: 24px;
      
        h1, hr {
            width: 100%;
        }
        h1 {
            margin-top: 24px;
            margin-left: 24px;
        }
        hr {
            margin-top: 16px;
            margin-bottom: 16px;
        }

        .flux {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-top: 24px;
        }

        .buying-sequence-first-icon {
            background-color: #F27329;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }

        .buying-sequence-icons {
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            opacity: 0.6;
        }

        .arrowImg {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 30px;
            margin-left: 4px;
            margin-right: 4px;
            opacity: 0.6;
        }

        .cart-display {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            margin-top: 24px;
        }

        .cards {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        .resumo {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            border: 2px solid black;
            height: 300px;
            width: 300px;
            margin-left: 24px;
            padding: 16px;

            button {
            font-size: 16px;
            font-weight: 700;
            color: rgb(61,55,55);
            background-image: linear-gradient(to bottom, #F28705, #F27329);
            box-shadow: 2px 3px 5px 0px rgba(176,166,166,0.74);
            border: none;
            padding: 12px 16px;
            margin: 8px;
            color: white;

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
        }

        .title {
            margin: 8px;
            font-size: 19px;
            font-weight: 700;
            
        }

        .total {
            display: flex;
            justify-content: space-between;
            padding-right: 48px;
            margin: 8px;
            width: 300px;

            .text {
                color: gray;
            }
            .value {
                font-size: 18px;
                font-weight: 500;
            }
        }

    }
`