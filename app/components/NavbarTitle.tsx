"use client";
import { NavbarAuth } from "./NavbarAuth";
import { usePathname } from "next/navigation";

export function NavbarTitle() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={`flex w-full items-center ${
        isHome ? "gap-80" : "gap-2"
      } justify-center`}
    >
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-2 min-w-0">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        <span className="truncate">Doctor Documentation Hub</span>
      </div>
      {/* Center: Auth Buttons */}
      <div className="flex-1 flex justify-center">
        <NavbarAuth />
      </div>
    </div>
  );
}
