'use client';

import Modal from './Modal';

import { getNotes } from './lib/GetNotes';

import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export default function UpdateNote() {
	return (
		<div>
			<button id="modal" onClick={updateNote}>
				Update
			</button>
			<Modal></Modal>
		</div>
	);
}

async function updateNote() {
	const notes = await getNotes();
	const d = new Date();

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
