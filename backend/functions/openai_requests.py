import openai
from decouple import config

openai.organization = config("OPEN_AI_ORG")
openai.api_key = config("OPEN_AI_KEY")

#convert audio to text
def convert_audio_to_text(audio_file):
    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
        print("Transcript returned:", transcript)  # Debug output
        message_text = transcript.get("text")
        return message_text
    except Exception as e:
        print(f"Error during transcription: {e}")
        return None
