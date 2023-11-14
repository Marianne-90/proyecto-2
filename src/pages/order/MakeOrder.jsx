import Swal from "sweetalert2";

/**
 * Componente MakeOrder: Crea una orden y la envía a través de WhatsApp.
 *
 * Este componente permite al usuario crear una orden y enviarla a través de WhatsApp. La orden
 * incluye una lista de elementos (items y extras), el total, la propina y un mensaje de agradecimiento.
 *
 * @param {Array} items - Un arreglo de elementos de la orden principal.
 * @param {Array} extras - Un arreglo de elementos adicionales de la orden.
 * @param {number} total - El total de la orden.
 * @param {number} propina - El monto de la propina a incluir en la orden.
 */

export const MakeOrder = ({ items, extras, total, propina }) => {
  /**
   * Abre WhatsApp con los detalles de la orden.
   */

  const messageHandler = () => {
    const message = "Hola me gustaría ordenar lo siguiente: ";

    // Genera un mensaje para los elementos de la orden principal.
    const itemsMessage = items
      .map((item) => `${item.quantity} x ${item.title} - $${item.totalPrice}`)
      .join("%0A"); // Separador de línea

    // Genera un mensaje para los elementos adicionales de la orden.
    const extrasMessage = extras
      .map((item) => `${item.quantity} x ${item.title} - $${item.totalPrice}`)
      .join("%0A"); // Separador de línea

    const thankYouMessage = "¡Muchas gracias!";

    const phoneNumber = "2211576525"; // Número de teléfono de destino

    // Crea la URL de WhatsApp con los detalles de la orden.
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${message}%0A*ORDEN*%0A${itemsMessage}%0A*EXTRAS*%0A${extrasMessage}%0A*PROPINA* $${propina}%0A------------%0A*TOTAL:* $${total}%0A${thankYouMessage}`;

    // Abre la URL en una nueva ventana o pestaña del navegador.
    window.open(whatsappURL, "_blank");
  };

  /**
   *Abre Sweet Alert
   */

  const handleMakeOrder = () => {
    if (total <= 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes ordenar algo antes de enviar el mensaje",
      });
      return;
    }

    Swal.fire({
      icon: "warning",
      title:
        "¿Deseas enviar la orden?",
        text: "Antes de enviar recuerda no compartir datos bancarios o información confidencial, estos serán solicitados en el restaurante a la hora de realizar el pago",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Enviar",
      denyButtonText: `No Enviar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        messageHandler();
        Swal.fire("Mensaje Enviado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Mensaje No Enviado", "", "error");
      }
    });
  };

  return (
    <div className="ordenar">
      <button onClick={handleMakeOrder}>Ordenar</button>
    </div>
  );
};
