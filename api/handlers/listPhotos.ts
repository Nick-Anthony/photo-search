import express from "express";
import { validationResult } from "express-validator";
import { ILike } from "typeorm";
import Photo from "../db/Photo";

interface listPhotosInput {
  query: string;
  collection: { id: number; name: string };
}

export const listPhotos = async (
  req: express.Request,
  res: express.Response
) => {
  const validation = validationResult(req);
  const query = req.query.query ? (req.query.query as string) : "";
  const id = parseInt(req.query.collectionId as string);
  if (!validation.isEmpty()) {
    return res.status(400).send({ errors: validation.array() });
  }

  try {
    const photos = await Photo.find({
      where: {
        description: ILike(`%${query}%`),
        collectionId: id,
      },
      relations: ["photographer", "collection"],
    });
    res.status(200).send(photos.map((p) => p.asAPIObject()));
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
