import Image from 'next/image';
import List, { type ListItem } from './list';
import {
	Flame,
	Home,
	LibraryBig,
	Telescope,
	WandSparkles,
	Zap
} from 'lucide-react';

const main: ListItem[] = [
	{
		href: '/',
		text: 'Home',
		icon: <Home />
	},
	{
		href: '/library',
		text: 'Library',
		icon: <LibraryBig />
	}
];

const discover: ListItem[] = [
	{
		href: '/discover',
		text: 'Discover',
		icon: <Telescope />
	},
	{
		href: '/hot',
		text: 'Top Charts',
		icon: <Flame />
	},
	{
		href: '/new',
		text: 'New Releases',
		icon: <Zap />
	},
	{
		href: '/for-you',
		text: 'For You',
		icon: <WandSparkles />
	}
];

const Sidebar = () => {
	return (
		<aside className="h-full text-on-surface p-8 flex flex-col gap-10 bg-surface-bright">
			<Image src="/logo.svg" alt="Wave loge" width={66} height={32} />
			<List items={main} />
			<List items={discover} title="Discover" />
		</aside>
	);
};

export default Sidebar;
