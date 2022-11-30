import Link from 'next/link';
import './globals.css';
import RefreshNotes from './notes/RefreshNotes';
import UpdateNote from './notes/UpdateNote';
import NotePage from './notes/[id]/page';

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
						<Link href="/notes">My Work</Link>
					</nav>
					{children}
				</main>
			</body>
		</html>
	);
}
