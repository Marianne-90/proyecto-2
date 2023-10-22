import "./style.css";
import { useState, useEffect, useContext } from "react";
import { MainContext } from "context/MainContext";
import { Propina } from "./Propina";
import useOrder from "src/hooks/useOrder";
import { OrderList } from "./OrderList";

export const Order = () => {
  const { orderList } = useContext(MainContext);
  const { handleTotal, arrayItems, arrayExtra } = useOrder();

  const [total, setTotal] = useState(0);
  const [propina, setPropina] = useState(0);

  useEffect(() => {
    let orderTotal = handleTotal();

    setTotal(orderTotal + propina);
  }, [propina, orderList]);

  return (
    <div className="pages">
      <div className="order">
        <div className="orderList">
          <h5>Orden</h5>
          <OrderList array={arrayItems()} type="items" />
          <h5>Extras</h5>
          <OrderList array={arrayExtra()} type="extra" />
          <Propina change={setPropina} />
          <p>Total: ${total}.00</p>
        </div>
        <div className="ordenar">
          <button>Ordenar</button>
        </div>
      </div>
    </div>
  );
};
