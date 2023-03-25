import { createPool } from "mysql2/promise";
import { DB_USER, DB_PASSWD, DB_NAME, DB_HOST, DB_CHARSET, DB_PORT} from "./config.js";

export const conexion = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWD,
    port:DB_PORT,
    database:DB_NAME
});