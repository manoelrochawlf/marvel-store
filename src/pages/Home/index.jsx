import { Container, ComicsCards } from "./styles";
import { useState, useEffect } from "react";
import { ComicsService } from "../../services/ComicsServices";

const Home = () => {

    const [comics, setComics] = useState([]);
    useEffect(() => {
        const getComics = async () => {
          try {
            const response = await  ComicsService.getAllComics();
            console.log(response)
            if (response && response.data) {
              setComics(response.data.results);
            }
          } catch (error) {
            console.log(error);
          }
        };
        getComics();
      }, []);
    

    return ( 
        <Container>
            {comics.map((comics) => (
            <ComicsCards key={comics.id}>
                {comics.title}
            </ComicsCards>
            ))}
        </Container>
     );
}
 
export default Home;