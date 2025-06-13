import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 54rem;
  margin-left: auto;
  margin-right: auto;

  background-color: ${(props) => props.theme["gray-700"]};

  padding: 2rem;
  margin-top: -5rem;

  position: relative;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
      all: unset;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      cursor: pointer;

      text-transform: uppercase;
      font-weight: bold;
      color: ${(props) => props.theme["blue"]};
    }

    a {
      display: flex;
      color: ${(props) => props.theme["blue"]};

      font-size: 0.75rem;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      align-items: center;
      gap: 0.5rem;

      border-bottom: 2px solid transparent;
    }

    a:hover {
      border-bottom: 2px solid ${(props) => props.theme["blue"]};
    }
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }

  span {
    margin-top: 0.5rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
