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
  max-width: 70%;
  min-width: 40%;

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
  width: 100%;
`;

const MessageText = styled.p`
  margin: 0;
  line-height: 1.5;
`;

const AudioPlayer = styled.audio`
  margin-top: 0.5rem;
  width: 100%;
  height: 40px;
  border-radius: var(--radius);
`;

function ChatMessage({ message, isUser, blobUrl }) {
  return (
    <MessageContainer isUser={isUser}>
      <Avatar>
        <AvatarFallback>{isUser ? "U" : "AI"}</AvatarFallback>
      </Avatar>
      <MessageContent>
        <MessageText>{message}</MessageText>
        {blobUrl && <AudioPlayer controls src={blobUrl} preload="metadata" />}
      </MessageContent>
    </MessageContainer>
  );
}

export default ChatMessage;
