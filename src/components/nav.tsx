import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Search from "./Search";
export default function Nav() {
  const navigate = useNavigate();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const Logout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="navbar bg-white text-slate-900">
      <div className="flex-1">
        <Link to="/">
          <span className="btn btn-ghost normal-case text-xl">FreeShop</span>
        </Link>
        <Link to="/products">
          <span className="btn btn-ghost font-semibold">Products</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Search />
        {isLoggedIn === true ? (
          <ul className="flex menu menu-horizontal px-1">
            <li tabIndex={0}>
              <Link to="/mypage">
                <span className="mx-2 font-bold">Mypage</span>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/wishlist">WishList</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">
                <span className="mx-2 font-bold" onClick={Logout}>
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        ) : (
          <Link to="/login">
            <span className="mx-2 font-bold">Login</span>
          </Link>
        )}
      </div>
    </div>
  );
}
