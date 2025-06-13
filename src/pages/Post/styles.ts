import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 8rem;
`;

export const PostContent = styled.div`
  width: 50rem;
  margin: 0 auto;
  padding: 0 2rem;

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.5rem 0 1rem;
  }

  pre {
    margin-top: 1rem;
    background-color: #112131;
    padding: 1rem;
    border-radius: 6px;
    color: #fff;
    font-family: monospace;
    overflow-x: auto;
  }
`;
