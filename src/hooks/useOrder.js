import { useContext, useState } from "react";
import { MainContext } from "context/MainContext";

export default function useOrder() {
  const { orderList, setOrderList } = useContext(MainContext);

  const arrayItems = () => {
    return Object.values(orderList["items"]);
  };

  const arrayExtra = () => {
    return Object.values(orderList["extra"]);
  };

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

  const handleDelete = (type, title) => {
    let orders = { ...orderList };
    delete orders[type][title];

    setOrderList(orders);
  };

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

  const handleAddItem = (type, title) => {
    let orders = { ...orderList };

    orders[type][title]["quantity"] += 1;
    orders[type][title]["totalPrice"] =
      orders[type][title]["quantity"] * orders[type][title]["individualPrice"];

    setOrderList(orders);
  };

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
