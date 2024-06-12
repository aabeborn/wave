import { auth } from '@/lib/auth';
import AccountDropdown from './accountDropdown';
const User = async () => {
	const session = await auth();

	return (
		<AccountDropdown
			image={session?.user?.image}
			name={session?.user?.name}
		/>
	);
};

export default User;
