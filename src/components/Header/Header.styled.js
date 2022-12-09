import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;
    height: 12vh;
    padding: 32px 32px 32px 0;

    button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        border-radius: 40%;
        border: none;
        width: 50px;
        height: 50px;
        margin: 0 4px;
        :hover {
            cursor: pointer;
            filter: brightness(1.3);
        }
        :active {
            filter: brightness(0.95);
        }

        .cart-qtes {
            color: white;
            position: absolute;
            top: 10%;
            right: 2%;
            border-radius: 50%;
            background-color: #F27329;
            height: 18px;
            width: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .logo-button {
        width: 150px;
        height: 55px;
        //background-color: #F24E29;
        border-radius: 0;
        margin-left: 16px;
    }

    .search-group {
        display: flex;
        align-items: center;
        margin-right: 200px;
        margin-left: 200px;
   
        >input {
            border-radius: 35px;
            margin-right: 8px;
            width: 300px;
            height: 40px;
            padding: 16px;
            padding-left: 42px;
            box-shadow: 2px 3px 5px 0px rgba(61,55,55,0.74);

            background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMuDnHbI_salLEGWrPdd-XvOcAcAd3mkB5lhBNhvSuon7ixuHzr4VBKhDhuBcZYN8oe4&usqp=CAU") #fff no-repeat;
            background-position: 12px 8px;
            background-size: 18px 18px;
        }

        >button {
            background-color: #F27329;
            width: 40px;
            height: 40px;
        }

    }

    .cart-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const Image = styled.img`
    width: 130%;
    padding: 24px;
    margin-left: 8px;
    margin-bottom: 4px;
`
export const ImageIcon = styled.img`
    width: 50%;
`

export const HeaderContainer2 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    color: white;
    height: 12vh;
    padding: 32px 32px 32px 0;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        border: none;
        width: 150px;
        height: 55px;
        margin: 0 4px 0 64px;
    
        :hover {
            cursor: pointer;
            filter: brightness(1.3);
        }
        :active {
            filter: brightness(0.95);
        }
    }
`
export const Image2 = styled.img`
    width: 130%;
    padding: 24px;
    margin-left: 8px;
    margin-bottom: 4px;
`


