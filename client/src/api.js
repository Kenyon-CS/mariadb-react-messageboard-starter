// client/src/api.js
export async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(path, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  const ct = res.headers.get("content-type") || "";
  let data = null;

  if (ct.includes("application/json")) {
    data = await res.json();
  } else {
    // Helpful debug if we accidentally got HTML (index.html) or empty response
    const text = await res.text();
    throw new Error(
      `Expected JSON from ${path} but got "${ct || "no content-type"}": ` +
      text.slice(0, 120).replace(/\s+/g, " ")
    );
  }

  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}
