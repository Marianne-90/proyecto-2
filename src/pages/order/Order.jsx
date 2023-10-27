import "./style.css";
import { useState, useEffect, useContext } from "react";
import { MainContext } from "context/MainContext";
import { Propina } from "./Propina";
import useOrder from "src/hooks/useOrder";
import { OrderList } from "./OrderList";
import { MakeOrder } from "./MakeOrder";


/**
 * Componente Order: Gestiona una lista de elementos de la orden y permite realizar un pedido.
 *
 * Este componente muestra una lista de elementos de la orden, calcula el total de la orden
 * (incluyendo una propina opcional) y proporciona una función para realizar un pedido a través de WhatsApp.
  * @returns {JSX.Element} El elemento general para hacer las órdenes.
*/

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
          <p id="total">Total: ${total}.00</p>
        </div>
        <MakeOrder items={arrayItems()} extras={arrayExtra() } total={total} propina={propina}/>
      </div>
    </div>
  );
};
