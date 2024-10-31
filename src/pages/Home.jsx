import ItemCard from '../components/ItemCard';
import { products } from '../data';

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-7">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          image={product.imageSrc}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Home;
