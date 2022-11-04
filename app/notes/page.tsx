import Link from 'next/link';
import CreateNote from './CreateNote';
import styles from './Notes.module.css';
import DeleteNote from './DeleteNote';
import UpdateNote from './UpdateNote';
import RefreshNotes from './RefreshNotes';

async function getNotes() {
	const res = await fetch(
		'http://127.0.0.1:8090/api/collections/tasks/records?page=1&perPage=30',
		{ cache: 'no-store' }
	);
	const data = await res.json();
	return data?.items as any[];
}

export default async function NotesPage() {
	const notes = await getNotes();
	return (
		<div>
			<h1>Notes</h1>
			<div className={styles.grid}>
				{notes?.map((note) => {
					return <Note key={note.id} note={note} />;
				})}
			</div>
			<CreateNote />
			<div className={styles.spacer}>
				<RefreshNotes />
			</div>
			<div className={styles.spacer}>
				<UpdateNote />
			</div>
		</div>
	);
}

function Note({ note }: any) {
	const { id, title, ritm, created, contact, color } = note || {};
	return (
		<div>
			<Link href={`/notes/${id}`}>
				<div className={styles[color]}>
					<h2>{title}</h2>
					<h5>{ritm}</h5>
					<p>{created}</p>
					<p>Contact Level: {contact}</p>
				</div>
			</Link>
			<DeleteNote id={note.id} />
		</div>
	);
}
