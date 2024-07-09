import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementCounter, incrementCounter } from "../store";

function AddToCartButton({ product }) {
  let dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cartItems);

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  return (
    <>
      {existingCartItem ? (
        <div className="d-flex align-items-center justify-content-center">
          <Button
            className="mx-4"
            onClick={() => {
              dispatch(decrementCounter(product.id));
            }}
          >
            -
          </Button>
          {existingCartItem.count}
          <Button
            className="mx-4"
            onClick={() => {
              dispatch(incrementCounter(product.id));
            }}
          >
            +
          </Button>
        </div>
      ) : (
        <div className="mt-2">
          <Button
            onClick={() => {
              dispatch(addToCart(product));
            }}
            className="d-flex w-100 fw-bold justify-content-center"
          >
            Add to cart
          </Button>
        </div>
      )}
    </>
  );
}

export default AddToCartButton;
