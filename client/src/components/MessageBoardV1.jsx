import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function MessageBoardV1() {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");

  async function load() {
    const rows = await api("/api/posts");
    setPosts(rows);
  }

  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      setErr("");
      await api("/api/posts", { method: "POST", body: { author, content } });
      setContent("");
      await load();
    } catch (e2) {
      setErr(e2.message);
    }
  }

  return (
    <div>
      <h2>Posts (v1 demo)</h2>
      {err && <p style={{ color: "crimson" }}>{err}</p>}

      <form onSubmit={submit} style={{ marginBottom: 16 }}>
        <div>
          <label>Author</label><br />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Message</label><br />
          <textarea
            rows={3}
            style={{ width: "100%" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Post</button>
      </form>

      <ul style={{ paddingLeft: 18 }}>
        {posts.map((p) => (
          <li key={p.id} style={{ margin: "14px 0" }}>
            <div><b>{p.author}</b></div>
            <div>{p.content}</div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              {new Date(p.created_at).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
