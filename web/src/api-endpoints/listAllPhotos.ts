import apiFetch from "./apiFetch";
import { PhotoCollection } from "./listCollection";

export interface Photographer {
  id: number;
  name: string;
  location?: string;
  bio?: string;
  profileImageUrl?: string;
  twitterUsername?: string;
  instagramUsername?: string;
}

export interface Photo {
  id: number;
  photographer: Photographer;
  collection: PhotoCollection;
  url: string;
  description: string;
  height: number;
  width: number;
}

async function listAllPhotos(): Promise<Photo[]> {
  const res = await apiFetch("/listAllPhotos");
  return res.json();
}

export default listAllPhotos;
