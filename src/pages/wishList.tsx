import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WishList() {
  const Wishlist = useSelector((state: any) => state.wishSlice.wishList);
  return (
    <section className="main">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Home</li>
            <li>Mypage</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            WishList
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
            data-scroll="false"
          >
            {Wishlist?.map((item: any) => {
              return (
                <Link to={`/products/${item.id}`}>
                  <div className="card shadow-xl m-2">
                    <figure className="h-72 bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[70%] sm:w-1/2 hover:scale-110 ease-linear duration-200"
                      />
                    </figure>
                    <div className="card-body h-52">
                      <h2 className="card-title text-base">{item.title}</h2>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </article>
      </section>
    </section>
  );
}
