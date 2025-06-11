import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  width: 54rem;
  height: 13.25rem;
  margin-left: auto;
  margin-right: auto;

  background-color: ${(props) => props.theme["gray-700"]};

  padding: 2rem 2.5rem;
  margin-top: -7rem;
  gap: 2rem;

  position: relative;
  z-index: 1;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    a {
      font-size: 0.75rem;
      color: ${(props) => props.theme["blue"]};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  p {
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
