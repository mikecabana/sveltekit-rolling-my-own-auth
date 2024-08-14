import jwt from 'jsonwebtoken';
import { APP_SECRET, ACCESS_TOKEN_EXP, REFRESH_TOKEN_EXP } from '$env/static/private';

const SECRET = APP_SECRET || 'secret';

export function generateAccessToken(payload: string | Buffer | object) {
	return jwt.sign(payload, SECRET, { expiresIn: ACCESS_TOKEN_EXP });
}

export function generateRefreshToken(payload: string | Buffer | object) {
	return jwt.sign(payload, SECRET, { expiresIn: REFRESH_TOKEN_EXP });
}

export function verifyJWT(token: string) {
	try {
		return jwt.verify(token, SECRET);
	} catch (error: unknown) {
		console.log(error);
		return null;
	}
}
