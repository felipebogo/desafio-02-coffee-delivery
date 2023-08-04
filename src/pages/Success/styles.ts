import { styled } from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.backgound};
  padding: 2rem 6rem;
  justify-content: space-between;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;

    > h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      line-height: 1.3;
      color: ${(props) => props.theme["yellow-dark"]};
    }

    > p {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-subtitle"]};
    }

  }

`

export const SummaryContainer = styled.div`
  margin-top: 2rem;
  padding: 1px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border: none;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(to bottom, ${(props) => props.theme.yellow}, ${(props) => props.theme.purple});

  > div {
    background-color: ${(props) => props.theme.backgound};
    border-radius: 6px 36px 6px 36px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > p {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.85rem;
    }

  }

`;

const baseIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50px;

   > svg {
    color: ${(props) => props.theme.backgound};
   }
`;

export const MapIcon = styled(baseIcon)`
  background-color: ${(props) => props.theme.purple};
`

export const TimeIcon = styled(baseIcon)`
  background-color: ${(props) => props.theme.yellow};
`

export const PayIcon = styled(baseIcon)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`