import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;

  .publications-header {
    width: 100%;
    max-width: 864px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 4.5rem 0 0.75rem;

    h1 {
      font-size: 1.1rem;
      color: ${(props) => props.theme["gray-100"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  input {
    width: 100%;
    max-width: 54rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-900"]};
    border: 1px solid ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["gray-100"]};
    margin-bottom: 3rem;
  }

  ::placeholder {
    color: ${(props) => props.theme["gray-300"]};
  }

  :focus {
    box-shadow: ${(props) => props.theme.blue};
  }
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 14rem;
`;

export const PostContent = styled.div`
  width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme["gray-600"]};

  display: flex;
  flex-direction: column;

  border: 2px solid transparent;
  border-radius: 10px;
  padding: 2rem;
  gap: 1rem;

  cursor: pointer;

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    h1 {
      font-size: 1.25rem;
      color: ${(props) => props.theme["gray-100"]};
      flex-grow: 1;
      word-break: break-word;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-400"]};
      white-space: nowrap;
    }
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${(props) => props.theme["gray-300"]};
    line-height: 1.6;
    font-size: 1rem;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["gray-400"]};
  }
`;
