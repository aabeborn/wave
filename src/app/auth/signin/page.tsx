import Image from 'next/image';
import { redirect } from 'next/navigation';

import { auth, signIn } from '@/lib/auth';

const SignIn = async () => {
	const session = await auth();
	if (session) redirect('/');
	return (
		<main className="relative inline-flex h-full w-full justify-between">
			<div className="flex h-full w-fit flex-col justify-center gap-8 p-4 pl-12">
				<Image
					className="absolute top-8 left-12"
					src="/logo.svg"
					alt="Wave Logo"
					width={100}
					height={48}
				/>
				<span className="text-on-surface font-accent text-8xl">
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
							callbackUrl: `/`
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
			<div className="after:shadow-login relative h-full w-1/2 shrink-1 after:top-0 after:left-0 after:block after:h-full after:w-full">
				<Image
					src="/images/login-bg2.jpg"
					alt="Background object-cover"
					fill={true}
				/>
			</div>
		</main>
	);
};

export default SignIn;
