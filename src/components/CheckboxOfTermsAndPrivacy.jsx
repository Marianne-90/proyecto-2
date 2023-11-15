import { useState } from "react";
import { handleDirectionNewPage } from "utils/navigationUtils";
import { useNavigate } from "react-router-dom";

export const CheckboxOfTermsAndPrivacy = ({ state }) => {
  const [politicas, setPolíticas] = useState(false);
  const [aviso, setAviso] = useState(false);
  const navigate = useNavigate();

  const handleCheckbox1Change = () => {
    setPolíticas(!politicas);
    actualizarAmbosSeleccionados(!politicas && aviso);
  };

  const handleCheckbox2Change = () => {
    setAviso(!aviso);
    actualizarAmbosSeleccionados(politicas && !aviso);
  };

  const actualizarAmbosSeleccionados = (ambos) => {
    state(ambos);
  };

  return (
    <div id="checkboxTerms">
      <label>
        <span onClick={() => handleDirectionNewPage("conditions", navigate)}>
          {" "}
          He leído Acepto los Términos y Condiciones
        </span>
        <input
          type="checkbox"
          checked={politicas}
          onChange={handleCheckbox1Change}
        />
      </label>
      <br />
      <label>
        <span onClick={() => handleDirectionNewPage("privacy", navigate)}>
          He leído Acepto Las Políticas de Privacidad
        </span>
        <input
          type="checkbox"
          checked={aviso}
          onChange={handleCheckbox2Change}
        />
      </label>
    </div>
  );
};
