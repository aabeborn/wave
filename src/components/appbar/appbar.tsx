import Image from 'next/image';

import Navigation from './navigation/navigation';
const Appbar = () => {
	return (
		<>
			<div className="w-full inline-flex justify-center py-2">
				<Image src="/logo.svg" alt="Wave loge" width={66} height={32} />
			</div>
			<header className="w-full w-max-full overflow-scroll grid grid-cols-3 text-on-surface items-center">
				<Navigation />
				<div> search </div>
				<div> user </div>
			</header>
		</>
	);
};

export default Appbar;
