'use client';

import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export default function UpdateNote() {
	return (
		<div>
			<button onClick={updateNote}>Update</button>
		</div>
	);
}

async function getNotes() {
	const res = await fetch(
		'http://127.0.0.1:8090/api/collections/tasks/records?page=1&perPage=30',
		{ cache: 'no-store' }
	);
	const data = await res.json();
	return data?.items as any[];
}

async function updateNote() {
	const notes = await getNotes();
	const d = new Date();
	console.log(d.getDate());
	for (let i: number = 0; i < notes.length; i++) {
		console.log(notes[i]);
		// Take current date and compare to updated date. If they are the same, set needsUpdate to false
		// If they are different, set needsUpdate to true

		if (!(notes[i].lastUpdate == d.getDate())) {
			await client.records.update('tasks', `${notes[i].id}`, {
				lastUpdate: `${d.getDate()}`,
			});
		} else {
			console.log('Already Updated');
		}
	}
}
