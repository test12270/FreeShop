import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Search() {
  const Itemlist = useSelector((state: any) => state.productSlice.productList);
  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filter = Itemlist.filter((item: any) => {
    return item.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().replace(" ", ""));
  });
  return (
    <>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered "
          value={search}
          onChange={onChange}
        />
        {search ? (
          <ul
            tabIndex={0}
            className="!fixed sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white"
          >
            {filter.map((item: any) => (
              <li className="text-left">
                <Link to={`/products/${item.id}`} key={item.id}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
