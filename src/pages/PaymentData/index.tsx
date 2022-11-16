import React from 'react';
import { Form } from '../../components';

import * as S from './styles';

export const PaymentData = () => {

  const onSubmitHandler = (form, callback) => {
    console.log('Sign In submitted: ', form);
    callback();
  };

  return (
    <S.Container>
      <Form
        title={'Editar dado de pagamento'}
        formArr={formArr}
        submitBtn={'Salvar'}
        onSubmit={onSubmitHandler}
      />
    </S.Container>
  );
};

const formArr = [
  {
    label: 'Bandeira do cartão',
    name: 'card-flag',
    type: 'text',
  },
  {
      label: 'Número do cartão',
      name: 'card-number',
      type: 'text',
  },
  {
      label: 'Data de validade',
      name: 'expiring-date',
      type: 'month',
  },
  {
    label: 'Nome do titular',
    name: 'owner-name',
    type: 'text',
  },
  {
    label: 'Código de segurança',
    name: 'security-code',
    type: 'text',
  },
  {
    label: 'Número do CPF',
    name: 'CPF-number',
    type: 'text',
  },
];

export default PaymentData;