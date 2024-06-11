import Appbar from '@/components/appbar/appbar';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
	const session = await auth();
	if (!session) redirect('/auth/signin');

	console.log('session', session);

	return (
		<div className="relative w-full h-full verflow-hidden">
			<div className="relative flex flex-col overflow-hidden flex-1">
				<Appbar /> {children}
			</div>
		</div>
	);
};

export default Layout;
