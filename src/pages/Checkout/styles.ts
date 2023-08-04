import { css, styled } from "styled-components";

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.backgound};
    padding: 2rem 6rem;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
  }
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

`

export const AddressCardContainer = styled(CardContainer)`
  width: 58%;

`

export const CoffeeCardContainer = styled(CardContainer)`
  width: 40%;

`

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  min-width: 350px;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    line-height: 1.3;
    font-weight: bold;
  }
  p{
    margin-left: 1.65rem;
    font-size: 0.875rem;
    line-height: 1.3;
  }
`;

export const AddressContainer = styled(BaseCard)`
  h3 {
    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`

export const PaymentContainer = styled(BaseCard)`
  h3 {
    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;

    input[type=radio] {      
      appearance: none;
    }

    input[type=radio]+label{
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background-color: ${(props) => props.theme["base-button"]};
      border: none;
      width: 11.12rem;
      border-radius: 6px;
      svg {
        color: ${(props) => props.theme.purple};
      }
      &:hover{
        background-color: ${(props) => props.theme["base-hover"]};
      }
      
    }
    input[type=radio]:checked+label {      
      background-color: ${(props) => props.theme["purple-light"]};
        border: 1px solid ${(props) => props.theme.purple};
    }

  }

`
export const CoffeeCard = styled(BaseCard)`
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;
  padding: 2.5rem;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem 0.5rem;
  padding: 2rem 0 0 0;
`

interface InputProps {
  $flexType?: 'full' | 'fill' | 'min' | 'large'
}

export const InputText = styled.input<InputProps>`
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  background-color: ${(props) => props.theme["base-input"]};
  height: 2.625rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.3;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus{
    outline: 1px solid ${(props) => props.theme["yellow-dark"]};
  }

  ${props => {
    switch (props.$flexType) {
      case "fill":
        return css`width: 100%;`
      case "full":
        return css`
          min-width: 16.5rem;
          margin-right: 100%;
        `
      case "min":
        return css`width: 3.3rem;`
      case "large":
        return css`width: 20.3rem;`
      default:
        return css`width: 16.5rem;`
    }
  }}
`

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  max-height: 45vh;
  overflow-y: auto;
  padding-right: 0.5rem;
`

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid black;
  padding: 1.5rem 0rem;
  border-color: ${(props) => props.theme["base-button"]};

  > span {
    font-weight: bold;
    font-size: 1rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > img {
      height: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      
      > span {
        color: ${(props) => props.theme["base-subtitle"]};
        line-height: 1.3;
      }
      
      > div{
        display: flex;
        flex-direction: row;
        align-items: center;

        > button {
          display: flex;
          flex-direction: row;
          gap: 0.25rem;
          align-items: center;
          padding: 0.5rem 0.5rem;
          line-height: 1.6;
          font-size: 0.75rem;
          text-transform: uppercase;
          border-radius: 6px;
          border: none;
          background-color: ${(props) => props.theme["base-button"]};

          &:hover {
            background-color: ${(props) => props.theme["base-hover"]};
          }

          > svg {
            color: ${(props) => props.theme.purple};
          }
        }
      }
    }
  }
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem 0;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > span {
      font-size:1rem;
      line-height: 1.3;
    }

    > span:first-of-type {
      font-size: 0.875rem
    }
  }

  > div:last-of-type {
    > span {
      font-size:1.25rem;
      font-weight: bold;
    }
  }

  > button {
    width: 100%;
    padding: 1.25rem;
    border: none;
    background-color: ${(props) => props.theme["yellow"]};
    font-size: 1.25rem;
    color: white;
    font-weight: bold;
    border-radius: 6px;
    margin-top: 1rem;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }


  }

`