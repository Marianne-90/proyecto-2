import "./App.css";
import { ProyectRoutes } from "routes/ProyectRoutes";
import { MainProvider } from "context/MainProvider";
import { Footer } from "components/Footer";

function App() {
  return (
    <MainProvider>
      <ProyectRoutes />
    </MainProvider>
  );
}

export default App;
