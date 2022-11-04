'use client';

import { getNotes } from './lib/GetNotes';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

const client = new PocketBase('http://127.0.0.1:8090');

export default function RefreshNotes() {
	const router = useRouter();
	return (
		<div>
			<button
				onClick={() => {
					refreshNote();
					router.refresh();
				}}
			>
				Refresh
			</button>
		</div>
	);
}

async function refreshNote() {
	const notes = await getNotes();
	const d = new Date();
	console.log(d.getDate());
	console.log(notes[0].lastUpdate);
	for (let i = 0; i < notes.length; i++) {
		if (notes[i].lastUpdate == d.getDate()) {
			await client.records.update('tasks', `${notes[i].id}`, {
				color: 'green',
			});
		} else {
			await client.records.update('tasks', `${notes[i].id}`, {
				color: 'red',
			});
		}
	}
}
