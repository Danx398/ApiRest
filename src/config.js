import { config } from "dotenv";
config();
export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER  || 'yakumo';
export const DB_PASSWD = process.env.DB_PASSWD || 'yakumo123';
export const DB_NAME = process.env.DB_NAME || 'anime';
export const DB_HOST = process.env.DB_HOST || '147.182.237.243';
export const DB_PORT = process.env.DB_PORT || '';
export const DB_CHARSET = process.env.DB_CHARSET || 'utf8';