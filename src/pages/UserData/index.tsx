import React from "react";
import { Form } from "../../components";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

/* const notify = () => toast.error(
  'Por favor, preencha todos os campos', 
  {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }); */

import * as S from "./styles";

const onSubmitHandler = (form, callback) => {
  console.log("Register Submitted:", form);
  callback();
  // notify();
  console.log('aa');
};

export const UserData = () => {
  return (
    <S.Container>
      <Form onSubmit={onSubmitHandler} />
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </S.Container>
  );
};

export default UserData;