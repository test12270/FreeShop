import { Link } from "react-router-dom";

export default function NoneItem() {
  return (
    <div className="mt-6 md:mt-14 px-2 lg:px-0">
      <div>
        <h1 className="text-2xl">There are no items in your shopping cart.</h1>
        <Link
          to="/products"
          className="h-10 px-6 font-semibold rounded-md bg-black text-white btn mt-10"
        >
          go to product
        </Link>
      </div>
      <div className="lg:flex justify-between mb-20">
        <div></div>
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">Total : $0</span>
          <label
            htmlFor="confirm-modal"
            className="modal-button btn bg-black text-white ml-5"
          >
            Buying
          </label>
        </div>
      </div>
    </div>
  );
}
