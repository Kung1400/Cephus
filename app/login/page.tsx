"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import "./loginpage.css"
const LoginPage = () => {
  const router = useRouter();

  const [displayButton, setDisplayButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ Email: "", Password: "" });
  const isLoggedIn = true;
  const Login = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful");
      router.push("/homepage");
    } catch (error: any) {
      console.log("login failed ", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.Email.length > 0 && user.Password.length > 0) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mt-4 mb-4 text-center p-10">
        {loading ? "Login" : "Login"}
      </h1>
      <label htmlFor="email" className="text-2xl font-semibold">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={user.Email}
        onChange={(e) => setUser({ ...user, Email: e.target.value })}
        className="text-black border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="password" className="text-2xl font-semibold mt-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={user.Password}
        onChange={(e) => setUser({ ...user, Password: e.target.value })}
        className="text-black border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={(event) => {
          event.preventDefault();
          Login();
          if (isLoggedIn) {
            router.push("/homepage");
          }
        }}
        className="bg-blue-500 text-white px-3 py-2 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={displayButton}
      >
        {displayButton ? "Login" : "Login"}
      </button>

      <Link href="/signup" className="text-blue-500 hover:underline mt-2 cursor-pointer p-2">
        Create an account
      </Link>
    </div>
  );
};

export default LoginPage;
