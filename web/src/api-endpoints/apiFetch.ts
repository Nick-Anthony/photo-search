export default async function apiFetch(path: string, init?: RequestInit) {
  const res = await fetch(`http://localhost:8080${path}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${localStorage.getItem("auth-token") || ""}`,
    },
  });
  return res;
}
