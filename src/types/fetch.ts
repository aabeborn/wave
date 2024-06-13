export type AuthenticatedFetch<U, T extends unknown[] = []> = (
	token: string,
	...parameters: T
) => Promise<U>;

export type RESTMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
