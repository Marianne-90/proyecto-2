import { CONTACT_DATA } from "src/data/contactData.js";
import { handleDirection } from "utils/navigationUtils";
import { useNavigate } from "react-router-dom";

/**
 * Componente de Footer contiene los datos principales de contacto con sus respectivos enlaces.
 *
 * @component
 * @example
 * <Footer />
 *
 * @returns {JSX.Element} Elemento Footer.
 */

export const Footer = () => {
  const navigate = useNavigate();

  const formatNumber = (phoneNumber) => {
    return phoneNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1-");

    //*! esta cosa primero busca los números luego con el signo de interrogación busca patrones de tres números y agrega una negativa para que si no es par se excluya y ya añade el - en todo
  };

  return (
    <footer>
      <div className="contacto">
        <p>
          <b>correo: </b>
          <a href={`mailto:${CONTACT_DATA.mail}`}>{CONTACT_DATA.mail}</a>
        </p>
        <p>
          <b>tel: </b>
          <a href={`tel:${CONTACT_DATA.tel}`}>
            {formatNumber(CONTACT_DATA.tel)}
          </a>
        </p>
        <p>
          <b>cel: </b>
          <a href={`tel:${CONTACT_DATA.cel}`}>
            {formatNumber(CONTACT_DATA.cel)}
          </a>
        </p>
        <p>
          <b>Direccción</b>
        </p>
        <p>{CONTACT_DATA.adress}</p>
        <p>
          <b>Horario</b>
        </p>
        <p>{CONTACT_DATA.hours}</p>
      </div>
      <div className="redes">
        {CONTACT_DATA.social.map((element) => (
          <p key={element.red}>
            <b>{element.red}: </b>
            <a href={element.src} target="_blank" rel="noreferrer">
              @StrudelOficial
            </a>
          </p>
        ))}
      </div>
      <div className="termsAndConditions">
        <ul>
          <li onClick={() => handleDirection("conditions", navigate)}>
            Términos y Condiciones
          </li>
          <li onClick={() => handleDirection("privacy", navigate)}>
            Aviso de Privacidad
          </li>
        </ul>
      </div>
    </footer>
  );
};
