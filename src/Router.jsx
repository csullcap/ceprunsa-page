import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Processes from "./pages/Processes";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import App from "./App";
import { Import } from "lucide-react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Este es tu layout principal
    children: [
      { index: true, element: <Home /> },
      { path: "nosotros", element: <About /> },
      { path: "procesos", element: <Processes /> },
      { path: "contacto", element: <Contact /> },
      { path: "trabaja-con-nosotros", element: <Careers /> },
    ],
  },
]);
