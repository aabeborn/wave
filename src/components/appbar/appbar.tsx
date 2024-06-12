import Image from 'next/image';
import Navigation from './navigation/navigation';
import User from './user/user';
const Appbar = () => {
	return (
		<>
			<div className="inline-flex w-full justify-center py-2">
				<Image src="/logo.svg" alt="Wave loge" width={66} height={32} />
			</div>
			<header className="w-max-full text-on-surface grid-gap-4 grid w-full grid-cols-3 items-center overflow-auto px-8">
				<Navigation />
				<div> search </div>
				<div className="place-self-end">
					<User />
				</div>
			</header>
		</>
	);
};

export default Appbar;
