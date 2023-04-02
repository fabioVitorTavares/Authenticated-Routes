import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./Context/Context";
import RoutesApp from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <RoutesApp />
    </ContextProvider>
  </React.StrictMode>
);
