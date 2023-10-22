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
    const totalPriceSum = itemsArray.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    return totalPriceSum;
  };

  const handleAdd = (type, title, price) => {
    let orders = { ...orderList };
    if (orders[type][title]) {
      orders[type][title]["quantity"] += 1;
      orders[type][title]["totalPrice"] =
        orders[type][title]["quantity"] *
        orders[type][title]["individualPrice"];

      console.log("actualizado", orders);
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
  };
}
