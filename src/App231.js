//Implement open API chat communication

//Get Your OpenAI API Key
//Visit https://platform.openai.com/account/api-keys
//Generate your API key.

//Below is the implementation of openAPI chat integration with regular post request
import React, { useState } from "react";
import axios from "axios";

const App231 = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post(
        `${REACT_APP_OPENAI_API}`,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(res.data.choices[0].message.content);
    } catch (err) {
      console.error("OpenAI API Error:", err);
      setResponse("Something went wrong.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>OpenAI Chat</h2>
      <textarea
        rows="4"
        placeholder="Ask something..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleSend}>Send</button>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default App231;
