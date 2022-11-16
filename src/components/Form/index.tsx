// https://www.youtube.com/watch?v=UGU0PZduIFg&ab_channel=CodeFocus

import React, { useEffect, useState } from "react";

import * as S from "./styles";

interface Props {
  title: string,
  formArr: [],
  submitBtn: string,
  // onSubmit:() => void,
  redirect: any
}

const prepareForm = (formArr: Array<Object>) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: '' }), {});
}

export const Form = ({ title, formArr, submitBtn, onSubmit, redirect } : Props) => {

  const initialForm = prepareForm(formArr);
  // console.log(initialForm);
  const [form, setForm] = useState(formArr);

  const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  
  const onSubmitHandler = () => onSubmit(form, () => {
    console.log('função comp');
  });

  const hasRedirect = !!redirect;

  /* useEffect(() => {
    console.log(form);
  }, [form]); */

  return (
    <S.Form>
      <S.FormTitle>{title}</S.FormTitle>
      {formArr.map(({ label, name, type, placeholder }, index) => (
          <S.FormControl key={index} key={index}>
             <S.Label htmlFor={name}>{label}</S.Label>
            {/* {console.log(type)} */}
            <S.Input id={name} name={name} type={type} value={form[name]} placeholder={placeholder} onChange={(e) => onChangeHandler(e)} />
          </S.FormControl>
        ))}
      <S.Actions>
        <S.CancelButton>Cancelar</S.CancelButton>
        <S.SubmitionButton 
          onClick={(e) => {
            e.preventDefault();
            onSubmitHandler();
            }}>{submitBtn}</S.SubmitionButton>
      </S.Actions>
    </S.Form>
  );
};

Form.defaultProps = {
  title: 'Editar perfil',
  formArr: [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      placeholder: 'Maria',
    },
    {
      label: 'Sobrenome',
      name: 'surname',
      type: 'text',
      placeholder: 'Eduarda',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      placeholder: 'mariaeduarda@gmail.com',
    },
    {
      label: 'Data de nascimento',
      name: 'birthdate',
      type: 'date',
    },
    {
      label: 'Telefone',
      name: 'phone',
      type: 'phone',
      placeholder: '(99) 99999-9999',
    },
  ],
  submitBtn: 'Salvar',
  onSubmit: (form) => console.log(form),
}

export default Form;
