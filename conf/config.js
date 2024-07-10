import dotenv  from "dotenv"
dotenv.config()

export const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;
export const DB_NAME = process.env.DB_NAME;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION_TIME = parseInt(process.env.JWT_EXPIRATION_TIME, 10);
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE;
export const URL_ENCODED = process.env.URL_ENCODED === 'true';
export const REQUEST_LIMIT_TIME = parseInt(process.env.REQUEST_LIMIT_TIME, 10);
export const REQUEST_LIMIT_NUMBER = parseInt(process.env.REQUEST_LIMIT_NUMBER, 10);

export const WEB_CACHE = process.env.WEB_CACHE === 'true';

export const PORT = parseInt(process.env.PORT, 10) || 3000;
export const SALT_HASH = parseInt(process.env.SALT_HASH); 
