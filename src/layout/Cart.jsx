import { useCart } from '../hooks';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h3 className="text-lg">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mt-4">
            Total Price: ${getTotalPrice()}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
