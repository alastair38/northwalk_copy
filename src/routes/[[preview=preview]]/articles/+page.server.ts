import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(301, '/articles/page/1');
}

export function entries() {
	return [{}];
}
