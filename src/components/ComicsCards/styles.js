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
    width: 100%;
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
    height: 20rem;
    align-items: center;
    cursor: pointer;
    border-radius: 10%;
    box-sizing: border-box;
    background: #0a0a0a;
    @media screen and (max-width: 768px) {
        width: 17rem;
        height: 17rem;
    }
`
export const NavCard = styled.div`
    display: flex;
    width: 15rem;
`
export const CardImage = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 8px;
`
export const ContentCard = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    color: white;
    h3 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        width: 1rem;
        color: rgba(99,0,0,1);
        margin-left: 1.2rem;
    }
`
export const CardTitle = styled.h6`
    font-family: sans-serif;
    font-size: 0.8rem;
    color: white;
    height: 1rem;
    width: 10rem;
    max-height: 3rem;
    max-width: 15rem;
`
export const CardPrice = styled.h6`
    display: flex;
    justify-content: flex-start;
    margin-left: 1rem;
    font-family: sans-serif;
    font-size: 0.8rem;
    color: white;
    max-height: 1rem;
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const AddCartContainer = styled.button`
    border: 1px solid blue;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    margin-left: 13rem;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
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
    background-color: rgb(236, 29, 36);;
    color: #fff;
    gap: 3rem;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
export const CurrentPage = styled.h3`
    font-family: sans-serif;
    font-size: 0.8rem;
    margin: 0.5rem;
    color: #fff;
`;
