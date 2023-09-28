import { useState } from "react";
import { MenuOptions } from "./MenuOptions";

export const MenuItems = ({ element, viewMenu, setViewMenu }) => {
  const handleClic = () => {
    let newMenuState = {
      desayuno: false,
      comida: false,
      bebida: false,
      postre: false,
    };
    let activeMenu = element.id;
    let state = !viewMenu[element.id];

    newMenuState[activeMenu] = state;
    setViewMenu(newMenuState);
  };

  return (
    <div className="menuContainer">
      <div className="title" onClick={handleClic}>
        <h2>{element.name}</h2>
        <div className="background">
          <img src={element.background} alt={element.name} />
        </div>
      </div>
      {viewMenu[element.id] && (
        <MenuOptions items={element.items} extras={element.extras} />
      )}
    </div>
  );
};
