import { styled } from "styled-components";
import backgroundIntro from '../../assets/background-intro.svg';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props) => props.theme.backgound};
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-image: url('${backgroundIntro}') ;
  background-color: ${(props) => props.theme.white};;
  
  //background-repeat: no-repeat;
  padding: 4rem 6rem;
`

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h2 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    line-height: 1.3;
    font-size: 1.25rem;
  }

  img {
    height:22rem;
  }
`

export const IntroListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0rem;
  align-items: flex-start;
  margin-top: 3rem;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    line-height: 1.3;
    font-size: 1rem;

    svg {
      border-radius: 50%;
      padding: 0.5rem;
      color: ${(props) => props.theme.backgound};
    }

    &:nth-of-type(1){
      svg {
        background-color: ${(props) => props.theme["yellow-dark"]};
      }
    }
    &:nth-of-type(2){
      svg {
        background-color: ${(props) => props.theme["base-text"]};
      }
    }
    &:nth-of-type(3){
      svg {
        background-color: ${(props) => props.theme["yellow"]};
      }
    }
    &:nth-of-type(4){
      svg {
        background-color: ${(props) => props.theme["purple"]};
      }
    }

  }
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.backgound};
  padding: 1rem 6rem;

  h2{
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 2rem;
  }
`

export const CoffeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //justify-content: ;
  gap: 2.5rem 2rem;
`


export const CoffeContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background: ${(props) => props.theme["base-card"]};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 6px;
  border-bottom-left-radius: 36px;
  max-width: 16rem;

  img {
    height: 120px;
    margin-top: calc(-20px - 1.5rem)
  }

  ul{
    display: flex;
    justify-content: center;
    gap: 0.25rem;

    li {
      list-style-type: none;
      padding: 0.25rem 0.5rem;
      border-radius: 15px;
      background-color: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
      font-size: 0.625rem;
      line-height: 1.3;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  h3{
    font-family: 'Baloo 2',sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
  }

  p {
    text-align: center;
    margin-top: -0.5rem;
    color: ${(props) => props.theme["base-label"]};
    line-height: 1.3;
    font-size: 0.875rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    
    span{
      font-size: 1.5rem;
      font-weight: bolder;
      line-height: 1.3;
      font-family: 'Baloo 2', sans-serif;
      margin-right: 1rem;

      &::before{
        content: 'R$';
        font-size: 0.875rem;
        font-weight: 400;
        margin-right: 0.25rem;
      }
    }

    div{
      display: flex;
      align-items: center;
      
      & > button {
        width: 2.375rem;
        height: 2.375rem;
        border-radius: 6px;
        border: none;
        color: ${(props) => props.theme["base-button"] };
        background-color: ${(props) => props.theme["purple-dark"] };

        transition: background-color 0.2s;
  
        &:hover {
          background-color: ${(props) => props.theme.purple};
      
        }

      }

    }
    

  }

`