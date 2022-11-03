'use client';

import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export default function DeleteNote({ id }: any) {
	return <button onClick={() => handleDelete(id)}>Delete Me</button>;
}

const handleDelete = async (id: any) => {
	await client.records.delete('tasks', `${id}`);
};
