
import React, { createContext, useState, useEffect } from "react";

export const ElectrumContext = createContext();

export const ElectrumProvider = ({ children }) => {
  const [status, setStatus] = useState("Disconnected ⚠️");
  const [socket, setSocket] = useState(null);

  const connectToProxy = (host, port, useSSL) => {
    if (socket) socket.close();

    setStatus("Connecting...");
    const ws = new WebSocket("ws://10.119.118.185:3000"); /* IP Address:3000*/

    ws.onopen = () => {
      console.log("Connected to proxy ✅");
      
      const electrumCommand = JSON.stringify({
        action: "connect",
        host,
        port,
        ssl: useSSL,
      });
      ws.send(electrumCommand);
    };

    ws.onmessage = (e) => {
      console.log("📩 Proxy message:", e.data);
      try {
        const data = JSON.parse(e.data);
        if (data.type === "electrum_connected") {
          setStatus("Connected ✅");
        } else if (data.error) {
          setStatus("Error ❌");
        }
      } catch {
        
        console.log("Raw message:", e.data);
      }
    };

    ws.onerror = (err) => {
      console.log("WebSocket error:", err.message || err);
      setStatus("Error ❌");
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
      setStatus("Disconnected ⚠️");
    };

    setSocket(ws);
  };

  return (
    <ElectrumContext.Provider value={{ status, connectToProxy }}>
      {children}
    </ElectrumContext.Provider>
  );
};
