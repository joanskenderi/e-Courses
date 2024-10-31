import { Link } from 'react-router-dom';

import CardAction from './CardAction';
import { useTheme } from '../hooks';

const CardDetails = ({ image, name, description, price, id }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-sm ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
      } rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105`}
    >
      <Link to={`/item/${id}`} className="block">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3
            className={`text-xl font-semibold ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
            } mb-2`}
          >
            {name}
          </h3>
          <p
            className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
            }`}
          >
            {description}
          </p>
          <div className="flex justify-between items-center">
            <span
              className={`text-lg font-bold ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <CardAction item={{ image, name, description, price, id }} />
    </div>
  );
};

export default CardDetails;
