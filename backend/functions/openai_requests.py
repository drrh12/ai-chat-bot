import openai
from openai import OpenAI
from decouple import config
from functions.database import get_recent_messages

# TODO: The 'openai.organization' option isn't read in the client API. You will need to pass it when you instantiate the client, e.g. 'OpenAI(organization=config("OPEN_AI_ORG"))'
# openai.organization = config("OPEN_AI_ORG")

client = OpenAI(api_key=config("OPEN_AI_KEY"))


# convert audio to text
def convert_audio_to_text(audio_file):
    try:
        transcript = client.audio.transcriptions.create(
            model="whisper-1",
            file=audio_file
        )
        print("Transcript returned:", transcript.text)  # Debug output
        return transcript.text
    except Exception as e:
        print(f"Error during transcription: {e}")
        return None


def get_chat_response(message_input):
    messages = get_recent_messages()
    user_message = {
        "role": "user",
        "content": message_input + "say something within the context. keep it short less than 15 words."
    }
    messages.append(user_message)
    print(messages)

    try:
        response = client.chat.completions.create(model="gpt-3.5-turbo",
                                                  messages=messages)
        message_text = response.choices[0].message.content
        return message_text
    except Exception as e:
        print(e)
        return
