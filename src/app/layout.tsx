import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';

const main = Inter({ subsets: ['latin'], variable: '--main-fonts' });
const accent = Anton({
	subsets: ['latin'],
	weight: '400',
	variable: '--accent-font'
});

export const metadata: Metadata = {
	title: 'Wave',
	description: 'Waze - Music App'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body className={`${main.variable} ${accent.variable} bg-bg`}>
				{children}
			</body>
		</html>
	);
}
