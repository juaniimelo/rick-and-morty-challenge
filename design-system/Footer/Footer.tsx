"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-5 border-t border-app-footer-border-color">
      <span className="text-app-text-gray-light">
        Powered by{" "}
        <Link
          className="text-app-space-green-portal font-bold"
          href="https://www.linkedin.com/in/juanimelo/"
          target="_blank"
        >
          Juan Melo
        </Link>
      </span>
    </footer>
  );
};
