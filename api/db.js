import pg from "pg";

export const db = new pg.Pool({
  host: "localhost",
  user: "postgres", 
  password: "admin",
  database: "usuarioCadastro",
  port: 5432, 
});