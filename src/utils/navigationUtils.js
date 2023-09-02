/**
 * Función que maneja la dirección de navegación en función del elemento clicado.
 * @param {string} id - El ID del elemento a navegar.
 * @param {function} navigate - La función de navegación proporcionada por React Router.
 */
export const handleDirection = (id, navigate) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  navigate(`/${id}`);
};
