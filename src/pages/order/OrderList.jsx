export const OrderList = ({ array }) => {
  return (
    <div className="list">
      {array.map((element, index) => {
        return (
          <div className="itemElement" key={index}>
            <div className="resumee">
              <p className="title">{element.title}</p>
              <p className="price">{element.individualPrice}</p>
              <p className="quantity">{element.quantity}</p>
              <p className="total">{element.totalPrice}</p>
            </div>
            <div className="buttons">
              <button>-</button>
              <button>+</button>
              <button>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
