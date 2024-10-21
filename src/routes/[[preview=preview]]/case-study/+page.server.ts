import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(301, '/case-study/page/1');
}

export function entries() {
	return [{}];
}
