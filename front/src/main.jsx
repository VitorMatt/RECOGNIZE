import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./routes/router.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <RouterProvider router={router} ></RouterProvider>
  </GlobalContextProvider>,
);