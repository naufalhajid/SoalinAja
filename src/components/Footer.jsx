import React from "react";

function Footer() {
  return (
    <footer className="mt-8 py-4 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      &copy; {new Date().getFullYear()} SoalinAja. All rights reserved.
    </footer>
  );
}

export default Footer;
