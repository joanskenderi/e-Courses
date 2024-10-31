import { useCart } from '../hooks';

const CartSummary = () => {
  const { cartItems, addToCart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <span className="flex-grow mx-4">{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <div className="flex items-center m-4">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-bold">
              Total Price: ${getTotalPrice().toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
