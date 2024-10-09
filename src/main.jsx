import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Cake from "./components/Cake/Cake.jsx";
import AddCake from "./components/Cake/CakeAdd.jsx";
import Chef from "./components/Chef/Chef.jsx";
import EditCake from "./components/Cake/CakeEdit.jsx";

const router = createBrowserRouter([
  {
    path: "/PTS-FE",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/cake",   
    element: <Cake/>
  },
  {
    path: "/chef",
    element: <Chef/>
  },
  {
    path: "/cake/add",
    element: <AddCake/>
  },
  {
    path: "/cake/edit/:id",
    element: <EditCake/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
