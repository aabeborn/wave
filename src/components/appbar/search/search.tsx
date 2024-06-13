/// <reference types="user-agent-data-types" />
'use client';
import { useState } from 'react';
// import Hotkey from '@/components/hotkey/hotkey';
import Dialog from '@/components/dialog/dialog';

const Search = () => {
	const isMobile = navigator.userAgentData?.mobile;
	const [open, setIsOpen] = useState(true);

	return (
		<Dialog open={open} onOpenChange={setIsOpen}>
			text
		</Dialog>

		// <button
		// 	className="bg-surface-bright relative inline-flex h-10 max-w-72 flex-1 basis-36 items-center justify-between py-1.5 px-4 text-sm backdrop-blur-sm"
		// 	onClick={onPress}
		// >
		// 	<span>Search...</span>
		// 	{!isMobile && <Hotkey hotkey="k" onPress={onPress} />}
		// </button>
	);
};

export default Search;
