import Image from 'next/image';
import { redirect } from 'next/navigation';

import { auth, signIn } from '@/lib/auth';

const SignIn = async () => {
	const session = await auth();
	if (session) redirect('/');
	return (
		<main className="relative w-full h-full inline-flex justify-between">
			<div className="flex flex-col justify-center h-full p-4 pl-12 gap-8 w-fit">
				<Image
					className="absolute left-12 top-8"
					src="/logo.svg"
					alt="Wave Logo"
					width={100}
					height={48}
				/>
				<span className="text-8xl text-main font-accent">
					TUNE IN
					<br />
					<span className="text-accent">DISCOVER</span>
					<br />
					PLAY AND <span className="text-accent">DANCE</span>
				</span>
				<form
					action={async () => {
						'use server';
						await signIn('spotify', {
							callbackUrl: `${window.location.origin}/`
						});
					}}
					className="self-end"
				>
					<button
						type="submit"
						className="font-accent text-on-primary bg-primary py-3 px-6 text-2xl"
					>
						Signin with Spotify
					</button>
				</form>
			</div>
			<div className="relative h-full w-1/2 shrink-1 after:block after:top-0 after:left-0 after:w-full after:h-full after:shadow-login">
				<Image
					src="/images/login-bg2.jpg"
					alt="Background"
					layout="fill"
					objectFit="cover"
					objectPosition="start"
				/>
			</div>
		</main>
	);
};

export default SignIn;
