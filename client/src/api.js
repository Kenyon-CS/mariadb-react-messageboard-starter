const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || "";

export async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(`${API_ORIGIN}${path}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}
