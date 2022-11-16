import styled from "styled-components";

export const InputControl = styled.label`
  color: #333;
  font-weight: 300;
  display: block;

  input {
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #f2f2f2;
    border-radius: 0.5rem;

    &::placeholder {
      color: #c7c7c7;
    }

    &:focus {
      outline: solid 1px #c7c7c7;
    }
  }
`;
