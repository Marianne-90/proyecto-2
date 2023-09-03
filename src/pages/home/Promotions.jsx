import { useContext, useRef, useEffect } from "react";
import { MainContext } from "context/MainContext";

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

  return (
    <div id="promotions" ref={promotionsRef}>
      <h2>Promotions</h2>
    </div>
  );
};
