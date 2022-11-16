import styled from "styled-components";
import { StatusEnum } from "../../enums/rent";

export const Container = styled.div`
  width: 1280px;
  padding: 1rem 0;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid #f2f2f2;
  border-radius: 0.5rem;
  overflow: hidden;

  & + div {
    margin-top: 1rem;
  }

  img {
    height: 100%;
    max-height: 152px;
    width: 240px;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: #333;
  font-weight: 300;

  div.car {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-weight: bold;
      font-size: 1.5rem;
    }

    p:nth-child(2) {
      font-size: 0.875rem;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;

      span {
        font-weight: 400;
      }
    }
  }

  div.rent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    div:first-child {
      flex: 1;
    }
  }
`;

const statusColors: { [key: string]: string } = {
    [StatusEnum.AGUARDANDO_RETIRADA]: "#5c5f61",
    [StatusEnum.EM_ANDAMENTO]: "#209ce3",
    [StatusEnum.CONCLUIDA]: "#20e36b",
    [StatusEnum.CANCELADA]: "#ff4a4a",
};

interface ILabelStatus {
  status: StatusEnum;
}

export const LabelStatus = styled.div<ILabelStatus>`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => statusColors[props.status] || statusColors[StatusEnum.AGUARDANDO_RETIRADA]};
`;
