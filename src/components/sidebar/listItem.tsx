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
				'flex w-fit gap-2 items-center px-2 py-1 hover:font-bold',
				isActive && 'text-primary px-2 py-1 font-bold'
			)}
		>
			<Icon
				{...icon.props}
				strokeWidth={isActive ? 2.5 : 1.5}
				className="size-5"
			/>
			<span className="text-md">{text}</span>
		</Link>
	);
};

export default ListItem;
