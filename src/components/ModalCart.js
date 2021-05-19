import Cart from './Cart';
import { XCircle } from 'react-bootstrap-icons';

export default function ModalCart({
  deleteItemInCart,
  setCartModal,
  data,
  cartModal,
}) {
  let closeCartModal = () => {
    setCartModal('');
  };
  return (
    <div className={`cart-modal ${cartModal}`}>
      <XCircle
        className='cart-modal__close-btn'
        size={20}
        onClick={closeCartModal}
      />
      <Cart deleteItemInCart={deleteItemInCart} data={data} />
    </div>
  );
}
