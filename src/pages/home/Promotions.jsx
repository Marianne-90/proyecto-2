import { useContext, useRef, useEffect, useState } from "react";
import { MainContext } from "context/MainContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import usePromotionsGallery from "hooks/usePromotionsGallery";
import { PROMOTIONS_DATA } from "data/promotions-data";

/**
 * Componente Promotions: Muestra una galería de promociones con navegación automática y manual.
 *
 * Este componente muestra una galería de promociones con la capacidad de navegar manualmente
 * utilizando botones de izquierda y derecha, así como una función de desplazamiento suave
 * hacia la sección de "Promociones" cuando se activa desde otra parte de la aplicación.
 *
 * @returns {JSX.Element} El elemento de la galería de promociones.
 */

export const Promotions = () => {
  const { shouldScrollToPromotions, setShouldScrollToPromotions } =
    useContext(MainContext);

  useEffect(() => {
    // Si shouldScrollToPromotions es true, realiza el desplazamiento suave
    if (shouldScrollToPromotions) {
      promotionsRef.current.scrollIntoView({ behavior: "smooth" });
      setShouldScrollToPromotions(false);
    }
  }, [shouldScrollToPromotions]);

  const promotionsRef = useRef(null);

  const promotionsRefs = Array.from({ length: PROMOTIONS_DATA.length }, () =>
    useRef(null)
  );

  const { currentIndex, nextSlide, prevSlide } = usePromotionsGallery(
    PROMOTIONS_DATA,
    8000
  );

  useEffect(() => {
    PROMOTIONS_DATA.map((promo, index) => {
      const slider = promotionsRefs[index].current;
      slider.style.transition = "left 0.5s ease-in-out";
      slider.style.left = `-${currentIndex * 100}%`;

      return () => {
        slider.style.transition = "none";
      };
    });
  }, [currentIndex]);

  return (
    <div className="promotions" ref={promotionsRef}>
      <div className="promotionsContainer">
        <button className="left" onClick={prevSlide}>
          <AiOutlineArrowLeft size={25} />
        </button>
        {PROMOTIONS_DATA.map((promo, index) => (
          <div
            ref={promotionsRefs[index]}
            className="promoElement"
            key={promo.id}
            style={{
              left: `${index * 100}%`,
            }}
          >
            <div className="description">
              <p className="title">{promo.name}</p>
              <p className="des">{promo.description}</p>
            </div>
            <div className="price">
              <p>{promo.price}</p>
            </div>
          </div>
        ))}
        <button className="right" onClick={nextSlide}>
          <AiOutlineArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};
