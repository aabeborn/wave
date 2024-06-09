'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type ListItem as ListItemProperties } from './list';
import { cn } from '@/lib/cn';

const ListItem = ({ href, icon, text }: ListItemProperties) => {
	const pathname = usePathname();
	const Icon = icon.type;
	const isActive =
		pathname === href || (href !== '/' && pathname.startsWith(href));
	return (
		<Link
			href={href}
			className={cn(
				'flex w-fit gap-2 items-center',
				isActive && 'text-secondary'
			)}
		>
			<Icon
				{...icon.props}
				strokeWidth={isActive ? 2 : 1.5}
				className="size-6"
			/>
			<span className="text-lg">{text}</span>
		</Link>
	);
};

export default ListItem;
