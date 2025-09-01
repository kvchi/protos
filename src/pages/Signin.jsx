import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Frame6 } from "../assets/images";
import api from "../api/axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
        const response = await api.post('/auth/login/', {
            email: email,
            password: password,
        });

        console.log(response.data);
        localStorage.setItem('token', response.data.token);

        setSuccess(true);

        setTimeout(() => {
          navigate('/');
        }, 2000)
    } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
        setLoading(false);
    }}

    if (success) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img
          src={Frame6}
          alt="Switching..."
          className="hidden md:w-full md:h-full mb-6 animate-pulse"
        />
        <h2 className="text-2xl font-bold text-[#0E375F]">
          Switching to business account...
        </h2>
      </div>
      )
    }
  return (
    <main className=" bg-gray-100 flex flex-col lg:flex-row px-4 lg:px-28 py-10 lg:py-20 gap-40">
      <div className="w-full lg:max-w-md text-lg">
        <h2 className="text-3xl font-bold text-[#0E375F] mb-5">Welcome Back</h2>
        <p className="mb-5 font-semibold">
          Enter your login detail to continue from where you stopped
        </p>
        <p className="mb-5 text-sm md:text-lg font-semibold">
          Don't have a business account?
          <Link className="text-amber-300 " to="/signup">
            Sign up
          </Link>{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <p className="mb-2 text-[#0E375F] font-semibold">Your Email Address</p>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-400 p-2 rounded-md mb-5"
          />
          <p className="mb-2 text-[#0E375F] font-semibold">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-400 p-2 rounded-md mb-3"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </div>
            <p className="text-red-600 cursor-pointer font-semibold text-sm pr-5">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 bg-[#0E375F] py-3 px-4 rounded-lg text-white mb-20 cursor-pointer flex mx-auto"
          >
           {loading ? 'Signing in...' : 'Sign in to your account'}

          </button>
        </form>
      </div>
      <div className="place-items-center hidden xl:grid relative">
        <img src={Frame6} alt="" className="w-full"/>
      </div>
    </main>
  );
}
