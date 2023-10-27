import { useState } from "react";

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

export const Propina = ({ change }) => {
  const [changePropina, setChangePropina] = useState(0);

  const handlePropina = (e) => {
    e.preventDefault();

    let newPropina = Number(changePropina);
    change(newPropina);
  };

  const onChange = (e) => {
    let newValue = e.target.value;
    setChangePropina(newValue);
  };

  return (
    <form onSubmit={handlePropina}>
      <label name="propina">
        Propina
        <input
          type="number"
          pattern="^[0-9]+$"
          value={changePropina}
          onChange={onChange}
        />
        <button type="submit">Añadir</button>
      </label>
    </form>
  );
};
