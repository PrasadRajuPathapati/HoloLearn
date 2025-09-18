import React, { useState } from "react";

export default function Ttstostt() {
  const [spokenText, setSpokenText] = useState("");
  const [inputText, setInputText] = useState("");

  // ---- Speech-to-Text ----
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US"; // you can set "hi-IN" for Hindi, etc.
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSpokenText(transcript);
    };

    recognition.onerror = (event) => {
      console.error("STT Error:", event.error);
    };

    recognition.start();
  };

  // ---- Text-to-Speech ----
  const speakText = () => {
    if (!window.speechSynthesis) {
      alert("Speech synthesis not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(inputText || "Hello, I am ready!");
    utterance.lang = "en-US"; // you can change to other languages
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 p-6">
      <h1 className="text-3xl font-bold mb-6">🎙 Offline TTS ↔ STT Demo</h1>

      {/* Speech-to-Text Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">🎤 Speech to Text</h2>
        <button
          onClick={startListening}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Start Listening
        </button>
        <p className="mt-4 p-3 border rounded bg-gray-50">
          {spokenText || "Say something..."}
        </p>
      </div>

      {/* Text-to-Speech Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">🗣 Text to Speech</h2>
        <textarea
          className="w-full border rounded p-2 mb-4"
          rows="3"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type text to speak..."
        />
        <button
          onClick={speakText}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Speak
        </button>
      </div>
    </div>
  );
}
