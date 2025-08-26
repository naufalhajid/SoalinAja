import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { saveUserProfile } from "../services/userService";
import Button from "../components/Button";
import Card from "../components/Card";

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
  return password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password);
}

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    birth: "",
    kelas: "",
    minat: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(form.email)) {
      setError("Email tidak valid.");
      return;
    }
    if (!validatePassword(form.password)) {
      setError("Password minimal 6 karakter, ada huruf besar & angka.");
      return;
    }
    if (!form.name || !form.birth || !form.kelas || !form.minat) {
      setError("Semua field wajib diisi.");
      return;
    }
    setLoading(true);
    try {
      const user = await register(form.email, form.password, form.name);
      await saveUserProfile(user.uid, {
        name: form.name,
        birth: form.birth,
        kelas: form.kelas,
        minat: form.minat,
        email: form.email,
        progress: [],
      });
      navigate("/chatbot");
    } catch (err) {
      setError("Registrasi gagal. Email sudah digunakan.");
    }
    setLoading(false);
  };

  return (
    <Card className="max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded px-3 py-2"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border rounded px-3 py-2"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          className="border rounded px-3 py-2"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="birth"
          placeholder="Tanggal Lahir"
          className="border rounded px-3 py-2"
          value={form.birth}
          onChange={handleChange}
          required
        />
        <select
          name="kelas"
          className="border rounded px-3 py-2"
          value={form.kelas}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Jenjang/Kelas</option>
          <option value="SMP">SMP</option>
          <option value="SMA">SMA</option>
          <option value="Kuliah">Kuliah</option>
        </select>
        <input
          type="text"
          name="minat"
          placeholder="Minat (misal: Matematika, Fisika)"
          className="border rounded px-3 py-2"
          value={form.minat}
          onChange={handleChange}
          required
        />
        {error && <div className="text-red-500">{error}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>
    </Card>
  );
}

export default Register;
