import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  margin: auto;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  div.info {
    flex: 1;
    height: 100%;

    .description {
      flex: 1;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #f2f2f2;
    }
  }

  div.rent {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;

    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }

  button {
    margin-top: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #60a5fa;
    color: #fff;
    padding: 0.6rem 1rem;
    float: right;

    transition: background-color 300ms ease-in;

    &:hover {
      background-color: #398ff9;
    }
  }
`;

// export const InputControl = styled.label`
//   color: #777;
//   font-weight: 300;
//   input {
//     margin-top: .5rem;
//     width: 90%;
//     padding: 0.5rem;
//     border: 1px solid #f2f2f2;
//     border-radius: 0.5rem;

//     &::placeholder {
//       color: #f2f2f2;
//     }

//     &:focus {
//       outline: solid 1px #c7c7c7;
//     }
//   }
// `;

export const Image = styled.img`
  display: flex;
  width: 640px;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 1rem;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #37474f;
`;

export const Subtitle = styled.p`
  color: #939393;
  padding-top: 0.5rem;
`;
