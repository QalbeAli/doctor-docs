import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NavbarTitle } from "./components/NavbarTitle";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <NavbarTitle />,
  },
  links: [],
};
