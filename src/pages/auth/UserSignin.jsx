import { Link, useNavigate } from "react-router-dom";
import { Frame8 } from "../../assets/images";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { RegistrationContext } from "../../context/RegistrationContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UserSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(RegistrationContext);

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/auth/login/`,
        { email, password, },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const {user, token } = res.data;

      login(user, token);

      toast.success("Welcome back 👋");
      setTimeout(() => {
        navigate("/home");
      }, 800)
    } catch (err) {
      console.error(err);

     if (err.response?.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("Login failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-secondary/50">
      <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl font-semibold mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">
          Enter your login details to continue from where you stopped
        </p>

        <p className="text-sm mb-6">
          Don’t have an account?{" "}
          <Link
            to="/userSignup"
            className="text-accent font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>

        <form onSubmit={handleSignin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-accent hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
          <FcGoogle />
          Continue with Google
        </button>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <img src={Frame8} alt="Signin illustration" className="max-w-md" />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}
