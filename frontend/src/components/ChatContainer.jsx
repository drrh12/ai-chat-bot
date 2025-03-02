import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";

function ChatContainer({ messages = [] }) {
  const containerRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container ref={containerRef}>
      {messages.length === 0 ? (
        <EmptyState>
          <EmptyStateIcon>💬</EmptyStateIcon>
          <EmptyStateText>
            No messages yet. Start a conversation by recording your voice.
          </EmptyStateText>
        </EmptyState>
      ) : (
        messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 18rem);
  overflow-y: auto;
  padding: 1rem;
  background-color: hsl(var(--background));
  border-radius: var(--radius);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  margin: 1rem 0;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: hsl(var(--muted));
    border-radius: var(--radius);
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(var(--muted-foreground) / 0.3);
    border-radius: var(--radius);
  }

  @media (max-width: 768px) {
    height: calc(100vh - 16rem);
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: hsl(var(--muted-foreground));
  text-align: center;
  padding: 2rem;
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const EmptyStateText = styled.p`
  font-size: 1rem;
  max-width: 20rem;
  line-height: 1.5;
`;

export default ChatContainer;
