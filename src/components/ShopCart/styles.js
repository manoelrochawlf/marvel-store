import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; 
`
export const CartContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 35rem;
    height: 30rem;
    border-radius: 8px;
    background: #0a0a0a;
    box-sizing: border-box;
    padding: 2rem 4rem;
    h1{
        font-family: sans-serif;
        font-size: 1.5rem;
        color: rgb(236, 29, 36);;
        background-color: transparent;
    }
`
export const NavCart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
        padding: 0.5rem;
        border: 1px solid rgb(236, 29, 36);
        border-radius: 8px;
        background: transparent;
        width: 4rem;
        color: white;
    }
    button:hover{
        background: rgb(236, 29, 36);
    }
`
export const ItemsCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20rem;
    flex-direction: row;
    margin-top: 1rem;
    color: white;
    box-sizing: border-box;
`
export const CouponContainer = styled.div`
    display: flex;
    height: 10rem;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    box-sizing: border-box;
`
export const CommonCoupon = styled.input`
    padding: 0.5rem;
    border: 1.5px solid rgb(236, 29, 36);
    border-radius: 8px;
    width: 10rem;
    color: rgb(236, 29, 36);
`
export const RareCoupon = styled.input`
    padding: 0.5rem;
    border: 1.5px solid rgb(236, 29, 36);
    border-radius: 8px;
    width: 10rem;
    color: rgb(236, 29, 36);
`
export const Total = styled.h1`
    font-family: sans-serif;
    width: 100%;
    height: 2rem;
`
export const TitlesComics = styled.h3`
    font-family: sans-serif;
    font-size: 1rem;
    width: 10rem;
    height: 1.5rem;
`
export const PricesComics = styled.h3`
    font-family: sans-serif;
    font-size: 1rem;
    width: 10rem;
    height: 1.5rem;
`