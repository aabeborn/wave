/// <reference types="user-agent-data-types" />
import { useEffect, useState } from 'react';

type Properties = {
	hotkey: string;
	onPress: () => void;
};

const Hotkey = ({ hotkey, onPress }: Properties) => {
	const [modifier, setModifier] = useState<string>();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				((navigator.userAgentData?.platform.includes('macOS') &&
					event.metaKey) ||
					event.ctrlKey) &&
				event.key === hotkey
			) {
				event.preventDefault();
				event.stopPropagation();
				onPress();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onPress, hotkey]);

	useEffect(() => {
		if (navigator.userAgentData?.platform.includes('macOS')) {
			setModifier('⌘');
		} else {
			setModifier('Ctrl');
		}
	}, []);

	return (
		<span className="bg-surface-brighter text-on-surface rounded py-0.5 px-1.5">
			{modifier}+{hotkey}
		</span>
	);
};

export default Hotkey;
