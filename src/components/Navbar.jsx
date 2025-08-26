import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <Link to="/" className="text-2xl font-bold text-blue-600">SoalinAja</Link>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/features" className="hover:text-blue-600">Fitur</Link>
        <Link to="/about" className="hover:text-blue-600">Tentang</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <Link to="/chatbot" className="hover:text-blue-600">Chatbot</Link>
          </>
        ) : null}
        {!user ? (
          <>
            <Link to="/login">
              <Button className="bg-blue-500">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-green-500">Register</Button>
            </Link>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
