"use client";
import { NavbarAuth } from "./NavbarAuth";
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppHeader() {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");
  const isBlog = pathname.startsWith("/blog");

  return (
    <div className="flex items-center justify-between w-full p-4 border-b border-neutral-800 ">
      {/* Left: Logo and Title */}
      <div className="flex items-center gap-2 min-w-0">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        <Link href="/">
          <span className="truncate font-semibold text-lg text-white">
            Doctor Documentation Hub
          </span>
        </Link>
        {/* Navigation Links */}
        <div className="flex gap-2 ml-6">
          <Link
            href="/docs"
            className={`px-3 py-1 rounded text-sm font-medium ${
              isDocs
                ? "bg-[#23263a] text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Docs
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
      {/* Right: Search, Theme Switcher, Auth */}
      <div className="flex items-center gap-2">
        <SearchToggle />
        <ThemeToggle />
        <NavbarAuth />
      </div>
    </div>
  );
}
