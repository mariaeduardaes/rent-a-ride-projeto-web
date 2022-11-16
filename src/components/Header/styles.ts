import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  div {
  }
`;

export const Content = styled.div`
  padding: 0 2rem;
  height: 96px;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-family: "Courgette", sans-serif;
  color: #60a5fa;
  font-size: 2.5rem;
  text-decoration: none;
`;

export const SignIn = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  border-radius: .5rem;
  background-color: #60a5fa;
  color: #fff;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  font-weight: normal;
  font-family: "Roboto";
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background: #93c5fd;
  }
`;

export const SignUp = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 1px solid #60a5fa;
  background-color: #fff;
  color: #60a5fa;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  font-family: "Roboto";
  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover {
    background: #eff6ff;
  }
`;

export const LoggedUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > div:first-child {
    border-radius: 50%;
    background-color: #b1b1b1;
    padding: 0.5rem;
  }

  & > div:not(:first-child) {
    border-left: 1px solid #e7e7e7;
    padding: 0 1rem;

    & p > strong {
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      gap: .25rem;

      a, button {
        margin-top: 0.25rem;
        text-decoration: none;
        color: #333;
        cursor: pointer;

        display: flex;
        align-items: center;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 0.75rem;
        font-family: "Roboto";
        cursor: pointer;

        transition: all 200ms ease-in-out;

        &:hover {
          background-color: #e7e7e7;
        }
      }
    }
  }
`;
