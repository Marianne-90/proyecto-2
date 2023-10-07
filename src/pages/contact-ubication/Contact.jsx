import { CONTACT_DATA } from "src/data/contactData.js";

export const Contact = () => {
  const formatNumber = (phoneNumber) => {
    return phoneNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1-");
    //*! esta cosa primero busca los números luego con el signo de interrogación busca patrones de tres números y agrega una negativa para que si no es par se excluya y ya añade el - en todo
  };

  return (
    <div className="contact">
      <p>
        <b>correo: </b>
        <a href={`mailto:${CONTACT_DATA.mail}`}>{CONTACT_DATA.mail}</a>
      </p>
      <p>
        <b>tel: </b>
        <a href={`tel:${CONTACT_DATA.tel}`}>{formatNumber(CONTACT_DATA.tel)}</a>
      </p>
      <p>
        <b>cel: </b>
        <a href={`tel:${CONTACT_DATA.cel}`}>{formatNumber(CONTACT_DATA.cel)}</a>
      </p>
      <p className="margintop30px">
        <b>Direccción</b>
      </p>
      <p>{CONTACT_DATA.adress}</p>
      <p className="margintop30px">
        <b>Horario</b>
      </p>
      <p>{CONTACT_DATA.hours}</p>
    </div>
  );
};
