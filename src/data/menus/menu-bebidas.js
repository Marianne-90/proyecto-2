import bebidas from "../../img/menus/bebidas.jpg";

import expresso from "../../img/menus/bebidas/expresso.jpg";
import mocca from "../../img/menus/bebidas/mocca.jpg";
import americano from "../../img/menus/bebidas/americano.jpg";
import malteada_chocolate from "../../img/menus/bebidas/malteada_chocolate.jpg";

export const MENU_BEBIDAS = {
  name: "Menú de Bebidas",
  id: "bebida",
  background: bebidas,
  items: [
    {
      title: "Café Americano",
      size: "250ml",
      description: "Café negro, fuerte y aromático.",
      price: 35,
      img: americano,
    },
    {
      title: "Latte",
      size: "350ml",
      description: "Café espresso con leche caliente y espuma de leche.",
      price: 45,
      img: null,
    },
    {
      title: "Cappuccino",
      size: "350ml",
      description: "Café espresso con leche vaporizada y espuma de leche.",
      price: 50,
      img: null,
    },
    {
      title: "Mocha",
      size: "350ml",
      description: "Café espresso con chocolate caliente y crema batida.",
      price: 55,
      img: mocca,
    },
    {
      title: "Café Frío",
      size: "450ml",
      description: "Café negro enfriado con hielo y azúcar.",
      price: 40,
      img: null,
    },
    {
      title: "Espresso Doble",
      size: "60ml",
      description: "Doble shot de café espresso intenso.",
      price: 50,
      img: null,
    },
    {
      title: "Café Vainilla",
      size: "350ml",
      description: "Café espresso con esencia de vainilla y leche vaporizada.",
      price: 55,
      img: null,
    },
    {
      title: "Café Caramelo",
      size: "350ml",
      description: "Café espresso con jarabe de caramelo y crema batida.",
      price: 55,
      img: null,
    },
    {
      title: "Café Menta",
      size: "350ml",
      description: "Café espresso con extracto de menta y leche caliente.",
      price: 55,
      img: null,
    },
    {
      title: "Mocha Blanco",
      size: "350ml",
      description:
        "Café espresso con chocolate blanco caliente y crema batida.",
      price: 60,
      img: null,
    },
    {
      title: "Malteada de Fresa",
      size: "450ml",
      description: "Malteada cremosa de fresa con helado de vainilla.",
      price: 65,
      img: null,
    },
    {
      title: "Malteada de Chocolate",
      size: "450ml",
      description:
        "Malteada de chocolate con helado de chocolate y crema batida.",
      price: 65,
      img: malteada_chocolate,
    },
    {
      title: "Malteada de Vainilla",
      size: "450ml",
      description: "Malteada de vainilla con helado de vainilla y galletas.",
      price: 65,
      img: null,
    },
    {
      title: "Café Irlandés",
      size: "250ml",
      description: "Café con whisky irlandés, azúcar y crema batida.",
      price: 70,
      img: null,
    },
    {
      title: "Café Descafeinado",
      size: "250ml",
      description: "Café sin cafeína, suave y de sabor equilibrado.",
      price: 40,
      img: null,
    },
    {
      title: "Café Miel y Canela",
      size: "350ml",
      description: "Café espresso con miel, canela y leche vaporizada.",
      price: 55,
      img: null,
    },
    {
      title: "Café Macchiato",
      size: "250ml",
      description: "Café espresso con una pizca de leche vaporizada.",
      price: 45,
      img: null,
    },
    {
      title: "Café Espresso Corto",
      size: "30ml",
      description: "Shot pequeño de café espresso concentrado.",
      price: 35,
      img: expresso,
    },
    {
      title: "Café Espresso Largo",
      size: "60ml",
      description: "Shot doble de café espresso alargado.",
      price: 45,
      img: null,
    },
    {
      title: "Café Vainilla Frío",
      size: "450ml",
      description: "Café espresso con esencia de vainilla, hielo y leche.",
      price: 60,
      img: null,
    },
  ],
  extras: [
    {
      title: "Shot de Espresso Adicional",
      size: "30ml",
      description: "Agrega un shot adicional de espresso a tu bebida.",
      price: 20,
    },
    {
      title: "Crema Batida",
      size: "30ml",
      description: "Agrega crema batida a tu bebida de café.",
      price: 15,
    },
    {
      title: "Canela en Polvo",
      size: "1 cucharadita",
      description: "Agrega una cucharadita de canela en polvo a tu café.",
      price: 10,
    },
    {
      title: "Chocolate en Polvo",
      size: "1 cucharadita",
      description: "Agrega una cucharadita de chocolate en polvo a tu bebida.",
      price: 10,
    },
    {
      title: "Jarabe de Vainilla",
      size: "30ml",
      description: "Agrega jarabe de vainilla a tu bebida de café.",
      price: 15,
    },
    {
      title: "Nata Montada",
      size: "30ml",
      description: "Agrega nata montada a tu bebida de café.",
      price: 15,
    },
    {
      title: "Caramelo",
      size: "30ml",
      description: "Agrega jarabe de caramelo a tu bebida de café.",
      price: 15,
    },
    {
      title: "Leche de Almendras",
      size: "250ml",
      description: "Sustituye la leche regular con leche de almendras.",
      price: 20,
    },
    {
      title: "Leche de Coco",
      size: "250ml",
      description: "Sustituye la leche regular con leche de coco.",
      price: 20,
    },
    {
      title: "Leche de Avena",
      size: "250ml",
      description: "Sustituye la leche regular con leche de avena.",
      price: 20,
    },
  ],
};
