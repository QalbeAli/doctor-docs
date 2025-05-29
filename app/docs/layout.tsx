import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { docsSource } from "@/lib/source";
import { AppHeader } from "../components/AppHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      <DocsLayout
        tree={docsSource.pageTree}
        {...baseOptions}
        searchToggle={{ enabled: false }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
