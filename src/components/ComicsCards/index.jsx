import {
  AddCartContainer,
  Button,
  CardContainer,
  CardImage,
  CardTitle,
  CardPrice,
  Container,
  ContentCard,
  ContentComics,
  ImageContainer,
  ButtonContainer } from "./styles";
import { useState, useEffect } from "react";
import { ComicsService } from "../../services/ComicsServices";
import AddShoppingCart from "../../assets/icons/AddShoppingCart";
import { Link } from "react-router-dom";

const ComicsCards = () => {
  const [currentPage, setCurrentPage] = useState(0);
    const [comics, setComics] = useState([]);
    const [rareComics, setRareComics] = useState([]);

    useEffect(() => {
        const getComics = async () => {
          try {
            const response = await ComicsService.getAllComics(currentPage);
            console.log(response)
            if (response && response.data) {
              const rareComicIds = [];
              const numRareComics = Math.floor(response.data.results.length / 10);
              while (rareComicIds.length < numRareComics) {
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                const comic = response.data.results[randomIndex];
                if (!rareComicIds.includes(comic.id)) {
                  rareComicIds.push(comic.id);
                }
              }
              setComics(response.data.results);
              setRareComics(rareComicIds);
            }
          } catch (error) {
            console.log(error);
          }
        };
        getComics();
      }, [currentPage]);

      const handlePrevClick = () => {
        setCurrentPage(prevPage => prevPage - 1);
      };

      const handleNextClick = () => {
        setCurrentPage(prevPage => prevPage + 1);
      };

        return (
            <Container>
                  <ContentComics>
                    {comics.slice(currentPage * 10, currentPage * 10 + 10).map((comic) => (
                      <Link
                      to={`/comics/${comic.id}`}
                      style={ { color: 'transparent' } }
                      >
                          <CardContainer key={comic.id}>
                              <ImageContainer>
                                {rareComics.includes(comic.id) && <h3>Raro</h3>}
                                <AddCartContainer>
                                  <AddShoppingCart />
                                </AddCartContainer>
                              </ImageContainer>
                              <CardImage src={`${comic.thumbnail.path}/portrait_incredible.jpg`} alt="image comics" />
                              <ContentCard>
                                    <CardTitle>{comic.title}</CardTitle>
                                    <CardPrice>U${comic.prices[0].price}</CardPrice>
                              </ContentCard>    
                            </CardContainer>
                        </Link>   
                      ))}
                      </ContentComics>
                
                  <ButtonContainer>
                    <Button disabled={currentPage === 1} onClick={handlePrevClick}>Anterior</Button>
                      <span>{currentPage + 1}</span>
                    <Button disabled={currentPage === 4} onClick={handleNextClick}>Próxima</Button>
                  </ButtonContainer>
            </Container>

        );
    };  
export default ComicsCards;