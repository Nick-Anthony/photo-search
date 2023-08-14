export default async function apiFetch(path: string, init?: RequestInit) {
  const res = await fetch(`${process.env.REACT_APP_API_HOST}${path}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${localStorage.getItem("auth-token") || ""}`,
    },
  });
  return res;
}
