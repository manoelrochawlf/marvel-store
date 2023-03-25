import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: 3rem 5rem;
    @media screen and (max-width: 768px) {
        
    }
`
export const NavDetails = styled.div`
    display: flex;
    justify-content: space-between;
    width: 33.5rem;
    @media screen and (max-width: 768px) {
        width: 20rem;
    }
`
export const BackHome = styled.h1`
    font-family: sans-serif;
    font-size: 1rem;
    color: white;
    @media screen and (max-width: 768px) {
        
    }
`
export const AddShopContainer = styled.button`
    border: none;
    padding: 0;
    @media screen and (max-width: 768px) {
        
    }
`

export const ComicImage = styled.img`
    max-width: 35rem;
    width: 35rem;
    height: 25rem;
    border-radius: 5%;
    @media screen and (max-width: 768px) {
        max-width: 20rem;
        max-height: 15rem;
        
    }
`
export const ContentDetails = styled.div`
    display: flex;
    max-height: 21rem;
    max-width: 35rem;
    width: 35rem;
    justify-content: space-between;
    gap: 2rem;
    box-sizing: border-box;
    padding: 0.5rem;
    color: white;
    @media screen and (max-width: 768px) {
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
    }
`

export const ComicTitle = styled.h1`
    font-family: Arial, sans-serif;
    font-size: 1rem;
    color: white;
    max-width: 35rem;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 768px) {
        width: 15rem;
        
    }
`
export const ComicPrice = styled.h3`
    font-family: sans-serif;
    font-size: 1rem;
    color: rgba(99,0,0,1);
    @media screen and (max-width: 768px) {
        
    }
`
export const ComicDescription = styled.h4`
    font-family: sans-serif;
    font-size: 1rem;
    max-width: 35rem;
    max-height: 8rem;
    margin-top: 0.5rem;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 768px) {
        width: 20rem;
        
    }
`
export const DetailsSpecifications = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    width: 35rem;
    max-width: 35rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        width: 20rem;
        
    }
`
export const NumPages = styled.h4` 
    font-family: sans-serif;
    font-size: 1rem;
    max-width: 35rem;
    max-height: 2rem;
    color: rgba(99,0,0,1);
    @media screen and (max-width: 768px) {
        
    }
`
export const FormatComic = styled.h4`
    font-family: sans-serif;
    font-size: 1rem;
    max-width: 35rem;
    max-height: 2rem;;
    color: rgba(99,0,0,1);
    @media screen and (max-width: 768px) {
        
    }
`
