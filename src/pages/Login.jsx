import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import loginsuccess from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email format"
    )
    .required("Required"),
  password: Yup.string().min(6, "password is too short").required("required"),
});

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const savedata = (values) => {
    console.log(values, "data data");

    const token = Math.random().toString(36).substring(7);

    // dispatch(
    //   loginsuccess({
    //     token,
    //     email: values.email,
    //   })
    // );

    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    localStorage.setItem("token", token);

    toast("Logged in successfully");
    navigate("/dashboard");
  };

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="flex items-center justify-center bg-gray-800 min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl text-center text-blue-600 p-2">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={savedata}
        >
          <Form>
            <Field
              name="email"
              type="email"
              placeholder="enter email"
              className="border p-2 rounded-3xl w-full m-2"
            />
            <ErrorMessage name="email" />
            <br />

            <Field
              name="password"
              type="password"
              placeholder="enter password"
              className="border p-2 rounded-3xl w-full m-2"
            />
            <ErrorMessage name="password" />

            <button type="submit">Login</button>
          </Form>
        </Formik>
        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <button
            onClick={goToRegister}
            className="text-blue-600 hover:underline"
          >
            Register
          </button>
        </p>

        {/* <form className="space-y-4" onSubmit={savedata}>
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
        </p> */}
      </div>
    </div>
  );
};

export default Login;
