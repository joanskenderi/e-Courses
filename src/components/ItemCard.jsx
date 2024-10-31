import CardDetails from './CardDetails';

const ItemCard = (props) => {
  const handleAddToCart = () => {
    console.log('Item added to cart!');
  };

  return <CardDetails {...props} onAddToCart={handleAddToCart} />;
};

export default ItemCard;
