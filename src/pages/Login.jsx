import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, forgotPassword } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import Card from "../components/Card";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [forgot, setForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate("/chatbot");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/chatbot");
    } catch (err) {
      setError("Email atau password salah.");
    }
    setLoading(false);
  };

  const handleForgot = async () => {
    setError("");
    try {
      await forgotPassword(email);
      setForgot(true);
    } catch {
      setError("Email tidak ditemukan.");
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500">{error}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
      <div className="mt-2 flex justify-between items-center">
        <button
          className="text-blue-500 underline text-sm"
          onClick={handleForgot}
        >
          Lupa Password?
        </button>
        <button
          className="text-green-500 underline text-sm"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
      {forgot && (
        <div className="text-green-600 mt-2">
          Link reset password telah dikirim ke email Anda.
        </div>
      )}
    </Card>
  );
}

export default Login;
