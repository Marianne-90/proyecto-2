import { useContext, useState } from "react";
import { MainContext } from "context/MainContext";


/**
 * Custom Hook useOrder: Gestiona una lista de pedidos en un contexto compartido.
 *
 * Este hook permite gestionar una lista de pedidos dentro de un contexto compartido. Proporciona
 * funciones para agregar, reducir, eliminar elementos y calcular el total de la lista de pedidos.
 *
 * @returns {Object} Un objeto con funciones para interactuar con la lista de pedidos.
 */


export default function useOrder() {
  const { orderList, setOrderList } = useContext(MainContext);


    /**
   * Obtiene un arreglo de todos los elementos de pedido.
   * @returns {Array} Un arreglo de elementos de pedido.
   */

  const arrayItems = () => {
    return Object.values(orderList["items"]);
  };

    /**
   * Obtiene un arreglo de elementos extra de pedido.
   * @returns {Array} Un arreglo de elementos extra de pedido.
   */

  const arrayExtra = () => {
    return Object.values(orderList["extra"]);
  };

    /**
   * Calcula el total de la lista de pedidos sumando los precios de los elementos y los elementos extra.
   * @returns {number} El precio total de la lista de pedidos.
   */

  const handleTotal = () => {
    const itemsArray = Object.values(orderList["items"]);
    const extraArray = Object.values(orderList["extra"]);

    const ArrayPriceSum = itemsArray.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    const extraPriceSum = extraArray.reduce(
      (total, extra) => total + extra.totalPrice,
      0
    );    

  const totalPriceSum = ArrayPriceSum + extraPriceSum;
    return totalPriceSum;
  };

    /**
   * Elimina un elemento de la lista de pedidos.
   * @param {string} type - El tipo de elemento a eliminar (por ejemplo, 'items' o 'extra').
   * @param {string} title - El título del elemento a eliminar.
   */

  const handleDelete = (type, title) => {
    let orders = { ...orderList };
    delete orders[type][title];

    setOrderList(orders);
  };

    /**
   * Reduce la cantidad de un elemento de pedido en la lista.
   * @param {string} type - El tipo de elemento a reducir (por ejemplo, 'items' o 'extra').
   * @param {string} title - El título del elemento a reducir.
   */

  const handleReduce = (type, title) => {
    let orders = { ...orderList };
    if (orders[type][title]["quantity"] > 1) {
      orders[type][title]["quantity"] -= 1;
      orders[type][title]["totalPrice"] =
        orders[type][title]["quantity"] *
        orders[type][title]["individualPrice"];
      setOrderList(orders);
    }
  };

    /**
   * Agrega un elemento a la lista de pedidos.
   * @param {string} type - El tipo de elemento a agregar (por ejemplo, 'items' o 'extra').
   * @param {string} title - El título del elemento a agregar.
   * @param {number} price - El precio individual del elemento a agregar.
   */

  const handleAddItem = (type, title) => {
    let orders = { ...orderList };

    orders[type][title]["quantity"] += 1;
    orders[type][title]["totalPrice"] =
      orders[type][title]["quantity"] * orders[type][title]["individualPrice"];

    setOrderList(orders);
  };

    /**
   * Agrega un elemento a la lista de pedidos o actualiza la cantidad si ya existe.
   * @param {string} type - El tipo de elemento a agregar (por ejemplo, 'items' o 'extra').
   * @param {string} title - El título del elemento a agregar.
   * @param {number} price - El precio individual del elemento a agregar.
   */

  const handleAdd = (type, title, price) => {
    let orders = { ...orderList };
    if (orders[type][title]) {
      orders[type][title]["quantity"] += 1;
      orders[type][title]["totalPrice"] =
        orders[type][title]["quantity"] *
        orders[type][title]["individualPrice"];

      console.log("actualizado", orders);
      setOrderList(orders);
      return;
    }
    orders[type][title] = {
      title: title,
      individualPrice: price,
      totalPrice: price,
      quantity: 1,
    };
    console.log("añadido", orders);
    setOrderList(orders);
  };

  return {
    handleAdd,
    handleTotal,
    arrayItems,
    arrayExtra,
    handleReduce,
    handleAddItem,
    handleDelete,
  };
}
