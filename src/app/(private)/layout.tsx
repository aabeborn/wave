import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import Appbar from '@/components/appbar/appbar';
import QueryProvider from '@/components/provider/queryProvider';
import { auth } from '@/lib/auth';

type Properties = {
	children: ReactNode;
};

const Layout = async ({ children }: Properties) => {
	const session = await auth();
	if (!session) redirect('/auth/signin');
	return (
		<QueryProvider>
			<div className="relative h-full w-full overflow-hidden">
				<div className="relative flex flex-1 flex-col overflow-hidden">
					<Appbar />
					{children}
				</div>
			</div>
		</QueryProvider>
	);
};

export default Layout;
