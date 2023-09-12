import { useState, useEffect } from 'react';

/**
 * Determina si la pantalla está actualmente desplazándose.
 *
 * @returns {boolean} Devuelve `true` si la pantalla está desplazándose hacia arriba o hacia abajo, de lo contrario, devuelve `false`.
 */


export default function useScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let isScrollingTimer;

    function handleScroll() {
      setIsScrolling(true);

      clearTimeout(isScrollingTimer);
      isScrollingTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Cambia el valor de tiempo de espera según tus necesidades
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [isScrolling];
}
