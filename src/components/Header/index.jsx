import ShoppingCart from "../../assets/icons/ShoppingCart";
import { HeaderContainer, HeaderText } from "./styles";


const Header = () => {
    return ( 
        <HeaderContainer>
            <HeaderText>MARVEL COMICS</HeaderText>
            <ShoppingCart />
        </HeaderContainer>
     );
}
 
export default Header;