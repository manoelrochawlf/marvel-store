import { Link } from "react-router-dom";
import ShoppingCart from "../../assets/icons/ShoppingCart";
import { HeaderContainer, HeaderText } from "./styles";


const Header = () => {
    return ( 
        <HeaderContainer>
            <Link to="/">
                <HeaderText>MARVEL COMICS</HeaderText>
            </Link>
            <ShoppingCart />
        </HeaderContainer>
     );
}
 
export default Header;