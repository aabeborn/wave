import { AppBarNavigationItem } from '@/types/navigation';
import { Home, LibraryBig, Telescope } from 'lucide-react';
import NavigationItem from './navigationItem';

const items: AppBarNavigationItem[] = [
	{
		href: '/',
		text: 'Home',
		icon: <Home />
	},
	{
		href: '/library',
		text: 'Library',
		icon: <LibraryBig />
	},
	{
		href: '/explore',
		text: 'Explore',
		icon: <Telescope />
	}
];

const Navigation = () => {
	return (
		<nav className="items-centerpy-2 inline-flex gap-4">
			{items.map(item => (
				<NavigationItem key={item.href} {...item} />
			))}
		</nav>
	);
};

export default Navigation;
