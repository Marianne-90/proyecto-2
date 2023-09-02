import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [isMenuClicked, setisMenuClicked] = useState(false);
  const [goingDown, setGoingDown] = useState(false);

  const navigate = useNavigate();

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

  //*? Lo de abajo es para controlar si la pantalla está bajando, he pensado volverlo un custom hook pero no se si lo voy a volver a utilizar

  useEffect(() => {
    let scrollPos = window.scrollY;

    function handleScroll() {
      //*? si el valor guardado previamente es menor al valor de y de la ventana entonces está bajando
      if (window.scrollY > scrollPos) {
        setisMenuClicked(false);
        setGoingDown(true);
      } else {
        setGoingDown(false);
      }
      scrollPos = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
