import express from "express";
import Collection from "../db/Collection";

const listCollection = async (req: express.Request, res: express.Response) => {
  try {
    const collections = await Collection.find({});
    if (!collections) {
      res.status(404).send();
      return;
    }
    res.status(200).send({
      results: collections.map((c) => c.asAPIObject()),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

export default listCollection;
