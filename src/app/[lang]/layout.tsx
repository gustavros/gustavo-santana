export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative mx-auto max-w-5xl overflow-x-hidden px-4 pt-2 pb-2 min-h-screen">
      {children}
    </main>
  );
}
