import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import Appbar from '@/components/appbar/appbar';
import QueryProvider from '@/components/provider/queryProvider';
import { auth } from '@/lib/auth';

const Layout = async ({ children }: { children: ReactNode }) => {
	const session = await auth();
	if (!session) redirect('/auth/signin');

	return (
		<QueryProvider>
			<div className="relative w-full h-full verflow-hidden">
				<div className="relative flex flex-col overflow-hidden flex-1">
					<Appbar /> {children}
				</div>
			</div>
		</QueryProvider>
	);
};

export default Layout;
