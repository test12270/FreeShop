import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data;
    try {
      if (newAccount)
        (data = await createUserWithEmailAndPassword(auth, email, password)),
          navigate("/login"),
          alert("회원가입에 성공하였습니다.");
    } catch (error: any) {
      setError(error.message);
      alert(error);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="p-12 bg-blue-300 rounded-2xl w-100">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign Up</h3>
            <p className="text-gray-500">Create your account.</p>
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
              <label className="mb-5 text-sm font-medium text-red-600 tracking-wide">
                {password.length < 6 ? "비밀번호는 6자리 이상입니다." : ""}
              </label>
              <div></div>
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Confirm Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-black"
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                required
                value={confirmPassword}
                onChange={onChange}
              />
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                {password === confirmPassword ? "" : "비밀번호가 다릅니다."}
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm"></div>
            </div>

            <form onSubmit={onSubmit}>
              <button
                type="submit"
                className="w-full flex justify-center bg-black hover:bg-blue-400 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 "
                // onClick={SignupSuccess}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
