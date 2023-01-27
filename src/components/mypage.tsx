import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Mypage() {
  const userData: any = auth.currentUser;
  const userPhoto = userData.photoURL;
  const userEmail = userData.email;
  const userCreated = userData.metadata;

  return (
    <>
      {/* <div className="flex justify-center avatar mt-36">
        <div className="w-24 rounded-full">
          <img src={userPhoto} />
        </div>
      </div>
      <p className="flex justify-center mt-8 mr-2 text-2xl">
        <span className="text-primary">USER EMAIL :</span>
        <span className="ml-2">{userEmail}</span>
      </p>
      <p className="flex justify-center text-xl mt-4  ">
        <span className="mr-2 text-2xl text-primary">Created At :</span>
        <span className="">{userCreated.creationTime}</span>
      </p> */}
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold mt-16">
        MyPage
      </h2>
      <div className="flex justify-center mt-48">
        <div className="card w-96 h-96 bg-base-200 shadow-xl border-lime-300 items-center">
          <div className="w-24 justify-center mt-8">
            <img src={userPhoto} className="rounded-full" />
          </div>
          <div className="card-body">
            <h1 className="card-title">{userEmail}</h1>
            <p>Last Login : {userCreated.lastSignInTime}</p>
            <div className="card-actions justify-center">
              <Link to="/wishlist">
                <button className="h-10 w-36px-6 font-semibold rounded-md bg-black text-white btn">
                  View WishList
                </button>
              </Link>
              <Link to="/cart">
                <button className="h-10 w-36 px-6 font-semibold rounded-md bg-black text-white btn">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
