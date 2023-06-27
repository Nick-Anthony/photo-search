import apiFetch from "./apiFetch";

export interface PhotoCollection {
  id: number;
  title: string;
}

export interface ListCollection {
  results: PhotoCollection[];
}

async function listCollection(): Promise<ListCollection> {
  const res = await apiFetch("/collection");
  return res.json();
}

export default listCollection;
