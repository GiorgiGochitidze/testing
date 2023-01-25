import time
import os


responses = {
  "გამარჯობა": "გამარჯობა!",
  "როგორ ხარ": "კარგად და თქვენ?",
  "მეც კარგად ვარ": "კარგია რით შემიძლია დაგეხმაროთ?",
  "მეც კარგად": "კარგია რით შემიძლია დაგეხმაროთ?",
  "მეც": "კარგია რით შემიძლია დაგეხმაროთ?",
  "zd": "ZD",
  "xd": "რაგაცინებთ? რამოხდა?",
  "არაფერი": "კარგი, იქნებ რამით დაგეხმაროთ?",
  "როდის შეიქმენი": "მე შევიქმენი 09.01.2023 წელში ამ დროს დაიწყო ჩემზე მუშაობა",
  "რაგქვია": "მე მქვია Saorsa, ხოლო სახელზე მაწერია Saorsa Bot ასსე გადაწყვიტა ჩემმა შემქმნელმა",
  "ვინ არის შენი შემქმნელი": "ჩემი შემქმნელია გიორგი გოჩიტიძე, ბოდიშით მაგრამ ამაზე მეტი ინფორმაციის მოწოდება არშემიძლია",
  "ვინ შეგქმნა": "ჩემი შემქმნელია გიორგი გოჩიტიძე, ბოდიშით მაგრამ ამაზე მეტი ინფორმაციის მოწოდება არშემიძლია",
  "ვინ გაგაკეთა": "ჩემი შემქმნელია გიორგი გოჩიტიძე, ბოდიშით მაგრამ ამაზე მეტი ინფორმაციის მოწოდება არშემიძლია",
  "ვინ დაგაპროგრამირა": "ჩემი შემქმნელია გიორგი გოჩიტიძე, ბოდიშით მაგრამ ამაზე მეტი ინფორმაციის მოწოდება არშემიძლია",
  
}

links = {
  "google": os.startfile("D:/Users/Public/Desktop/Google Chrome.lnk")
}

while True:
    # Get the user's input
    user_input = input("User: ")        

    if user_input.lower in links:
        os.startfile(links[user_input.lower])      
    
    # Check if the user wants to stop the chatbot
    if user_input.lower() in ["სტ", "ნახვამდის", "კარგად", "არაფრით", "არაფრით ჯერ", "არაფრით ჯერჯერობით", "ჯერჯერობით არაფრით",
    "არაფერით ჯერჯერობით", "ჯერჯერობით არაფერით", "stop", "st"]:
        time.sleep(1)
        print("Bot: კარგით, ნახვამდის მომოვალ შეხვედრამდე 😀😀 თუ დაგჭირდებით შემეხმიანეთ")
        break


    # Normalize the user's input
    user_input = user_input.lower()
    user_input = user_input.strip()
    user_input = user_input.replace(",", "")
    user_input = user_input.replace("?", "")
    user_input = user_input.replace(".", "")
    user_input = user_input.replace("!", "")
    user_input = user_input.replace("*", "")

    # Check if the user's input is in the dictionary
    if user_input in responses:
      print("Bot: " + responses[user_input])
      # Print the corresponding response
    if user_input not in responses:
      print("Bot: ბოდიში მაგრამ ვერ ვხდები რას გულისხმობთ")
      time.sleep(1)
      print("Bot: თუ რაიმეს წერდით და მაინც მიიღეთ ეს პასუხი გთხოვთ გადაამოწმოთ თქვენი დაწერილი სიტყვა ან წინადადება")