import React from "react";
import { useAuth } from "../context/AuthContext";
import Card from "../components/Card";
import Button from "../components/Button";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { profile, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Card className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-2 text-blue-600">Profil User</h2>
      <div className="mb-4">
        <div><span className="font-semibold">Nama:</span> {profile?.name}</div>
        <div><span className="font-semibold">Email:</span> {profile?.email}</div>
        <div><span className="font-semibold">Tanggal Lahir:</span> {profile?.birth}</div>
        <div><span className="font-semibold">Kelas:</span> {profile?.kelas}</div>
        <div><span className="font-semibold">Minat:</span> {profile?.minat}</div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-green-600">Riwayat Belajar</h3>
      <ul className="list-disc ml-4">
        {(profile?.progress || []).map((p, idx) => (
          <li key={idx}>
            <span className="font-semibold">{p.materi}</span> - Skor: {p.skor} ({new Date(p.tanggal).toLocaleDateString()})
          </li>
        ))}
        {(!profile?.progress || profile.progress.length === 0) && (
          <li>Belum ada riwayat belajar.</li>
        )}
      </ul>
      <div className="mt-4">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </Card>
  );
}

export default Dashboard;
