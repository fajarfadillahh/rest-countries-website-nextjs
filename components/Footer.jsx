import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-gray-500">
      <div className="container flex h-20 items-center justify-center border-t-2 border-gray-200">
        <h1 className="font-semibold text-gray-900">
          &copy; Copyrights {new Date().getFullYear()} - Develop by ❤️
        </h1>
      </div>
    </footer>
  );
}
