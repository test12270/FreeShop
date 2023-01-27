import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Signature() {
  const Wrapper = styled.div`
    .card:hover {
      img {
        transform: scale(120%);
        transition: 0.2s;
      }
    }
  `;
  interface Item {
    productSlice: {
      loadingState: string;
      productList: any;
    };
  }
  const Itemlist = useSelector((state: Item) => state.productSlice.productList);

  const Signature = Itemlist.filter((i: any) => i.price > 110);

  return (
    <>
      <div className="flex justify-center text-2xl  my-4 font-bold text-blue-700">
        Signature Items
      </div>
      <div className="carousel carousel-center justify-center p-4 space-x-4">
        <div className="flex justify-center">
          {Signature.map((item: any) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <Wrapper>
                <div className="card w-72  border border-gray-300 rounded-md mr-4">
                  <figure className="px-10 pt-10 h-80 bg-white">
                    <img
                      src={item.image}
                      alt="fashion"
                      className="object-scale-down h-48 w-96"
                    />
                  </figure>
                  <div className="card-body h-52 px-12  bg-gray-100 dark:bg-gray-700">
                    <h2 className="card-title text-base">{item.title}</h2>
                    <p className="absolute left-28 bottom-2 font-bold text-blue-700">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </Wrapper>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
