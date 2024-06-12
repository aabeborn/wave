'use client';

import {
	isServer,
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query';
import { ReactNode } from 'react';

const makeQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: false,
				staleTime: 1000 * 60
			}
		}
	});
};

let browserQueryClient: QueryClient | undefined;

const getQueryClient = () => {
	if (isServer) {
		return makeQueryClient();
	}
	if (!browserQueryClient) {
		browserQueryClient = makeQueryClient();
	}
	return browserQueryClient;
};

type Properties = {
	children: ReactNode;
};

const Provider = ({ children }: Properties) => {
	const queryClient = getQueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default Provider;
