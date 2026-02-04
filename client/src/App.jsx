// client/src/App.jsx
import React, { useEffect, useState } from "react";
import { api } from "./api";
import MessageBoardV1 from "./components/MessageBoardV1.jsx";

export default function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    api("/api/health")
      .then(setHealth)
      .catch(() => setHealth({ ok: false }));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>Mini Messageboard</h1>
      <p style={{ opacity: 0.75 }}>
        API health: {health ? (health.ok ? "ok" : "down") : "loading..."}
      </p>
      <hr />
      <MessageBoardV1 />
      <hr />
      <div style={{ background: "#f6f6f6", padding: 12, borderRadius: 8 }}>
        <h2>Assignment (v2)</h2>
        <p>
          Implement register/login/logout and switch to the v2 contracts in <code>docs/</code>.
        </p>
      </div>
    </div>
  );
}
