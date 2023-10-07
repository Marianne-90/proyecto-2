import { useState, useRef } from "react";

export const ContactForm = () => {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const inputFile = useRef(null);
  //*! esto es para borrar el archivo seleccionado una vez que lo envío

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "file" ? target.files[0] : target.value;
    setMail({
      ...mail,
      [name]: value,
    });
  };

  return (
    <div className="contactoForm">
      <h2>¡Contáctanos!</h2>
      <form>
        <label>
          Tu Nombre:
          <input
            type="text"
            name="name"
            value={mail.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={mail.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Título:
          <input
            type="text"
            name="subject"
            value={mail.subject}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Mensaje:
          <textarea
            name="message"
            value={mail.message}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          <input
            type="file"
            name="file"
            ref={inputFile}
            accept="application/pdf"
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
