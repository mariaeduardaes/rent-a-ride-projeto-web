import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  background: #FFF;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const FormControl = styled.span`
  padding: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-left: 2px;
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  width: 14em;
  height: 24px;
  margin-top: 4px;

  :focus {
    border-bottom: 2px solid #60A5FA;
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
`;

export const CancelButton = styled.button`
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  border-color: #FFF;
  background: #FFF;
  color: #60A5FA;
`;

export const SubmitionButton = styled.button`
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  border-color: #60A5FA;
  background: #60A5FA;
  color: #FFF;
`;

export const Redirect = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const RedirectLabel = styled.span`
  
`;

export const RedirectLink = styled.div`
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  background: #000;
  color: #FFF;
`;