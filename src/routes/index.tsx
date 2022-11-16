import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MyRents } from "../pages/MyRents";
import { Rent } from "../pages/Rent";
import { SignIn } from "../pages/SignIn";

import { Home, Profile, UserData, PaymentData, Car } from "./../pages";

const AppRouter = () => {
  const {
    data: { signed },
  } = useAuth();

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="carros/:id" element={<Car />} />
      </Route>

      <Route path="/entrar">
        <Route index element={<SignIn />} />
      </Route>

      {signed && (
        <>
          <Route path="/minhas-reservas">
            <Route index element={<MyRents />} />
          </Route>

          <Route path="/alugar">
            <Route index element={<Rent />} />
          </Route>

          <Route path="/Profile">
            <Route index element={<Profile />} />
          </Route>

          <Route path="/UserData">
            <Route index element={<UserData />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
