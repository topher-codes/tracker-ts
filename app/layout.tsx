import Link from 'next/link';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head></head>
			<body>
				<main>
					<nav>
						<Link href="/">Home</Link>
						<Link href="/tasks">Tasks</Link>
					</nav>
					{children}
				</main>
			</body>
		</html>
	);
}
