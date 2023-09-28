import { MENU_BEBIDAS } from "./menus/menu-bebidas";
import { MENU_COMIDA } from "./menus/menu-comida";
import { MENU_DESAYUNO } from "./menus/menu-desayuno";
import { MENU_POSTRE } from "./menus/menu-postre";



export const MENUS_DATA = [
  {
    ...MENU_DESAYUNO,
  },

  {
    ...MENU_COMIDA,
  },
  {
    ...MENU_BEBIDAS,
  },
  {
    ...MENU_POSTRE,
  },
];
