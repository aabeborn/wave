import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
	const session = await auth();
	if (!session) redirect('/auth/signin');

	console.log('session', session);

	return <>{children}</>;
};

export default Layout;