import { ReactElement } from 'react';
import Item from './listItem';

export type ListItem = {
	href: string;
	text: string;
	icon: ReactElement;
};

interface ListProperties {
	items: ListItem[];
	title?: string;
}

const List = ({ items, title }: ListProperties) => {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-xl font-accent mb-2">{title}</span>
			{items.map(item => (
				<Item key={item.href} {...item} />
			))}
		</div>
	);
};

export default List;
