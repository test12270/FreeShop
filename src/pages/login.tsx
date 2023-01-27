import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import banner from "../imgs/banner.jpg";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [userData, setUserData] = useState(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data;
    try {
      if (newAccount)
        (data = await signInWithEmailAndPassword(auth, email, password)),
          navigate("/");
    } catch (error: any) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data: any) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="p-12 bg-blue-300 rounded-2xl w-96">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <form onSubmit={onSubmit}>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onChange}
                />
              </form>
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <form onSubmit={onSubmit}>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={onChange}
                />
              </form>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/signup">
                  <span className="text-white hover:text-black">
                    You dont have account?
                  </span>
                </Link>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <button
                type="submit"
                className="w-full flex justify-center bg-black hover:bg-blue-400 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 "
              >
                Sign in
              </button>
            </form>
            <button onClick={handleGoogleLogin}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 1254.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
                className="ml-28 mt-8"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M6100 12794 c-1179 -64 -2247 -411 -3205 -1041 -917 -604 -1664
-1429 -2171 -2398 -1003 -1919 -958 -4257 121 -6135 948 -1652 2600 -2811
4450 -3124 414 -70 656 -90 1115 -90 374 0 507 7 800 40 1266 143 2338 586
3250 1342 150 125 529 504 656 658 816 983 1273 2148 1401 3574 21 243 24 946
5 1170 -24 272 -57 540 -88 719 -8 46 -14 85 -14 87 0 2 -1354 4 -3010 4
l-3010 0 0 -1250 0 -1250 1740 0 c1173 0 1740 -3 1740 -10 0 -24 -45 -215 -76
-320 -150 -520 -472 -1030 -873 -1387 -469 -418 -1106 -707 -1811 -822 -451
-73 -980 -74 -1378 -1 -1074 198 -2039 877 -2615 1840 -135 226 -296 578 -346
758 -10 37 -35 123 -55 192 -102 350 -141 641 -141 1055 0 293 7 382 46 620
114 704 423 1367 895 1920 647 760 1525 1227 2499 1330 164 17 583 20 736 5
806 -80 1463 -368 2067 -906 l53 -48 757 755 c416 415 785 781 819 812 34 31
96 98 138 148 l76 90 -33 39 c-18 22 -46 56 -62 75 -16 20 -49 48 -75 62 -25
15 -93 66 -151 113 -668 551 -1482 960 -2347 1179 -358 90 -640 138 -1038 177
-142 13 -725 26 -865 18z"
                  />
                </g>
              </svg>
            </button>
            <>{userData ? navigate("/") : null}</>
          </div>
        </div>
      </div>
    </>
  );
}
