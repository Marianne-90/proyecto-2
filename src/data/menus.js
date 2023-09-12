import test from "img/menus/desayuno/test.jpg";
import desayunos from "img/menus/desayunos.jpg"
import comidas from "img/menus/comidas.jpg"
import bebidas from "img/menus/bebidas.jpg"
import postres from "img/menus/postres.jpg"

export const MENUS_DATA = [
  {
    name: "Menú de desayuno",
    id:"desayuno",
    background:desayunos,
    items: [
      {
        img: {
          name: "test",
          src: test,
        },
      },
    ],
  },

  {
    name: "Menú de Comida",
    id:"comida",
    background:comidas,
    items: [],
  },
  {
    name: "Menú de Bebidas",
    id:"bebida",
    background:bebidas,
    items: [],
  },
  {
    name: "Menú de Postres",
    id:"postre",
    background:postres,
    items: [],
  },
];
