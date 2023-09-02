import { useEffect, useState } from "react";

/**
 *
 * @returns {Boolean} // devuelve verdadero o falso dependiendo si la pantalla esta bajando o subiendo
 */

export default function useScreenGoingDown() {
  const [goingDown, setGoingDown] = useState(false);

  //*? Lo de abajo es para controlar si la pantalla está bajando
  useEffect(() => {
    let scrollPos = window.scrollY;

    function handleScroll() {
      //*? si el valor guardado previamente es menor al valor de y de la ventana entonces está bajando
      if (window.scrollY > scrollPos) {
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
  return [goingDown];
}
