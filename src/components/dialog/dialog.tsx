'use client';
import { type ReactNode, type ReactElement, useRef, useEffect } from 'react';

type Properties = {
	children: ReactNode;
	trigger: ReactElement;
	openWithShortcut?: string;
	onOpenChange: (value: boolean) => void;
	open: boolean;
};

/* Dialog doesn't follow the "right approach", but it is specific made to handle parallel routes as Dialogs into Next.
It is not needed to handle open state, actions ecc. We have only to handle the "close" event to go back to the previous route.
*/
const Dialog = ({ children, open, onOpenChange }: Properties) => {
	const element = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		const dialog = element.current;

		if (dialog?.open !== open) {
			open ? dialog?.showModal() : dialog?.close();
		}

		const onCloseEvent = (event: HTMLElementEventMap['close']) => {
			onOpenChange(false);
		};

		dialog?.addEventListener('close', onCloseEvent);
		return () => {
			dialog?.removeEventListener('close', onCloseEvent);
		};
	}, [open, onOpenChange]);

	return (
		<dialog
			ref={element}
			className="backdrop:bg-on-surface/10 bg-surface border-surface-brigh h-3/4 max-h-[800px] min-h-80 w-3/4 max-w-[800px] min-w-80 self-center justify-self-center rounded-lg border-1 p-4 backdrop:backdrop-blur-sm"
		>
			{children}
		</dialog>
	);
};

export default Dialog;
