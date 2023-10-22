import useOrder from "src/hooks/useOrder";

export const OrderList = ({ array, type }) => {
  const { handleAddItem, handleReduce, handleDelete} = useOrder();

  return (
    <div className="list">
      {array.map((element, index) => {
        return (
          <div className="itemElement" key={index}>
            <div className="resumee">
              <p className="title">{element.title}</p>
              <p className="price">${element.individualPrice}</p>
              <p className="quantity">{element.quantity}</p>
              <p className="total">${element.totalPrice}</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleReduce(type, element.title)}>
                -
              </button>
              <button onClick={() => handleAddItem(type, element.title)}>+</button>
              <button onClick={() => handleDelete(type, element.title)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
