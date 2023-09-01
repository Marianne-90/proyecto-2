import { useState } from "react";
import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([]);

  return (
    <MainContext.Provider
      value={{
        orderList,
        setOrderList,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
