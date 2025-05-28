import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      <div className="flex w-full items-center justify-between">
        <div className="flex-1">{children}</div>
      </div>
    </HomeLayout>
  );
}
