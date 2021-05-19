export default function Dish({ data, addToCart, currencyText, currencyValue }) {
  return (
    <div className='dishes__dish dish'>
      <div className='dish__left'>
        <h3 className='dish__left-title'>{data.name}</h3>
        <span class='dish__left-price'>
          {data.price * currencyValue} {currencyText}
        </span>
      </div>
      <div className='dish__right'>
        <img className='dish__right-image' src={data.img} alt='dish' />
        <button className='dish__right-btn' onClick={() => addToCart(data.id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
