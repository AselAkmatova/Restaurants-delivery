import { Link } from 'react-router-dom';

export default function Restaurant({ data }) {
  return (
    <div
      className='restaurants__restaurant restaurant '
      style={{ backgroundImage: `url(${data.img}` }}
    >
      <div className='restaurant-box'>
        <Link className='restaurant-title' to={`/dishes/${data.id}`}>
          {data.name}
        </Link>
        <div className='restaurant-text'>
          <p className='restaurant-cuisine'>• {data.cuisine}</p>
          <p className='restaurant-time'>40 - 50 Min</p>
        </div>
      </div>
    </div>
  );
}
