import { useEffect } from "react";
import { Table, Button, Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  removeFromCart,
} from "../../store";
import { Link } from "react-router-dom";
import { initializeCart } from "../../store";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("addedToCart"));

    if (storedCartItems) {
      dispatch(initializeCart(storedCartItems));
    }
  }, [dispatch]);

  const totalPrice = cartItems.reduce((sum, product) => {
    return sum + product.count * Number(product.price);
  }, 0);

  return (
    <Container fluid>
      <h1 className="page-title"> Cart</h1>
      <Table className="mt-4 table">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th className="ms">Quantity</th>
            <th>Price </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <Image
                    className="fixed-height-image"
                    src={product.image}
                    alt={product.en_name}
                    fluid
                    loading="lazy"
                  />
                </td>
                <td>
                  <div className="fw-bold"> {product.en_name}</div>
                  <div className="fw-bold">{product.ko_name}</div>
                  <div> {product.description}</div>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(decrementCounter(product.id));
                    }}
                    className="counter-button"
                  >
                    -
                  </Button>
                  {product.count}
                  <Button
                    onClick={() => {
                      dispatch(incrementCounter(product.id));
                    }}
                    className="counter-button"
                  >
                    +
                  </Button>{" "}
                </td>
                <td className="fw-bold">${product.count * product.price}</td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(removeFromCart(product.id));
                    }}
                    className="remove-btn"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Container className="text-end fw-bold mb-4 total-price">
        <p className="m-0">Total price: ${totalPrice}</p>
        <p>(Incl. GST)</p>
      </Container>
      <Container className="d-flex justify-content-between align-items-center">
        <Button className="continue-shopping-btn">
          <Link to="/" className="text-white text-decoration-none">
            Continue Shopping
          </Link>
        </Button>
        <Button className="checkout-btn">
          <Link to="/success" className="text-white text-decoration-none">
            Checkout
          </Link>
        </Button>
      </Container>
    </Container>
  );
}

export default CartPage;
