# AI Voice Chat Application

A modern, responsive voice-based chat application that allows users to communicate with an AI assistant through audio messages. 

![image](https://github.com/user-attachments/assets/0902898f-bc53-4409-9606-af74ddadc980)


## Features

- **Voice Recording**: Record audio messages through an intuitive microphone interface
- **Real-time Audio Processing**: Audio is processed and sent to the backend for AI analysis
- **Interactive Chat Interface**: Clean, responsive chat interface with user and AI messages
- **Audio Playback**: Built-in audio controls for both sent and received messages
- **Minimal, Modern UI**: Designed with shadcn UI principles for a clean, accessible interface

## How It Works

1. User clicks the microphone button to start recording
2. The application uses the browser's MediaRecorder API to capture audio
3. When recording is complete, audio is converted to a Blob and displayed in the chat
4. The audio is sent to the backend API for processing
5. The backend returns an AI response (also as audio)
6. The response is displayed in the chat with playback controls


## Technologies Used

- **Frontend**:

  - React.js
  - styled-components for component styling
  - Tailwind CSS for utility classes
  - Radix UI components for accessible UI primitives
  - Axios for API requests

- **Backend**:
  - Node.js API endpoint (running on `http://localhost:8000`)
  - Audio processing capabilities
  - AI response generation
  - OpenAI API
  - ElevenLabs API

## Architecture

The application follows a clean component architecture:

```
src/
├── components/
│   ├── ChatContainer.jsx    # Manages the chat messages display
│   ├── ChatMessage.jsx      # Individual message component
│   ├── Controller.jsx       # Main app controller
│   ├── RecordIcon.jsx       # Microphone icon SVG
│   ├── RecordMessages.jsx   # Audio recording functionality
│   └── Title.jsx            # App header
└── App.js                   # Root component
```

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-chat-bot.git
cd ai-chat-bot
```

2. Install frontend dependencies

```bash
cd frontend
npm install
```

3. Start the frontend development server

```bash
npm start
```

4. Set up the backend (separate repository)

```bash
# Instructions for setting up the backend service
```

## Usage

1. Open the application in your browser at `http://localhost:3000`
2. Click the microphone button to start recording your message
3. Speak your message clearly
4. Click the button again to stop recording
5. Wait for the AI to process and respond
6. Use the audio controls to play back the AI's response

## Design Decisions

- **Minimalist Interface**: The UI is intentionally clean and focused to keep user attention on the conversation
- **Audio-First Approach**: Designed primarily for voice interaction rather than text
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Accessible Components**: Built with Radix UI primitives to ensure accessibility

