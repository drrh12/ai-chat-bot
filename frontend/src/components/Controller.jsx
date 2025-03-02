import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import ChatContainer from "./ChatContainer";
import RecordMessages from "./RecordMessages";
import axios from "axios";

const backendURL = "http://localhost:8000/post-audio-get";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  width: 70%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 2.5rem 0;
`;

export default function Controller() {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = async (audioBlob) => {
    // Create a temporary URL for the user's audio so it can be displayed
    const userAudioUrl = window.URL.createObjectURL(audioBlob);
    setMessages((prev) => [
      ...prev,
      { text: "User sent audio", isUser: true, blobUrl: userAudioUrl },
    ]);

    // Send the recorded audio to the backend
    const aiAudioUrl = await sendAudioToBackend(audioBlob);
    if (aiAudioUrl) {
      // Add the AI's response to the messages
      setMessages((prev) => [
        ...prev,
        { text: "AI response", isUser: false, blobUrl: aiAudioUrl },
      ]);
    }
  };

  const sendAudioToBackend = async (audioBlob) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.mp3");

    try {
      const response = await axios.post(backendURL, formData, {
        headers: { "Content-Type": "audio/mpeg" },
        responseType: "blob",
      });
      const audioUrl = window.URL.createObjectURL(response.data);
      return audioUrl;
    } catch (error) {
      console.error("Error sending audio:", error);
      return null;
    }
  };

  return (
    <AppContainer>
      <Title />
      <ChatContainer messages={messages} />
      <Footer>
        <RecordMessages onRecordingComplete={handleNewUserMessage} />
      </Footer>
    </AppContainer>
  );
}
