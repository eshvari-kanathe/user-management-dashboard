import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const savedata = (e) => {
    e.preventDefault();
    console.log(formData, "data data");

    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);

    const token=Math.random().toString(36).substring(7)
    localStorage.setItem("token", token);
    toast("data saved in localstorage");
    navigate("/dashboard");
  };
  const handleValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const neww = () => {
    navigate("/register");
  };
  return (
    <div className="flex items-center justify-center bg-gray-800 min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl text-center text-blue-600">Login</h1>
        <form className="space-y-4" onSubmit={savedata}>
          <div>
            <input
              type="text"
              name="email"
              autoComplete="off-Email"
              onChange={handleValue}
              value={formData.email}
              placeholder="enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              onChange={handleValue}
              value={formData.password}
              placeholder="enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Login/SignIn
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <button onClick={neww} className="text-blue-600 hover:underline">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
