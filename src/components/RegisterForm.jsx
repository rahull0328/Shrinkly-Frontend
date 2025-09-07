import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { registerUser } from "../api/user.api";

const RegisterForm = ({ state }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {

      const data = await registerUser({ name, email, password });
      dispatch(register(data.user));
      navigate({ to: "/dashboard" });
      setLoading(false);
      console.log("registration success");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl px-10 pt-8 pb-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white tracking-wide">
          Create Account ✨
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-400 text-red-200 text-sm rounded-lg">
            {error}
          </div>
        )}

        <div className="mb-5">
          <label className="block text-white text-sm font-semibold mb-2">
            Full Name
          </label>
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-300/20 bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-white text-sm font-semibold mb-2">
            Email
          </label>
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-300/20 bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-white text-sm font-semibold mb-2">
            Password
          </label>
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-300/20 bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
            type="password"
            placeholder="••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          className={`w-full py-3 rounded-xl font-semibold text-lg transition-all shadow-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 hover:shadow-xl text-white"
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-200">
            Already have an account ?{" "}
            <span
              onClick={() => state(true)}
              className="text-pink-300 font-semibold cursor-pointer hover:text-pink-400 transition"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
