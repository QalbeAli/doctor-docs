"use client";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");
  const isHome = pathname === "/";

  return (
    <div
      className={`flex items-center justify-center w-full ${
        isHome ? "gap-96" : "gap-2"
      }`}
    >
      {/* Logo and Title on the left */}
      <div className="flex items-center">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        <div className="text-white font-bold ml-2">Doctor Documentation</div>
      </div>
      {/* Centered Sign In/Sign Up (hidden on /docs) */}
      {!isDocs && (
        <div className="flex-1 flex justify-center gap-2 cursor-pointer">
          <SignInButton />
          <SignUpButton />
        </div>
      )}
      {/* User Button on the right */}
      <div>
        <UserButton />
      </div>
    </div>
  );
}
