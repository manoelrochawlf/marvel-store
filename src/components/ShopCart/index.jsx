import { useContext } from 'react';
import { CardContext } from "../../context/CardContex";
import {
  Container,
  CartContainer,
  ItemsCart,
  CouponContainer,
  CommonCoupon,
  RareCoupon,
  Total,
  PricesComics,
  TitlesComics,
  NavCart
} from './styles';

const ShopCart = () => {

  const { cartItems, removeItemFromCart, clearCart } = useContext(CardContext);

  const handleRemoveFromCart = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Container>
      <CartContainer>
        <NavCart>
          <h1>CARRINHO DE COMPRAS</h1>
          <button onClick={handleClearCart}>Limpar</button>
        </NavCart> 
        {cartItems.map((item) => (
         <ItemsCart>   
            <TitlesComics>{item.title}</TitlesComics>
            <PricesComics>U${item.prices[0].price}</PricesComics>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remover</button>
        </ItemsCart>
        ))}
        <CouponContainer>
          <CommonCoupon />
          <RareCoupon />
        </CouponContainer>
        <Total />
      </CartContainer>
    </Container>
  );
};

export default ShopCart;