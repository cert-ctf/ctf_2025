// Chat functionality for wa-tim-05.html
(function() {
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  
  const API_URL = 'https://66fac827b4.ctfd.gematik.de/complete';
  const AUTH_KEY = 'AI_e8a711c979242f5925864dd0eb902e9b43e8305216ac27d6';

  function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = isUser ? '👤' : '🤖';
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function createBotMessageBubble() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot';
    
    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = '🤖';
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = '';
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatMessages.appendChild(messageDiv);
    
    return bubble;
  }

  async function streamText(bubble, text, speed = 30) {
    return new Promise((resolve) => {
      let index = 0;
      
      const interval = setInterval(() => {
        if (index < text.length) {
          bubble.textContent += text[index];
          index++;
          // Scroll to bottom as text appears
          chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }

  function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'chat-message bot';
    loadingDiv.id = 'loadingMessage';
    
    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = '🤖';
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    
    const loading = document.createElement('div');
    loading.className = 'chat-loading';
    loading.innerHTML = '<span></span><span></span><span></span>';
    
    bubble.appendChild(loading);
    loadingDiv.appendChild(avatar);
    loadingDiv.appendChild(bubble);
    chatMessages.appendChild(loadingDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeLoading() {
    const loadingMsg = document.getElementById('loadingMessage');
    if (loadingMsg) {
      loadingMsg.remove();
    }
  }

  async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, true);
    chatInput.value = '';
    chatSendBtn.disabled = true;

    // Show loading
    showLoading();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          auth_key: AUTH_KEY,
          prompt: message
        })
      });

      removeLoading();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Parse the response
      let botResponse = '';
      if (data.response) {
        try {
          const parsedResponse = JSON.parse(data.response);
          botResponse = parsedResponse.answer || data.response;
        } catch (e) {
          botResponse = data.response;
        }
      } else {
        botResponse = 'No answer has been sent';
      }

      // Create bot message bubble and stream the text
      const bubble = createBotMessageBubble();
      await streamText(bubble, botResponse);

    } catch (error) {
      removeLoading();
      console.error('Chat error:', error);
      const bubble = createBotMessageBubble();
      await streamText(bubble, 'Error in reaching the Chatbot, please try again at a later time');
    } finally {
      chatSendBtn.disabled = false;
      chatInput.focus();
    }
  }

  // Event listeners
  chatSendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Focus input on load
  chatInput.focus();
})();
