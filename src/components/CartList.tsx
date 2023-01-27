import { useDispatch, useSelector } from "react-redux";
import { cartDispatcher } from "../store/productStore";
import CartItem from "./CartItem";

export default function CartList() {
  const product = useSelector((state: any) => state.productSlice.productList);
  const cart = useSelector((state: any) => state.cartSlice.productlist);

  let zero = 0;
  const priceArr = cart.map((i: any) => i.totalPrice);
  let total = priceArr.reduce((a: number, b: number) => a + b, zero);
  // console.log(total);

  const dispatch = useDispatch();

  return (
    <>
      <div className="lg:flex justify-between mb-20">
        <div>
          <CartItem />
        </div>
        <div className="self-start shrink-0 flex items-center mt-10 mb-2 justify-end">
          <span className="text-xl md:text-2xl">
            Total : ${total.toFixed(2)}
          </span>

          <label
            htmlFor="confirm-modal"
            className="modal-button h-10 px-6 font-semibold rounded-md bg-black text-white btn ml-5"
          >
            Buying
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure you want to buy?</h3>
            <p className="py-4">
              All items in the shopping cart will be deleted.
            </p>
            <div className="modal-action">
              <label
                htmlFor="confirm-modal"
                className="btn btn-primary"
                onClick={() =>
                  dispatch(cartDispatcher.Buying({ productlist: [] } as any))
                }
              >
                Yes
              </label>
              <label htmlFor="confirm-modal" className="btn btn-outline">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
