import { useState, useEffect } from "react";
import { PopImg } from "src/components/PopImg";
import useScrolling from "hooks/useScrolling";

export const MenuOptions = ({ items, extras }) => {
  const [popImage, setPopImage] = useState(null);

  const [isScrolling] = useScrolling();

  useEffect(() => {
    isScrolling && setPopImage(null);
  }, [isScrolling]);

  const handleImage = (element) => {
    setPopImage(element);
  };

  return (
    <div className="menuOptions">
      <div className="menuItems">
        {items.map((element) => {
          return (
            <div key={element.title}>
              <div className="container">
                <div className="des">
                  <p>{element.title}</p>
                  <p>{element.size}</p>
                  <p>{element.description}</p>
                </div>
                <div className="price">
                  <p>${element.price}</p>
                </div>
              </div>
              {element.img && (
                <div className="img" onClick={() => handleImage(element)}>
                  <img src={element.img} alt={element.title} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="extras">
        {extras.map((element) => {
          return (
            <div className="container" key={element.title}>
              <div className="des">
                <p>{element.title}</p>
                <p>{element.size}</p>
                <p>{element.description}</p>
              </div>
              <div className="price">
                <p>{element.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      {popImage && <PopImg image={popImage} setPopImage={setPopImage} />}
    </div>
  );
};
