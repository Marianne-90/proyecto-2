import { Home, Menus, Order, WorkBox, ContactAndUbication } from "pages";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "components/Navbar";

export const ProyectRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menus />} />
        <Route path="order" element={<Order />} />
        <Route path="work" element={<WorkBox />} />
        <Route path="contact" element={<ContactAndUbication />} />
      </Routes>
    </BrowserRouter>
  );
};
