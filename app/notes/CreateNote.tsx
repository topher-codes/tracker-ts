'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const router = useRouter();

	const create = async () => {
		await fetch('http://127.0.0.1:8090/api/collections/tasks/records', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				ritm: content,
				color: 'green',
				contact: 1,
				// lastUpdate: new Date().getDate(),
				lastUpdate: 0,
			}),
		});

		setContent('');
		setTitle('');

		router.refresh();
	};

	return (
		<form onSubmit={create}>
			<h3>Create a new Entry</h3>
			<input
				type="text"
				placeholder="Type"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="RITM / INC"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			></textarea>
			<button type="submit">Create Note</button>
		</form>
	);
}
