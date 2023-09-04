import { useEffect, useRef, useState } from "react";


/**
 * Custom Hook usePromotionsGallery: Gestiona una galería de promociones con navegación automática y manual.
 *
 * Este hook permite gestionar una galería de promociones con la capacidad de navegar manualmente
 * utilizando funciones `nextSlide` y `prevSlide`, así como una navegación automática con un intervalo de tiempo específico.
 *
 * @param {Array} promotions - El arreglo de promociones a mostrar en la galería.
 * @param {number} time - El tiempo en milisegundos entre transiciones automáticas de diapositivas.
 * @returns {Object} Un objeto con el estado actual de la galería y funciones para navegar por ella.
 */

export default function usePromotionsGallery(promotions, time) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % promotions.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + promotions.length) % promotions.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, time);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
  };
}
