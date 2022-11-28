'use client';
import { useRouter } from 'next/navigation';
import { AiFillDelete } from 'react-icons/ai';

import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export default function DeleteNote({ id }: any) {
	const router = useRouter();
	return (
		<button
			onClick={() => {
				handleDelete(id);
				router.refresh();
			}}
		>
			<AiFillDelete></AiFillDelete>
		</button>
	);
}

const handleDelete = (id: any) => {
	client.records.delete('tasks', `${id}`);
};
