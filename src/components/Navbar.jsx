import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useScreenGoingDown from "hooks/useScreenGoingDown";

/**
 * Componente de barra de navegación para una aplicación de restaurante. Controla la navegación y la interacción del menú desplegable.
 *
 * Este componente muestra el logotipo del restaurante y una lista de elementos de navegación, como "Inicio", "Menús", "Contacto", "Ordenar" y "Bolsa de Trabajo".
 * Puede abrir y cerrar el menú desplegable al hacer clic en el icono de menú.
 *
 * @component
 * @example
 * <Navbar />
 *
 * @returns {JSX.Element} El elemento de barra de navegación.
 */

export const Navbar = () => {
  const [isMenuClicked, setisMenuClicked] = useState(false);
  const navigate = useNavigate();
  const [goingDown] = useScreenGoingDown();

  //*? aquí pongo los elementos del menú para que sea más fácil de mantener y escalar, solo en caso de que aumenten alguno recuerden actualizar el css

  const NAVBAR_ELEMENTS = [
    {
      name: "inicio",
      id: "home",
    },
    {
      name: "menus",
      id: "menu",
    },
    {
      name: "contacto",
      id: "contact",
    },
    {
      name: "ordenar",
      id: "order",
    },
    {
      name: "bolsa de trabajo",
      id: "work",
    },
  ];

  //*? esto escucha si el goingDown es para abajo y en caso que lo sea regresa el menú desplegable a su lugar

  useEffect(() => {
    goingDown && setisMenuClicked(false);
  }, [goingDown]);

  //*? Esta función evalúa el id del elemento del listo y sobre eso es que asigna la nueva navegación
  const handleDirection = (e) => {
    let id = e.target.id;
    window.scrollTo({ top: 0, behavior: "smooth" }); //*? esto es para subir la página de forma suave para comenzar la navegación desde arriba
    navigate(`/${id}`);
  };

  //*? extraí esto del return final para mantener el principio de código limpio o sea que sea más fácil de leer, actualizar y escalar en caso de ser necesario
  const showMenu = () => {
    return (
      isMenuClicked && (
        <div className="menuElements">
          <ul>
            {NAVBAR_ELEMENTS.map((element) => {
              return (
                <li
                  key={element.name}
                  id={element.id}
                  onClick={handleDirection}
                >
                  {element.name}
                </li>
              );
            })}
          </ul>
        </div>
      )
    );
  };

  return (
    <nav className={goingDown ? "subirNav" : ""}>
      <div className="logoContainer">
        <p>
          <span>Strudel</span> <span>Restaurante</span>
        </p>
      </div>
      <div
        className={
          isMenuClicked ? "menuContainer menuContainerClic" : "menuContainer"
        }
      >
        {showMenu()}
        <div className="menuIcon">
          <button onClick={() => setisMenuClicked(!isMenuClicked)}>
            {isMenuClicked ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
