import { GALLERY_DATA } from "data/galleryData";
import { useEffect, useState } from "react";
import { PopImg } from "components/PopImg";
import useScrolling from "hooks/useScrolling";


/**
 * Componente GalleryIMG: Muestra la galería de imágenes de la página principal.
 *
 * Este componente muestra una galería de imágenes 
 * Al hacer clic las imágenes aparecen en grande
 * 
 *
 * @returns {JSX.Element} El elemento de la galería de imágenes.
 */





export const GalleryIMG = () => {
  const [popImage, setPopImage] = useState(null);
  const [isScrolling] = useScrolling();

  useEffect(() => {
    isScrolling && setPopImage(null);
  }, [isScrolling]);

  return (
    <div className="gallery">
      <div className="container">
        {GALLERY_DATA.map((element, index) => {
          return (
            <div key={index} onClick={() => setPopImage(element)}>
              <img src={element.img} alt={element.name} />
            </div>
          );
        })}
      </div>
      {popImage && <PopImg image={popImage} setPopImage={setPopImage} />}
    </div>
  );
};
