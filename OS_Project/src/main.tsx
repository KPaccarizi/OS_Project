import React from "react";
import ReactDOM from "react-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import { AuthContextProvider } from "@context/AuthContext/AuthContextProvider";
import { WindowContextProvider } from "@context/WindowContext/WindowContextProvider";
import { ConfirmationContextProvider } from "@context/Confirmation/ConfirmationContextProvider";

import "./styles/index.css";
import { UIContextProvider } from "@context/UIContext/UIContextProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ConfirmationContextProvider>
          <WindowContextProvider>
            <UIContextProvider>
              <App />
            </UIContextProvider>
          </WindowContextProvider>
        </ConfirmationContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
