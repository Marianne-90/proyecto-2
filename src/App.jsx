import "./App.css";
import { ProyectRoutes } from "routes/ProyectRoutes";
import { MainProvider } from "context/MainProvider";
import { Footer } from "components/Footer";

function App() {
  return (
    <MainProvider>
      <ProyectRoutes />
      <Footer />
    </MainProvider>
  );
}

export default App;
