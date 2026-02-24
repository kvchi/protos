import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ResetPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Guard route: only accessible after verify-email step
  useEffect(() => {
    const verified = localStorage.getItem("resetVerified");
    const email = localStorage.getItem("email");
    if (!verified || !email) {
      toast.error("Unauthorized access. Please verify your email first.");
      navigate("/userSignin");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");

    if (!email) {
      toast.error("Email not found. Please try again.");
      navigate("/userSignin");
      return;
    }

    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${BASE_URL}/auth/reset-password/`,
        {
          email,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Password reset successful. Please sign in.");

      localStorage.removeItem("resetVerified");
      localStorage.removeItem("email");

      setTimeout(() => {
        navigate("/userSignin");
      }, 1500);
    } catch (err) {
      console.error(err);
      const errorMessage =
        err?.response?.data?.detail ||
        err?.response?.data?.error ||
        "Password reset failed";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50 px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          Reset Password
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Enter your new password below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter new password"
                className="w-full border rounded-lg px-4 py-2 pr-10"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm new password"
                className="w-full border rounded-lg px-4 py-2 pr-10"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>

      <ToastContainer theme="colored" />
    </div>
  );
}
