import express from "express";
import Photo from "../db/Photo";

const listAllPhotos = async (req: express.Request, res: express.Response) => {
  try {
    const photos = await Photo.find({
      relations: ["photographer", "collection"],
    });
    if (!photos) {
      res.status(404).send();
      return;
    }
    res.status(200).send(photos.map((p) => p.asAPIObject()));
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

export default listAllPhotos;
