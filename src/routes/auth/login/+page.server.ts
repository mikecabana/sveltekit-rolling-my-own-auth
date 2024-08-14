import { db } from '$lib/db';
import { users } from '$lib/db/schema';
// import { users } from '$lib/db/schema';
import { fail, type Actions } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
// import { eq } from 'drizzle-orm';

type LoginBody = {
	email: string | null;
	password: string | null;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const body = Object.fromEntries(await request.formData()) as LoginBody;
		const { email, password } = body;

		if (!email || !password) {
			return fail(401, { code: 'unauthorized' });
		}

		const user = await db.query.users.findFirst({
			where: eq(users.email, email)
		});

		if (!user) {
			return fail(401, { code: 'unauthorized' });
		}

		return { code: 'authorized' };
	}
};
