import { Link } from "react-router-dom";
import ShoppingCart from "../../assets/icons/ShoppingCart";
import { HeaderContainer, HeaderText } from "./styles";


const Header = () => {
    return ( 
        <HeaderContainer>
            <Link to="/">
                <HeaderText>MARVEL COMICS</HeaderText>
            </Link>
            <Link to="/shoppingcart">
                <ShoppingCart />
            </Link>    
        </HeaderContainer>
     );
}
 
export default Header;