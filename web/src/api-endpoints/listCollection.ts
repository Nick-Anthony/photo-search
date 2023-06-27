import apiFetch from "./apiFetch";

export interface Collection {
  id: number;
  title: string;
}

export interface ListCollection {
  results: Collection[];
}

async function listCollection(): Promise<ListCollection> {
  const res = await apiFetch("/collection");
  return res.json();
}

export default listCollection;
