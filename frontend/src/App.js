import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {

    fetch("/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error connecting to backend"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>StartTech Frontend</h1>
      <p>Backend health status: {status}</p>
    </div>
  );
}

export default App;
