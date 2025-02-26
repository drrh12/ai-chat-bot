import os
import json
import random

def get_recent_messages():
    file_name = "stored_data.json"
    learn_instruction = {
        "role": "system",
        "content": "You are someone very knowledgeable about every topic. Keep answers under 15 words"
    }

    # Add a random element
    x = random.uniform(0, 1)
    if x < 0.2:
        learn_instruction["content"] += "Your response will have some light humour. "
    elif x < 0.5:
        learn_instruction["content"] += "Your response will include an interesting new fact. "
    else:
        learn_instruction["content"] += "Be original. "

    messages = [learn_instruction]

    # Check if file exists and is not empty
    if os.path.exists(file_name):
        try:
            with open(file_name, "r") as user_file:
                content = user_file.read().strip()
                if content:
                    data = json.loads(content)
                    if data:
                        if len(data) < 5:
                            messages.extend(data)
                        else:
                            messages.extend(data[-5:])
        except json.JSONDecodeError as e:
            print(f"JSON decode error in {file_name}: {e}")
            # Optionally, initialize the file with an empty array if needed:
            with open(file_name, "w") as user_file:
                json.dump([], user_file)
    else:
        # Create the file with an empty array if it doesn't exist
        with open(file_name, "w") as user_file:
            json.dump([], user_file)

    return messages
