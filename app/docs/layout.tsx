import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { NavbarAuth } from "../components/NavbarAuth";
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 border-b border-neutral-800">
        {/* Logo and Title on the left */}
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
        </div>
        {/* Right: Search, Theme Switcher, Auth */}
        <div className="flex items-center gap-2">
          <SearchToggle />
          <ThemeToggle />
          <NavbarAuth />
        </div>
      </div>
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions}
        searchToggle={{ enabled: false }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
