# uvicorn main:app
# uvicorn main:app --reload

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import openai

from functions.database import store_messages, reset_messages
from functions.openai_requests import convert_audio_to_text, get_chat_response

app = FastAPI()

# cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# post bot response (not playing in browser when using post request)
@app.post("/post-audio")
async def post_audio(file: UploadFile = File(...)):
    # Save the file temporarily
    with open(file.filename, "wb") as buffer:
        buffer.write(file.file.read())
    audio_input = open(file.filename, "rb")


@app.get("/reset")
async def reset_conversation():
    reset_messages()
    return {"response": "conversation reset"}


@app.get("/post-audio-get")
async def get_audio():
    audio_input = open("output.mp3", "rb")
    message_decoded = convert_audio_to_text(audio_input)
    print(message_decoded)

    if not message_decoded:
        raise HTTPException(status_code=400, detail="Failed to decode audio")

    chat_response = get_chat_response(message_decoded)
    store_messages(message_decoded, chat_response)

    print(chat_response)

    return "audio converted"


@app.get("/")
async def root():
    return {"message": "Hello World"}
