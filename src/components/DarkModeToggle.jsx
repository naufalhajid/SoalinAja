import React, { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle Dark Mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;
