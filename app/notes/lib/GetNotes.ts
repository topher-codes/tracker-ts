export async function getNotes() {
	const res = await fetch(
		'http://127.0.0.1:8090/api/collections/tasks/records?page=1&perPage=30',
		{ cache: 'no-store' }
	);
	const data = await res.json();
	return data?.items as any[];
}
