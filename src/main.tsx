import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "normalize.css";
import "./styles/reset.css";
import "./styles/global.css";
import { RentCarProvider } from "./hooks/useRentCar";
import { AuthProvider } from "./hooks/useAuth";
import { ApiInterceptor } from "./interceptors/api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <RentCarProvider>
      <App />
    </RentCarProvider>

    <ApiInterceptor />
  </AuthProvider>
);
