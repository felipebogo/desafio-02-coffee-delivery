import { CartCounter, HeaderContainer, InfoLocationContainer, NavLinkCartContainer } from "./styles";
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { OrderListContext } from "../../contexts/OrderListContext";

export function Header() {
  const {numberOfCoffeeInCard, address} = useContext(OrderListContext);
  const {city, state} = address;
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" ><img src={logoCoffeeDelivery} alt="" /></NavLink>
        <nav>
          <InfoLocationContainer>
            <MapPin size={22} weight="fill" /><span>{!!city && state && `${city}, ${state}`}</span>
          </InfoLocationContainer>
          <NavLinkCartContainer to="/checkout" title="Cart"><ShoppingCart size={22} weight="fill" /></NavLinkCartContainer>
          {!!numberOfCoffeeInCard && <CartCounter>{numberOfCoffeeInCard}</CartCounter>}
        </nav>
      </div>
    </HeaderContainer>
  )
}