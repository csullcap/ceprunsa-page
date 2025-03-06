import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Layout principal que contiene elementos comunes (Navbar, Footer)
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default App;
