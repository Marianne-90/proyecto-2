import postres from "../../img/menus/postres.jpg";
import pastel_chocolate from "../../img/menus/postres/pastel_chocolate.jpg"
import helado from "../../img/menus/postres/helado.jpg"
import arroz_con_leche from "../../img/menus/postres/arroz con leche.jpg"
import churros from "../../img/menus/postres/churros.jpg"


export const MENU_POSTRE = {
  name: "Menú de Postres",
  id: "postre",
  background: postres,
  items: [
    {
      title: "Pastel de Chocolate",
      size: "300gr",
      description:
        "Delicioso pastel de chocolate cubierto de crema de chocolate.",
      price: 60,
      img: pastel_chocolate,
    },
    {
      title: "Tres Leches",
      size: "300gr",
      description:
        "Pastel empapado en tres tipos de leche, decorado con crema batida.",
      price: 70,
      img: null,
    },
    {
      title: "Brownie Sundae",
      size: "300gr",
      description:
        "Brownie caliente con helado de vainilla, salsa de chocolate y nueces.",
      price: 80,
      img: null,
    },
    {
      title: "Churros con Chocolate",
      size: "6 churros",
      description:
        "Churros crujientes servidos con salsa de chocolate caliente.",
      price: 65,
      img: churros,
    },
    {
      title: "Cheesecake de Fresa",
      size: "1 porción",
      description:
        "Cheesecake con topping de fresas frescas y salsa de frutos rojos.",
      price: 75,
      img: null,
    },
    {
      title: "Helado de Vainilla",
      size: "1 bola",
      description: "Helado de vainilla con opción de toppings y salsas.",
      price: 45,
      img: null,
    },
    {
      title: "Tiramisú",
      size: "250gr",
      description:
        "Postre italiano con capas de bizcocho de café y crema de mascarpone.",
      price: 70,
      img: null,
    },
    {
      title: "Flan",
      size: "300gr",
      description: "Flan casero con caramelo y crema batida.",
      price: 55,
      img: null,
    },
    {
      title: "Malteada de Chocolate",
      size: "400ml",
      description:
        "Malteada cremosa de chocolate con crema batida y virutas de chocolate.",
      price: 65,
      img: null,
    },
    {
      title: "Chocoflan",
      size: "250gr",
      description: "Combinación de pastel de chocolate y flan, con caramelo.",
      price: 75,
      img: null,
    },
    {
      title: "Pie de Manzana",
      size: "250gr",
      description:
        "Pie de manzana caliente con una bola de helado de vainilla.",
      price: 70,
      img: null,
    },
    {
      title: "Arroz con Leche",
      size: "300ml",
      description:
        "Arroz con leche cremoso, canela y pasas al estilo tradicional.",
      price: 60,
      img: arroz_con_leche,
    },
    {
      title: "Crepas de Nutella y Plátano",
      size: "2 crepas",
      description:
        "Crepas rellenas de Nutella y plátano, espolvoreadas con azúcar glas.",
      price: 75,
      img: null,
    },
    {
      title: "Helado de Tres Sabores",
      size: "200gr",
      description:
        "Tres bolas de helado con sabores a elección, servidas con galletas.",
      price: 70,
      img: helado,
    },
    {
      title: "Cajeta con Queso",
      size: "200gr",
      description: "Postre mexicano de cajeta con queso crema y nueces.",
      price: 65,
      img: null,
    },
  ],
};
