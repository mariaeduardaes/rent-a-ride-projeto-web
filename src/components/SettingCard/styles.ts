import styled from "styled-components";

export const SettingContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  border-radius: 2px;
  background-color: '#000';
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background: #cce4ff;
  }
`;

export const Image = styled.img`
  background-color: 'blue';
  width: 20px;
`;

export const SettingText = styled.div`
  color: 'red';
  display: flex;
  align-items: center;
`;
