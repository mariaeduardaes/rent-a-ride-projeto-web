import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px red;
  background-color: '#000';
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  margin-top: 10px 0;
  background-color: 'blue';
  width: 180px;
  border-radius: 90px;
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const ProfileTextLine = styled.p`
  margin: 15px;
  color: #FFF;
`;

export const LogoutText = styled.span`
  color: #FFF;
  text-decoration: none;
`;

export const LogoutButton = styled.a`
  color: #FFF;
  text-decoration: underline;
`;
