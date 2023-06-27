import apiFetch from "./apiFetch";
import { PhotoCollection } from "./listCollection";

export interface Photographer {
  id: number;
  name: string;
  location?: string;
  bio?: string;
  profile_image_url?: string;
  twitter_username?: string;
  instagram_username?: string;
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

async function listPhotos(): Promise<Photo[]> {
  const res = await apiFetch("/photos");
  return res.json();
}

export default listPhotos;
