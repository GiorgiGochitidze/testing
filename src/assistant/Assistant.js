import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import chatbot from '../python/chatbot.py'

const Assistant = () => {

    AOS.init({duration: 1000})

  const [chat, setChat] = useState(false)
  const [bottext, setBottext] = useState('')
  

  return (
    <div className="assistant-container">
      {chat && <div className="chat-container" data-aos="fade-up">
        <div className="assistant-header">
          <img src="../github-icon.png" />
          <p className="close-chat-btn" onClick={() => chat ? setChat(false): setChat(true)}>X</p>
        </div>

        <div className="text-chat-container">
          
        </div>

        <form className="input-field">
          <textarea className="chat-input" value={bottext} onChange={(e) => setBottext(e.target.value)}></textarea>
          <button className="send-chat-btn">გაგზავნა</button>
        </form>
      </div>}

      <div className="contact-to-assistant-container" onClick={() => chat ? setChat(false): setChat(true)}>
        <img style={{width: "100%", height: "100%", boxSizing: "border-box"}} src='../botimage.jpg' />
      </div>
    </div>
   );
}

export default Assistant;