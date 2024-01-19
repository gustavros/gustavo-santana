export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">{children}</main>
	);
}
