export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  text-white">
      <main>{children}</main>
    </div>
  );
}
