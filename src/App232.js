//Implementing WebSocket in ReactJS for real-time communication with a 
//backend (like your custom LLP model) involves the following steps:
//Assuming your backend (Node.js, Python, etc.) exposes a WebSocket server at:
//ws://localhost:8080
//Replace ws://localhost:8080 with your actual WebSocket server URL.
//Ensure CORS & WebSocket permissions are correctly configured on your backend.

import React, { useEffect, useRef, useState } from "react";

const App232 = () => {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.current = new WebSocket("ws://localhost:8080");
    socket.current.onopen = () => console.log("✅ Connected to WebSocket");
    socket.current.onmessage = (event) => {
      setMessages((prev) => [...prev, { sender: "bot", text: event.data }]);
    };
    socket.current.onclose = () => console.log("❌ WebSocket Closed");
    return () => socket.current?.close();
  }, []);

  const sendMessage = () => {
    if (input.trim() === "") return;
    socket.current.send(input);
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>🤖 LLP Chatbot</div>

      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#F1F0F0",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Type a message..."
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button style={styles.sendBtn} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 500,
    height: 600,
    margin: "40px auto",
    border: "1px solid #ddd",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    fontFamily: "sans-serif",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  header: {
    padding: 16,
    backgroundColor: "#1976d2",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  chatBox: {
    flex: 1,
    padding: 16,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#fafafa",
  },
  message: {
    padding: "10px 14px",
    borderRadius: 16,
    maxWidth: "80%",
    wordBreak: "break-word",
  },
  inputRow: {
    display: "flex",
    padding: 10,
    borderTop: "1px solid #eee",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    border: "1px solid #ccc",
    outline: "none",
    fontSize: 16,
  },
  sendBtn: {
    marginLeft: 10,
    padding: "10px 16px",
    borderRadius: 20,
    border: "none",
    backgroundColor: "#1976d2",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default App232;