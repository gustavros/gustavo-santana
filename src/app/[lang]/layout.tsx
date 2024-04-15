export default  function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {




	return (
		<main className="container relative mx-auto scroll-my-12 overflow-auto pt-4">{children}</main>
	);
}
