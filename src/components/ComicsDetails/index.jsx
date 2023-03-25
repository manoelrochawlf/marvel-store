import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ComicsService } from "../../services/ComicsServices";
import {
  DetailsContainer,
  NavDetails,
  BackHome,
  AddShopContainer,
  ComicImage,
  ContentDetails,
  ComicTitle,
  ComicPrice,
  ComicDescription,
  DetailsSpecifications,
  NumPages,
  FormatComic } from "./styles";
import AddShoppingCart from "../../assets/icons/AddShoppingCart";
import { Link } from "react-router-dom";

const ComicsDetails = () => {
  const { id } = useParams();
  const [comic, setComic] = useState([]);

  useEffect(() => {

    ComicIdRender();
  }, []);
  const ComicIdRender = async () => {
    const res = await ComicsService.ComicById(id);
    setComic(res.data.results[0])
  };



  return (
    <DetailsContainer key={comic.id}>
            <NavDetails>
              <Link to="/">
              <BackHome>
                  Voltar
              </BackHome>
              </Link> 
                <AddShopContainer>
                  <AddShoppingCart />
                </AddShopContainer>
            </NavDetails>
            {comic.thumbnail && <ComicImage src={`${comic.thumbnail.path}/portrait_incredible.jpg`} alt="comic image"/>}
        <ContentDetails>
            <ComicTitle>{comic.title}</ComicTitle>
            <ComicPrice>U${comic.prices && comic.prices.length && comic.prices[0].price}</ComicPrice>
        </ContentDetails>
        <ComicDescription>{comic.description}</ComicDescription>
        <DetailsSpecifications>
          <NumPages>Nº de páginas: {comic.pageCount}</NumPages>
          <FormatComic>Formato: {comic.format}</FormatComic>
        </DetailsSpecifications>
      </DetailsContainer>
  )
};

export default ComicsDetails;
