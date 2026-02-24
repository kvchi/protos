import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const isDev = import.meta.env.DEV;

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${BASE_URL}/auth/send-code/`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(
        isDev
          ? "Use code 1234 on the next screen (no email sent in development)"
          : "Reset code sent to your email"
      );

      localStorage.setItem("email", email);
      localStorage.setItem("verifyType", "reset-password");

      setTimeout(() => {
        navigate("/verifyEmail");
      }, 1000);
    } catch (err) {
      toast.error(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Failed to send reset code"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50 px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">Forgot Password</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your email to receive a reset code.
          {isDev && (
            <span className="mt-2 block text-primary/80">
              Dev: No email is sent. Use code <strong>1234</strong> on the next screen.
            </span>
          )}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send reset code"}
          </button>
        </form>
      </div>

      <ToastContainer theme="colored" />
    </div>
  );
}
