import { Link } from "react-router-dom";

export const MakeOrder = ({items, extras, total, propina}) => {

  const handleMakeOrder = () => {
    const message = "Hola me gustaría ordenar lo siguiente: ";
    const itemsMessage = items
      .map((item) => `${item.quantity} x ${item.title} - $${item.totalPrice}`)
      .join("%0A"); // Separador de línea

    const extrasMessage = extras
      .map((item) => `${item.quantity} x ${item.title} - $${item.totalPrice}`)
      .join("%0A"); // Separador de línea

    const thankYouMessage = "¡Muchas gracias!";

    const phoneNumber = "2211576525"; // Número de teléfono de destino

    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${message}%0A*ORDEN*%0A${itemsMessage}%0A*EXTRAS*%0A${extrasMessage}%0A*PROPINA* $${propina}%0A------------%0A*TOTAL:* $${total}%0A${thankYouMessage}`;

    window.open(whatsappURL, '_blank')
  };

  return (
    <div className="ordenar">
      <button onClick={handleMakeOrder}>Ordenar</button>
    </div>
  );
};
