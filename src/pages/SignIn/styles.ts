import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  max-width: 360px;
  margin: 3rem auto;
`;

export const Form = styled.form`
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  div {
    padding: 1rem;
  }

  div:first-child {
    border-bottom: 1px solid #e7e7e7;

    h1 {
      text-align: center;
      font-size: 1.25rem;
      color: #333;
    }
  }

  div:not(:first-child, :last-child) {
    border-bottom: 1px solid #e7e7e7;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: #333;
      cursor: pointer;

      display: flex;
      align-items: center;
      border-radius: .5rem;
      padding: 0.5rem 1.5rem;
      font-size: .875rem;
      font-family: "Roboto";
      cursor: pointer;

      transition: all 200ms ease-in-out;

      &:hover {
        background-color: #e7e7e7;
      }
    }

    button {
      display: flex;
      align-items: center;
      text-decoration: none;
      border-radius: 0.5rem;
      background-color: #60a5fa;
      color: #fff;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      font-family: "Roboto";
      cursor: pointer;

      transition: all 200ms ease-in-out;

      &:hover {
        background: #93c5fd;
      }
    }
  }
`;
