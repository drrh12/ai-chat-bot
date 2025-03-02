import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import ChatContainer from "./ChatContainer";
import RecordMessages from "./RecordMessages";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 48rem;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem 0 2rem 0;
`;

export default function Controller() {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = (text) => {
    // Add user message
    setMessages((prev) => [...prev, { text, isUser: true }]);

    // Simulate AI response (in a real app, this would come from the backend)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm your AI assistant. How can I help you today?",
          isUser: false,
        },
      ]);
    }, 1000);
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
