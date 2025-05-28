"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export function NavbarAuth() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex items-center gap-2">
      {isHome && (
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded-lg border border-gray-700 bg-transparent px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-lg border border-gray-700 bg-transparent px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      )}
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox:
                "rounded-full border border-gray-700 dark:border-gray-600",
            },
            variables: {
              colorPrimary: "#fff",
              colorBackground: "#18181b",
            },
          }}
        />
      </SignedIn>
    </div>
  );
}
