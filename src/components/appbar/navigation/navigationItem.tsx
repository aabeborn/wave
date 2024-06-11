'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/cn';

import { AppBarNavigationItem } from '@/types/navigation';

const NavigationItem = ({ href, text, icon }: AppBarNavigationItem) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (href !== '/' && pathname.startsWith(href));
	const Icon = icon.type;
	return (
		<Link
			href={href}
			className={cn(
				'size-content inline-flex items-center px-2.5 py-1.5 gap-2 text-on-surface text-sm hover:text-primary',
				isActive ? 'bg-accent font-bold' : 'hover:text-primary'
			)}
		>
			<Icon
				{...icon.props}
				strokeWidth={isActive ? 2.5 : 1.5}
				className="size-4 shrink-0"
			/>
			<span className="hidden lg:inline">{text}</span>
		</Link>
	);
};

export default NavigationItem;
