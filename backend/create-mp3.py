from gtts import gTTS

# The text you want to convert to speech
text = "Hello, audio testing python file"

# Create a gTTS object (using English)
tts = gTTS(text, lang="en")

# Save the generated speech to an MP3 file
tts.save("audio_test.mp3")
