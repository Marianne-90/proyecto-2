import "./style.css";



/**
 * Componente PopImg: muestra una imagen en tamaño completo en una superposición modal.
 *
 * Este componente se utiliza para mostrar una imagen en tamaño completo cuando se hace clic en una miniatura de la galería de imágenes.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.image - La información de la imagen que se mostrará en tamaño completo.
 * @param {string} props.image.img - La URL de la imagen.
 * @param {string} props.image.name - El nombre o descripción de la imagen.
 * @param {function} props.setPopImage - Función para cerrar la superposición modal de la imagen.
 * 
 * @returns {JSX.Element} El elemento de la superposición modal de la imagen.
 */

export const PopImg = ({ image, setPopImage }) => {

  return (
    <div className="popimg" onClick={() => setPopImage(null)}>
      <div className="container">
        <img src={image.img} />
      </div>
    </div>
  );
};
