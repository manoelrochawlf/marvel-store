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
  NavCard,
  ButtonContainer,
  CurrentPage } from "./styles";
import { useState, useEffect, useContext } from "react";
import { ComicsService } from "../../services/ComicsServices";
import AddShoppingCart from "../../assets/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/CardContex";


const ComicsCards = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [comics, setComics] = useState([]);
    const [rareComics, setRareComics] = useState([]);
    const { cartItems, addItemToCart } = useContext(CardContext);

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
      const handleAddToCart = (item) => {
        addItemToCart(item);
      };
      console.log(cartItems);

        return (
            <Container>
                  <ContentComics>
                    {comics.slice(currentPage * 10, currentPage * 10 + 10).map((comic) => (
                          <CardContainer key={comic.id}>
                              <NavCard>
                              <CardTitle>{comic.title}</CardTitle>
                                <AddCartContainer onClick={() => handleAddToCart(comic)}>
                                  <AddShoppingCart />
                                </AddCartContainer>
                              </NavCard>
                              <Link
                              to={`/comics/${comic.id}`}
                              style={ { color: 'transparent' } }
                              >
                              <CardImage src={`${comic.thumbnail.path}/portrait_incredible.jpg`} alt="image comics" />
                              <ContentCard>
                                <CardPrice>U${comic.prices[0].price}</CardPrice>
                                {rareComics.includes(comic.id) && <h3>Raro</h3>}
                              </ContentCard>  
                              </Link>   
                            </CardContainer>  
                      ))}
                      </ContentComics>
                  <ButtonContainer>
                    <Button disabled={currentPage === 0} onClick={handlePrevClick}>Anterior</Button>
                      <CurrentPage>{currentPage + 1}</CurrentPage>
                    <Button disabled={currentPage === 4} onClick={handleNextClick}>Próxima</Button>
                  </ButtonContainer>
            </Container>

        );
    };  
export default ComicsCards;