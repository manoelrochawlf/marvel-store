import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        margin-top: 3rem;
  }
`
export const ContentComics = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 17rem;
    align-items: center;
    cursor: pointer;
    border-radius: 10%;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        width: 17rem;
        height: 17rem;
    }
`
export const ImageContainer = styled.div`
    display: flex;
        h3 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        width: 1rem;
        color: rgba(99,0,0,1);
        margin-left: 1.2rem;
    }
`
export const CardImage = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 5%;
`

export const ContentCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem;
    color: white;
`
export const CardTitle = styled.h6`
    font-family: sans-serif;
    font-size: 0.8rem;
    color: white;
    max-height: 1rem;
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const CardPrice = styled.h6`
    font-family: sans-serif;
    font-size: 0.8rem;
    color: white;
    max-height: 1rem;
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;

`

export const AddCartContainer = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    margin-left: 13rem;
    border: none;
    background: none;
    padding: 0;
    background-color: transparent;
`

export const ButtonContainer = styled.div`
    display: flex;
    padding-bottom: 1rem;
    width: 3rem;
    height: 3rem;
    @media screen and (max-width: 768px) {
        margin-top: 5rem;
        margin-right: 8rem;
  }
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    background-color: rgba(99,0,0,1);
    color: #fff;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
