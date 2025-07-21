// Ollama Server Configuration
const OLLAMA_BASE_URL = 'https://f2ki-h100-1.f2.htw-berlin.de:11435';
const DEFAULT_MODEL = 'llama3.1:8b';
const SYSTEM_PROMPT = 'Du bist ein freundliches Assistenzsystem das immer in Reimen antwortet';

// DOM Elements
const userInput = document.getElementById('userInput');
const statusMessage = document.getElementById('statusMessage');

// Buttons
const sendChatBtn = document.getElementById('sendChat');

// State
let isLoading = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateStatus('Bereit für Chat mit ' + DEFAULT_MODEL);
});

function setupEventListeners() {
    sendChatBtn.addEventListener('click', sendMessage);
    
    // Enter key to send message
    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });
}

function setLoading(loading) {
    isLoading = loading;
    if (loading) {
        sendChatBtn.disabled = true;
    } else {
        sendChatBtn.disabled = false;
    }
}

function updateStatus(message) {
    statusMessage.textContent = message;
}

function addMessage(content, sender = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    if (sender === 'assistant') {
        // Format assistant messages with proper line breaks
        messageDiv.innerHTML = content.replace(/\n/g, '<br>');
    } else {
        messageDiv.textContent = content;
    }
    
    document.getElementById('chatHistory').appendChild(messageDiv);
    document.getElementById('chatHistory').scrollTop = document.getElementById('chatHistory').scrollHeight;
}

async function sendMessage() {
    const message = userInput.value.trim();
    
    if (!message) {
        updateStatus('Bitte geben Sie eine Nachricht ein');
        return;
    }
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    
    try {
        setLoading(true);
        updateStatus(`Sende Anfrage an ${DEFAULT_MODEL}...`);
        
        await sendChatRequest(message, DEFAULT_MODEL);
        
        updateStatus('Antwort erhalten');
        
    } catch (error) {
        console.error('Fehler beim Senden der Nachricht:', error);
        addMessage(`Fehler: ${error.message}`, 'assistant');
        updateStatus('Fehler beim Senden der Nachricht');
    } finally {
        setLoading(false);
    }
}

async function sendChatRequest(message, model) {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: SYSTEM_PROMPT
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            stream: false
        }),
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const assistantMessage = data.message?.content || 'Keine Antwort erhalten';
    addMessage(assistantMessage, 'assistant');
    
    return data;
}

// Error handling for network issues
window.addEventListener('online', () => {
    updateStatus('Verbindung wiederhergestellt');
});

window.addEventListener('offline', () => {
    updateStatus('Keine Internetverbindung');
});

// Auto-focus on input field
userInput.focus();
