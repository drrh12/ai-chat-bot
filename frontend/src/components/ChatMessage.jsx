import React from "react";
import styled from "styled-components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: var(--radius);
  max-width: 90%;

  ${(props) =>
    props.isUser
      ? `
    margin-left: auto;
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  `
      : `
    margin-right: auto;
    background-color: hsl(var(--muted));
    color: hsl(var(--muted-foreground));
  `}
`;

const Avatar = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: hsl(var(--muted));
`;

const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  font-weight: 500;
`;

const MessageContent = styled.div`
  flex: 1;
`;

const MessageText = styled.p`
  margin: 0;
  line-height: 1.5;
`;

function ChatMessage({ message, isUser }) {
  return (
    <MessageContainer isUser={isUser}>
      <Avatar>
        <AvatarFallback>{isUser ? "U" : "AI"}</AvatarFallback>
      </Avatar>
      <MessageContent>
        <MessageText>{message}</MessageText>
      </MessageContent>
    </MessageContainer>
  );
}

export default ChatMessage;
