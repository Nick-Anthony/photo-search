import { AppDataSource } from "./postgres";
import express from "express";
import { appendFile } from "fs";
import Photo from "../db/Photo";
import listCollection from "../handlers/listCollection";
import cors from "cors";
import listAllPhotos from "../handlers/listAllPhotos";
import { listPhotos } from "../handlers/listPhotos";
import { query } from "express-validator";

/** Connect to the database then start the API server */
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.error("Error connecting to postgres: ", error));

const app = express();

app.use(
  cors({
    origin: ["https://photo-search.me", "http://localhost:3000"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8080, () => {
  console.log("API server ready at http://localhost:8080");
});

app.get("/hello", async (req, res) => {
  try {
    const photo = await Photo.findOne({
      where: {
        id: 1,
      },
      relations: ["photographer", "collection"],
    });
    if (!photo) {
      res.status(404).send();
      return;
    }
    res.status(200).send(photo.asAPIObject());
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.get("/collection", listCollection);

app.get("/listAllPhotos", listAllPhotos);

app.get(
  "/listPhotos",
  query("collectionId").isInt(),
  query("query").isString().isLength({ max: 50 }).escape(),
  express.json(),
  listPhotos
);
