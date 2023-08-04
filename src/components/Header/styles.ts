import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.white};
  position: fixed;
  top: 0;
  width: 100%;
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border :1px solid black; */
    padding: 2rem 6rem;
    background: ${(props) => props.theme.backgound};

    max-width: 85rem;
    margin: 0 auto;
    
    nav {
      display: flex;
      gap: 1rem;
    }
  }

`
export const NavLinkCartContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.5rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  transition: background-color 0.2s, color 0.2s;
  
  &:hover {
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme["yellow-light"]};
 
  }


`

export const InfoLocationContainer = styled.span`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  gap: 0.5rem;
  line-height: 1.3;
  font-size: 0.875rem;
`

export const CartCounter = styled.span`
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};
  border-radius: 100%;
  font-size: 0.75rem;
  line-height: 1.3;
  height: 20px;
  width: 20px;
  margin-left: -28px;
  margin-top: -8px;

`