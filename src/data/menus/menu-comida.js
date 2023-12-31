import comidas from "../../img/menus/comidas.jpg";
import sopa_de_tortillas from "../../img/menus/comida/sopa_de_tortillas.jpg"
import tacos_al_pastor from "../../img/menus/comida/tacos_al_pastor.jpg"
import ensalada_cesar from "../../img/menus/comida/ensalada_cesar.jpg"
import guacamole_and_chips from "../../img/menus/comida/guacamole_and_chips.jpg"
import club_sandwich from "../../img/menus/comida/club_sandwich.jpg"


export const MENU_COMIDA = {
    name: "Menú de Comida",
    id:"comida",
    background:comidas,
    items: [  {
        title: "Hamburguesa Clásica",
        size: "300 gr  de carne ",
        description: "Hamburguesa de carne de res, lechuga, tomate y cebolla con papas fritas.",
        price: 140,
        img: null,
      },
      {
        title: "Tacos al Pastor",
        size: "3 tacos",
        description: "Tacos de cerdo marinado con piña, cebolla y cilantro.",
        price: 120,
        img: tacos_al_pastor,
      },
      {
        title: "Sándwich de Pollo a la Parrilla",
        size: "1 sándwich",
        description: "Pechuga de pollo a la parrilla con lechuga, tomate y aderezo ranchero.",
        price: 130,
        img: null,
      },
      {
        title: "Quesadillas de Queso",
        size: "3 quesadillas",
        description: "Quesadillas de queso derretido servidas con guacamole y salsa.",
        price: 110,
        img: null,
      },
      {
        title: "Costillas BBQ",
        size: "400gr",
        description: "Costillas de cerdo a la barbacoa con maíz a la parrilla y papas.",
        price: 180,
        img: null,
      },
      {
        title: "Burrito de Carne Asada",
        size: "300gr",
        description: "Burrito relleno de carne asada, arroz, frijoles y salsa.",
        price: 150,
        img: null,
      },
      {
        title: "Ensalada César",
        size: "300gr",
        description: "Ensalada de lechuga romana, crutones, queso parmesano y aderezo césar.",
        price: 120,
        img: ensalada_cesar,
      },
      {
        title: "Nachos Supreme",
        size: "400gr",
        description: "Nachos con carne molida, queso derretido, jalapeños y crema agria.",
        price: 130,
        img: null,
      },
      {
        title: "Pollo Frito",
        size: "dos piezas de pollo frito con guarnición",
        description: "Pieza de pollo frito crujiente con papas fritas y salsa.",
        price: 140,
        img: null,
      },
      {
        title: "Tamales",
        size: "3 tamales",
        description: "Tamales de masa de maíz rellenos de pollo, carne o chiles.",
        price: 120,
        img: null,
      },
      {
        title: "Parrillada Mixta",
        size: "400gr",
        description: "Parrillada con carne de res, pollo, chorizo y nopales a la parrilla.",
        price: 180,
        img: null,
      },
      {
        title: "Papas a la Francesa",
        size: "300gr",
        description: "Papas fritas con queso cheddar y bacon.",
        price: 100,
        img: null,
      },
      {
        title: "Enchiladas Verdes",
        size: "3 enchiladas",
        description: "Enchiladas de pollo bañadas en salsa verde con crema y queso.",
        price: 130,
        img: null,
      },
      {
        title: "Club Sándwich",
        size: "1 sándwich",
        description: "Sándwich triple capa con bacon, pollo, lechuga, tomate y mayonesa.",
        price: 150,
        img: club_sandwich,
      },
      {
        title: "Queso Fundido",
        size: "1 porción",
        description: "Queso fundido con chorizo o champiñones, acompañado de tortillas.",
        price: 140,
        img: null,
      },
      {
        title: "Chicken Tenders",
        size: "6 piezas",
        description: "Tiras de pollo empanizadas con salsa de mostaza y miel.",
        price: 120,
        img: null,
      },
      {
        title: "Tacos de Barbacoa",
        size: "3 tacos",
        description: "Tacos de barbacoa de res con cebolla, cilantro y salsa.",
        price: 130,
        img: null,
      },
      {
        title: "Sopa de Frijoles",
        size: "300gr",
        description: "Sopa de frijoles negros con crema agria y tortillas.",
        price: 110,
        img: null,
      },
      {
        title: "Bistec a la Mexicana",
        size: "1 porción",
        description: "Bistec a la mexicana con cebolla, chiles y tomate.",
        price: 160,
        img: null,
      },
      {
        title: "Hamburguesa Vegetariana",
        size: "1 hamburguesa",
        description: "Hamburguesa de garbanzos con lechuga, tomate y mayonesa vegana.",
        price: 140,
        img: null,
      },
      {
        title: "Tacos de Carnitas",
        size: "3 tacos",
        description: "Tacos de carnitas de cerdo con cebolla y salsa roja.",
        price: 120,
        img: null,
      },
      {
        title: "Chicken Alfredo",
        size: "400gr",
        description: "Pasta con pollo en salsa Alfredo cremosa y queso parmesano.",
        price: 150,
        img: null,
      },
      {
        title: "Guacamole y Chips",
        size: "250gr",
        description: "Guacamole casero con chips de tortilla.",
        price: 100,
        img: guacamole_and_chips,
      },
      {
        title: "Cheesesteak Philly",
        size: "1 sándwich",
        description: "Sándwich con carne asada, cebolla, pimientos y queso provolone.",
        price: 160,
        img: null,
      },
      {
        title: "Chili con Carne",
        size: "400gr",
        description: "Chili con carne y frijoles, servido con queso cheddar y cebolla.",
        price: 140,
        img: null,
      },
      {
        title: "Tacos de Pollo",
        size: "3 tacos",
        description: "Tacos de pollo con cebolla, cilantro y salsa de aguacate.",
        price: 120,
        img: null,
      },
      {
        title: "Sopa de Tortilla",
        size: "400ml",
        description: "Sopa de tortilla con aguacate, queso y crema agria.",
        price: 110,
        img: sopa_de_tortillas,
      },
    ],
    extras:[
      {
        title: "Huevo Adicional",
        size: "1 huevo",
        description: "Agrega un huevo adicional a tu plato.",
        price: 15,
      },
      {
        title: "Aguacate",
        size: "1/2 aguacate",
        description: "Agrega medio aguacate a tu plato.",
        price: 20,
      },
      {
        title: "Champiñones Salteados",
        size: "100gr",
        description: "Agrega champiñones salteados a tu plato.",
        price: 15,
      },
      {
        title: "Pimientos Asados",
        size: "100gr",
        description: "Agrega pimientos asados a tu plato.",
        price: 15,
      },
      {
        title: "Cebolla Caramelizada",
        size: "30gr",
        description: "Agrega cebolla caramelizada a tu plato.",
        price: 10,
      },
      {
        title: "Queso Extra",
        size: "50gr",
        description: "Agrega queso extra a tu plato.",
        price: 15,
      },
      {
        title: "Tocino Adicional",
        size: "2 tiras",
        description: "Agrega dos tiras de tocino extra a tu plato.",
        price: 20,
      },
      {
        title: "Papas Fritas Extra",
        size: "100gr",
        description: "Agrega 100 gramos de papas fritas extra a tu plato.",
        price: 15,
      },
      {
        title: "Salsa Extra",
        size: "30ml",
        description: "Agrega una porción extra de salsa a tu plato.",
        price: 10,
      },
      {
        title: "Guacamole",
        size: "50gr",
        description: "Agrega guacamole a tu plato.",
        price: 30,
      },
      {
        title: "Frijoles Refritos",
        size: "100gr",
        description: "Agrega frijoles refritos a tu plato.",
        price: 15,
      },
      {
        title: "Tortillas Extra",
        size: "3 tortillas",
        description: "Agrega tres tortillas extra a tu plato.",
        price: 10,
      },
      {
        title: "Salsa Picante",
        size: "30ml",
        description: "Agrega salsa picante a tu plato.",
        price: 10,
      },
      {
        title: "Crema Agria",
        size: "30ml",
        description: "Agrega crema agria a tu plato.",
        price: 10,
      },
      {
        title: "Arroz Extra",
        size: "100gr",
        description: "Agrega 100 gramos de arroz extra a tu plato.",
        price: 10,
      },
    ]
}