import WebSocket, { WebSocketServer } from "ws";
import tls from "tls";

const wss = new WebSocketServer({ port: 3000 });
console.log("🚀 Proxy server running on ws://10.119.118.185:3000"); /* IP Address:3000 */

const ELECTRUM_HOST = "etx1.wiiicoin.io";
const ELECTRUM_SSL_PORT = 50002;

wss.on("connection", (client) => {
  console.log("🔗 Client connected to proxy");

  // Connect to Electrum
  const electrumSocket = tls.connect(
    {
      host: ELECTRUM_HOST,
      port: ELECTRUM_SSL_PORT,
      rejectUnauthorized: false,
    },
    () => {
      console.log("✅ Connected to Electrum SSL server");

      // Notify the client that Electrum is ready
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: "electrum_connected" }));
      }
    }
  );

  // Relay messages from Electrum to client
  electrumSocket.on("data", (data) => {
    const message = data.toString();
    console.log("📩 From Electrum:", message);
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });

  // Relay messages from client to Electrum
  client.on("message", (msg) => {
    console.log("📤 From client:", msg);


    if (!electrumSocket.destroyed) {
      electrumSocket.write(msg + "\n");
    } else {
      console.log("⚠️ Electrum not ready, message ignored");
    }
  });

  client.on("close", () => {
    console.log("❌ Client disconnected");
    electrumSocket.end();
  });

  electrumSocket.on("error", (err) => {
    console.error("❗ Electrum socket error:", err.message);
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ error: err.message }));
    }
  });

  client.on("error", (err) => {
    console.error("❗ Client WebSocket error:", err.message);
    electrumSocket.end();
  });
});
