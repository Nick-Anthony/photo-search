import { Client } from "pg";
import { DataSource } from "typeorm";
import Collection from "../db/Collection";
import Photo from "../db/Photo";
import Photographer from "../db/Photographer";

/** Get a new connection to the postgres database */

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [Photo, Collection, Photographer],
});
