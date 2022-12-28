import time



responsesen = {
  "hi": "Hello!",
  "hello": "Hi!",
  "how are you": "I'm fine and you?",
  "me too": "Great how i can help you",
  "me to": "Great how i can help you",
  "metoo": "Great how i can help you",
  "meto": "Great how i can help you",
}


responsesge = {
  "გამარჯობა": "გამარჯობა!",
  "როგორ ხარ": "კარგად და თქვენ?",
  "მეც კარგად ვარ": "კარგია რით შემიძლია დაგეხმაროთ?",
  "მეც კარგად": "კარგია რით შემიძლია დაგეხმაროთ?",
  "მეც": "კარგია რით შემიძლია დაგეხმაროთ?",
}

def chatbot():
    # Get the user's input
    user_input = input("User: ")

    # Check if the user wants to stop the chatbot
    if user_input.lower() in ['stop', 'st', 'by', 'goodbye', 'bye bye', "nothing", "with nothing"]:
        print("Bot: Okay, if i can be useful contact to me again")
        
    elif user_input.lower() in ["სტ", "ნახვამდის", "კარგად", "არაფრით", "არაფრით ჯერ", "არაფრით ჯერჯერობით"]:
        time.sleep(1)
        print("Bot: კარგით, ნახვამდის მომოვალ შეხვედრამდე 😀😀 თუ დაგჭირდებით შემეხმიანეთ")
        
    
    # Normalize the user's input
    user_input = user_input.lower()
    user_input = user_input.strip()
    user_input = user_input.replace(",", "")
    user_input = user_input.replace("?", "")
    user_input = user_input.replace(".", "")

    # Check if the user's input is in the dictionary
    if user_input in responsesen:
      # Print the corresponding response
      print("Bot: " + responsesen[user_input])
    elif user_input in responsesge:
      # If the user's input is not recognized, print a default response
      print("Bot: " + responsesge[user_input])
    elif user_input not in responsesen:
      print("Bot: I'm sorry, but I don't understand what you're mean")
    elif user_input not in responsesge:
      print("Bot: ბოდიში მაგრამ ვერ ვხდები რას გულისხმობთ")

chatbot()
