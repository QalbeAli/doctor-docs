import { AppHeader } from "../components/AppHeader";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  text-white">
      <AppHeader />
      <main>{children}</main>
    </div>
  );
}
