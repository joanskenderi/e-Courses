import { useParams } from 'react-router-dom';

import { products } from '../data';

const ItemDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <p className="text-center text-lg text-gray-500 mt-10">Item not found</p>
    );
  }

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 mt-10 gap-8 items-start">
      <img
        src={product.imageSrc}
        alt={product.name}
        className="w-full md:w-2/5 h-[500px] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center md:w-3/5 text-left space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {product.description}
        </p>
        <span className="text-2xl font-semibold text-green-600">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ItemDetail;
