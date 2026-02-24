import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Frame6 } from "../assets/images";
import api from "../api/axios";
import { RegistrationContext } from "../context/RegistrationContext";
import { useSwitchAccount } from "../context/SwitchAccountContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(RegistrationContext);
  const { setShowSwitchLoading } = useSwitchAccount();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setShowSwitchLoading(true, "business");
    console.log("Sending to backend", { email, password });

    let didNavigate = false;

    try {
      const response = await api.post("/auth/login/", {
        email,
        password,
      });

      console.log("Login Response from backend:", response.data);

      if (response.data.detail?.includes("verification code")) {
        localStorage.setItem("email", email);
        localStorage.setItem("verifyType", "login");
        setShowSwitchLoading(false);
        navigate("/verifyemail");
        return;
      }

      if (response.data.token?.access_token) {
        localStorage.setItem("loginTIme", Date.now());
        login(
          {
            email: response.data.user.email,
            first_name: response.data.user.first_name,
            last_name: response.data.user.last_name,
            country: response.data.user.country,
            state: response.data.user.state,
            city: response.data.user.city,
          },
          response.data.token
        );
        didNavigate = true;
        window.location.href = "/home";
        return;
      }

      console.warn("Unexpected login response:", response.data);
      setError("Unexpected response from server. Please try again.");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
      if (!didNavigate) {
        setShowSwitchLoading(false);
      }
    }
  };

 

  return (
    <main className="bg-gray-100 flex flex-col lg:flex-row px-4 lg:px-28 py-10 lg:py-20 gap-40">
      <div className="w-full lg:max-w-md text-lg">
        <h2 className="text-3xl font-bold text-primary mb-5">Welcome Back</h2>
        <p className="mb-5 font-semibold">
          Enter your login detail to continue from where you stopped
        </p>
        <p className="mb-5 text-sm md:text-lg font-semibold">
          Don't have a business account?
          <Link className="text-accent " to="/userSignup">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleSubmit} className={`${loading ? "opacity-70 pointer-events-none" : ""}`}>
          <p className="mb-2 text-primary font-semibold">
            Your Email Address
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-400 p-2 rounded-md mb-5"
          />
          <p className="mb-2 text-primary font-semibold">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-400 p-2 rounded-md mb-3"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className="text-red-600 cursor-pointer font-semibold text-sm pr-5">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 bg-primary py-3 px-4 rounded-lg text-white mb-20 cursor-pointer flex mx-auto"
          >
            {loading ? "Signing in..." : "Sign in to your account"}
          </button>
        </form>
      </div>
      <div className="place-items-center hidden xl:grid relative">
        <img src={Frame6} alt="" className="w-full" />
      </div>
    </main>
  );
}
