import styled from "styled-components";

export const Spinner = styled.div`
  margin-right: 7px;
  top: 2px;
  animation: spin 1s infinite linear;

  @keyframes spin {
    from {
      transform: scale(1) rotate(0deg);
    }
    to {
      transform: scale(1) rotate(360deg);
    }
  }
`;
