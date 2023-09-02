import { handleDirection } from "utils/navigationUtils";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "context/MainContext";



/**
 * Componente de barra de navegación secundaria que muestra opciones de navegación y promociones.
 *
 * Este componente muestra un conjunto de botones que permiten a los usuarios navegar a diferentes secciones
 * de la aplicación y activar el desplazamiento suave hacia la sección de "Promociones" al hacer clic en el botón "Promociones".
 *
 * @returns {JSX.Element} El elemento de barra de navegación secundaria.
 */

export const SubNavbar = () => {
  const { setShouldScrollToPromotions } = useContext(MainContext);

  const navigate = useNavigate();

  const handlePromotionsClick = () => {
    setShouldScrollToPromotions(true);
  };

  return (
    <div className="SubNavBar">
      <h1>Bienvenido a Strudel</h1>
      <h2>¡Despierta tus sentidos!</h2>

      <div className="buttons">
        <button onClick={() => handleDirection("menu", navigate)}>Menú</button>
        <button onClick={handlePromotionsClick}>Promociones</button>
        <button onClick={() => handleDirection("order", navigate)}>
          Ordena y Recoge
        </button>
      </div>
    </div>
  );
};
