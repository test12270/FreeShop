import { useDispatch, useSelector } from "react-redux";
import { cartDispatcher } from "../store/productStore";

export default function CartItem() {
  const cart = useSelector((state: any) => state.cartSlice.productlist);
  console.log(cart);
  const dispatch = useDispatch();
  return cart.map((i: any) => (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <figure className="w-56  flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
        <img
          src={i.image}
          alt="상품 이미지"
          className="object-contain w-full h-48"
        />
      </figure>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">{i.title}</h2>
        <p className="mt-2 mb-4 text-3xl">
          ${(i.price * i.quantity).toFixed(2)}
        </p>
        <div className="card-actions">
          <div className="btn-group">
            <button
              className="btn bg-black text-white"
              onClick={() =>
                dispatch(cartDispatcher.removeFromCart({ id: i.id } as any))
              }
            >
              -
            </button>
            <button className="btn btn-ghost no-animation">{i.quantity}</button>
            <button
              className="btn bg-black text-white"
              onClick={() =>
                dispatch(cartDispatcher.addToCart({ id: i.id } as any))
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}
