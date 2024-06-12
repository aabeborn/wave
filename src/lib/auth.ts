import NextAuth, { type DefaultSession } from 'next-auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { JWT } from 'next-auth/jwt';
import spotify from 'next-auth/providers/spotify';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		accessToken?: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken?: string;
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [spotify],
	pages: {
		signIn: '/auth/signin'
	},
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken;
			return session;
		}
	}
});
