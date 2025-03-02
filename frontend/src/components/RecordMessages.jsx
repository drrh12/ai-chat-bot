import React, { useState } from "react";
import styled from "styled-components";
import RecordIcon from "./RecordIcon";

const RecordButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 9999px;
  border: none;
  background-color: ${(props) =>
    props.isRecording
      ? "hsl(var(--destructive) / 0.1)"
      : "hsl(var(--primary))"};
  color: ${(props) =>
    props.isRecording
      ? "hsl(var(--destructive))"
      : "hsl(var(--primary-foreground))"};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 3.5rem;
  height: 3.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RecordButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const RecordStatus = styled.span`
  position: absolute;
  bottom: -1.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) =>
    props.isRecording
      ? "hsl(var(--destructive))"
      : "hsl(var(--muted-foreground))"};
`;

const PulseRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: hsl(var(--destructive) / 0.3);
  z-index: -1;
  animation: ${(props) => (props.isRecording ? "pulse 1.5s infinite" : "none")};

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

function RecordMessages({ onRecordingComplete }) {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);

    // In a real implementation, here we would:
    // 1. Start/stop recording audio
    // 2. Process the audio
    // 3. Call onRecordingComplete with the transcribed text or audio data

    // Mock implementation for demo purposes
    if (isRecording) {
      // Simulate recording completion
      setTimeout(() => {
        onRecordingComplete &&
          onRecordingComplete("Hello, how can you help me today?");
      }, 500);
    }
  };

  return (
    <RecordButtonContainer>
      <RecordButton
        isRecording={isRecording}
        onClick={toggleRecording}
        aria-label={isRecording ? "Stop recording" : "Start recording"}
      >
        <PulseRing isRecording={isRecording} />
        <RecordIcon isRecording={isRecording} />
      </RecordButton>
      <RecordStatus isRecording={isRecording}>
        {isRecording ? "Recording..." : "Press to record"}
      </RecordStatus>
    </RecordButtonContainer>
  );
}

export default RecordMessages;
