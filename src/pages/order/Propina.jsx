import { useState } from "react";

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
