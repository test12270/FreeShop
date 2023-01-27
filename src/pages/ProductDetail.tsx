import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cartDispatcher, wishListDispatcher } from "../store/productStore";

export default function ProductDetail() {
  const dispatch = useDispatch();

  const params = useParams();
  const Id = Number(params.id);
  const Itemlist = useSelector((state: any) => state.productSlice.productList);

  const data = Itemlist.filter((i: any) => i.id === Id);

  return data.map((i: any) => (
    <div className="flex font-sans mt-32 mx-16">
      <div className="flex-none w-96 relative">
        <img
          src={i.image}
          alt=""
          className="absolute inset-0 w-72 h-72 "
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {i.title}
          </h1>
          <div className="text-lg font-semibold text-slate-500">${i.price}</div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            {i.description}
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4 card-actions">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white btn"
              type="button"
              onClick={() =>
                dispatch(
                  cartDispatcher.addToCart({
                    id: i.id,
                    title: i.title,
                    price: i.price,
                    image: i.image,
                  } as any)
                )
              }
            >
              Add to Cart
            </button>
            <Link to="/cart">
              <button
                className="btn bg-white h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                View Cart
              </button>
            </Link>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
            type="button"
            aria-label="Like"
            onClick={() =>
              dispatch(
                wishListDispatcher.addToWishList({
                  id: i.id,
                  title: i.title,
                  price: i.price,
                  image: i.image,
                } as any)
              )
            }
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <span className="text-sm text-slate-700">Enjoy shopping our </span>
        <span className="text-xl font-semibold text-blue-700">FreeShop!</span>
      </form>
    </div>
  ));
}
