import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NavbarAuth } from "./components/NavbarAuth";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex w-full items-center gap-2 justify-center">
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
    ),
  },
  links: [],
};
