import useOrder from "src/hooks/useOrder";
import { BsFillTrashFill } from "react-icons/bs";

/**
 * Componente OrderList: Muestra una lista de elementos de la orden (ordenes generales o extras).
 *
 * Este componente recibe un arreglo de elementos y un tipo (general o extra) y muestra una lista de
 * elementos de la orden, incluyendo sus nombres, precios unitarios, cantidades, precios totales y botones
 * para reducir la cantidad, aumentar la cantidad o eliminar el elemento.
 *
 * @param {Array} array - Un arreglo de elementos de la orden (ordenes generales o extras).
 * @param {string} type - El tipo de elementos (puede ser 'items' o 'extra').
 * @returns {JSX.Element} El elemento que muestra la lista de elementos de la orden.
 */

export const OrderList = ({ array, type }) => {
  const { handleAddItem, handleReduce, handleDelete} = useOrder();

  return (
    <div className="list">
      <div className="columnNames">
        <p>nombre</p>
        <p>P/U</p>
        <p>cant</p>
        <p>P/T</p>
      </div>
      {array.map((element, index) => {
        return (
          <div className="itemElement" key={index}>
            <div className="resumee">
              <p className="title">{element.title}</p>
              <p className="price">${element.individualPrice}</p>
              <p className="quantity">{element.quantity}</p>
              <p className="total">${element.totalPrice}</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleReduce(type, element.title)}>
                -
              </button>
              <button onClick={() => handleAddItem(type, element.title)}>+</button>
              <button onClick={() => handleDelete(type, element.title)}><BsFillTrashFill/></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
