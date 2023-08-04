import { styled } from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 0.5rem;
  
  button[type=button] {
    width: 1.25rem;
    height: 2.375rem;
    border: none;
    color: ${(props) => props.theme["purple-dark"] };
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 0px;
    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }

  button[type=button]:first-of-type {
    border-radius: 6px 0px 0px 6px;
    padding-left: 0.25rem;
  }
  button[type=button]:last-of-type {
    border-radius: 0px 6px 6px 0px;
    padding-right: 0.5rem;
  }

  input[type=number]{
        text-align: center;
        width: 2.5rem;
        height: 2.375rem;
        background-color: ${(props) => props.theme["base-button"] };
        border: none;
        line-height: 1.3;
        padding: 0.5rem;

        -moz-appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }


`
