import { useState } from "react";
import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {
  const [orderList, setOrderList] = useState({ items: {}, extra: {} });
  const [shouldScrollToPromotions, setShouldScrollToPromotions] =
    useState(false);

  return (
    <MainContext.Provider
      value={{
        orderList,
        setOrderList,
        shouldScrollToPromotions,
        setShouldScrollToPromotions,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
