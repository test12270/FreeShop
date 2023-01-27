import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Pagination from "react-js-pagination";

export default function ProductList() {
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(8);

  const offset = (page - 1) * limit;
  const selectList = [
    "-----",
    "LowPrice",
    "Fashion",
    "Digital",
    "Accessory",
    "Popular",
  ];
  const [selected, setSelected] = useState("");

  interface Item {
    productSlice: {
      loadingState: string;
      productList: any;
    };
  }
  const Wrapper = styled.div`
    .card:hover {
      img {
        transform: scale(120%);
        transition: 0.2s;
      }
    }
  `;

  const Itemlist = useSelector((state: Item) => state.productSlice.productList);
  let pricearr = [...Itemlist];
  let selectedList: any = Itemlist;
  console.log(Itemlist);
  if (selected === "Fashion") {
    selectedList = Itemlist.filter(
      (item: any) =>
        item.category === "women's clothing" ||
        item.category === "men's clothing"
    );
  } else if (selected === "Digital") {
    selectedList = Itemlist.filter(
      (item: any) => item.category === "electronics"
    );
  } else if (selected === "Accessory") {
    selectedList = Itemlist.filter((item: any) => item.category === "jewelery");
  } else if (selected === "LowPrice") {
    selectedList = pricearr.sort((a, b) => a.price - b.price);
  } else if (selected === "Popular") {
    selectedList = pricearr.sort((a, b) => b.rating.rate - a.rating.rate);
  }
  const paging = selectedList.slice(
    items * (page - 1),
    items * (page - 1) + items
  );

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const PaginationBox = styled.div`
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    ul.pagination li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
    ul.pagination li:first-child {
      border-radius: 5px 0 0 5px;
    }
    ul.pagination li:last-child {
      border-radius: 0 5px 5px 0;
    }
    ul.pagination li a {
      text-decoration: none;
      color: #337ab7;
      font-size: 1rem;
    }
    ul.pagination li.active a {
      color: white;
    }
    ul.pagination li.active {
      background-color: #337ab7;
    }
    ul.pagination li a:hover,
    ul.pagination li a.active {
      color: blue;
    }
  `;

  return (
    <>
      <section className="main">
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>Home</li>
              <li>Products</li>
            </ul>
          </div>

          <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
            <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
              Products
            </h2>
            <select onChange={handleSelect} value={selected}>
              {selectList.map((item: any) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
              data-scroll="false"
            >
              {paging?.map((item: any) => {
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

      <footer>
        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={8}
            totalItemsCount={Itemlist.length - 1}
            pageRangeDisplayed={3}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </PaginationBox>
      </footer>
    </>
  );
}
