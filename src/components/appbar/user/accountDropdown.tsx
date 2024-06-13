'use client';
import { cn } from '@/lib/cn';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import {
	CircleChevronDown,
	CircleChevronUp,
	CircleUserRound,
	LogOut
} from 'lucide-react';
import type { Session } from 'next-auth';
import Image from 'next/image';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

type Properties = NonNullable<Session['user']>;

const AccountDropdown = ({ image, name }: Properties) => {
	const [open, setOpen] = useState(false);

	return (
		<Dropdown.Root open={open} onOpenChange={setOpen}>
			<Dropdown.Trigger asChild>
				<button
					aria-label="user profile dropdown"
					className={cn(
						'hover:bg-surface-brighter bg-surface-bright border-surface-brighter flex w-fit w-max items-center gap-4 rounded-full border-1 p-2',
						open && 'bg-surface-brighter'
					)}
				>
					<div className="relative size-6">
						{image ? (
							<Image
								src={image}
								alt="user profile picture"
								fill={true}
								className="rounded-full object-cover"
							/>
						) : (
							<CircleUserRound className="size-6" />
						)}
					</div>
					{open ? (
						<CircleChevronUp className="size-4" />
					) : (
						<CircleChevronDown className="size-4" />
					)}
				</button>
			</Dropdown.Trigger>
			<Dropdown.Portal>
				<Dropdown.Content
					align="end"
					sideOffset={6}
					className="bg-surface-brighter text-on-surface flex min-w-40 flex-col gap-2 rounded p-2"
				>
					<span className="text-main inline-flex p-2 font-semibold">
						Hi {name}!
					</span>
					<span className="inline-flex h-px w-full bg-gray-400"></span>
					<Dropdown.Item
						className="hover:bg-on-surface-darker inline-flex items-center gap-2 rounded p-2 text-sm"
						onClick={() =>
							signOut({
								callbackUrl: '/auth/signin'
							})
						}
					>
						<LogOut className="size-4" />
						Logout
					</Dropdown.Item>
				</Dropdown.Content>
			</Dropdown.Portal>
		</Dropdown.Root>
	);
};

export default AccountDropdown;
