"use client";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");
  const isBlog = pathname.startsWith("/blog");

  const [search, setSearch] = useState("");

  return (
    <nav className="w-full bg-[#10131a] border-b border-[#23263a] px-6 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo and Site Name */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={14} cy={14} r={14} fill="currentColor" />
          </svg>
          <span className="text-white font-bold text-lg">Fumadocs</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex gap-2 ml-4">
          <Link
            href="/docs"
            className={`px-3 py-1 rounded text-sm font-medium ${
              isDocs
                ? "bg-[#23263a] text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Documentation
          </Link>
          <Link
            href="/blog"
            className={`px-3 py-1 rounded text-sm font-medium ${
              isBlog
                ? "bg-[#23263a] text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
      {/* Center: Search Bar */}

      {/* Right: Auth/User Controls */}
      <div className="flex items-center gap-2">
        <UserButton />
      </div>
    </nav>
  );
}
