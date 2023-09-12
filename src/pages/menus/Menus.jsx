import { MENUS_DATA } from "src/data/menus";
import "./style.css";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

export const Menus = () => {
  const [viewMenu, setViewMenu] = useState({
    desayuno: false,
    comida: false,
    bebida: false,
    postre: false,
  });

  return (
    <div className="menus pages">
      {MENUS_DATA.map((element, index) => {
        return (
          <MenuItems
            element={element}
            key={element.id}
            viewMenu={viewMenu}
            setViewMenu={setViewMenu}
          />
        );
      })}
    </div>
  );
};
