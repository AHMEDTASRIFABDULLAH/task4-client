import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/register.jpg";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Hooks/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { setIsUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      name,
      email,
      password,
      createdAt: new Date(),
      status: "active",
    };
    try {
      const result = await axiosPublic.post("/register", data);
      setIsUser(true);
      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${result.data?.message || "Registration successful"}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      if (err.response) {
        Swal.fire({
          icon: "error",
          title: "Register Failed",
          text: err.response.data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#F0F4F9] rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center text-gray-600 ">
            Get Your Free Account Now.
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-300   lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or Registration with email
            </div>

            <span className="w-1/5 border-b border-gray-300  lg:w-1/4"></span>
          </div>
          <form onSubmit={handelRegister}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-300   md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-blue-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b border-gray-300  md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
