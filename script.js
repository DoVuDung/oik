// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Chatbox Functionality
const chatboxContainer = document.querySelector('.chatbox-container');
const openChatbox = document.getElementById('openChatbox');
const closeChatbox = document.getElementById('closeChatbox');
const chatboxBody = document.getElementById('chatboxBody');
const userMessage = document.getElementById('userMessage');
const sendMessage = document.getElementById('sendMessage');

// Toggle chatbox visibility
openChatbox.addEventListener('click', () => {
    chatboxContainer.style.display = 'flex';
    openChatbox.style.display = 'none';
    userMessage.focus();
});

closeChatbox.addEventListener('click', () => {
    chatboxContainer.style.display = 'none';
    openChatbox.style.display = 'block';
});

// Function to add a message to the chatbox
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatboxBody.appendChild(messageDiv);
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

// Simple AI responses
function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('chào')) {
        return "Xin chào! Rất vui được gặp bạn. Tôi có thể giúp gì cho bạn hôm nay?";
    } else if (lowerMessage.includes('tên') || lowerMessage.includes('bạn là ai')) {
        return "Tôi là trợ lý AI của trường THPT Ông Ích Khiêm. Tôi có thể giúp bạn với các thông tin về trường, tuyển sinh, chương trình học và các hoạt động khác.";
    } else if (lowerMessage.includes('tuyển sinh') || lowerMessage.includes('nhập học')) {
        return "Trường THPT Ông Ích Khiêm hiện đang tuyển sinh cho năm học 2025. Bạn có thể tìm hiểu thêm thông tin tại trang Tuyển sinh hoặc liên hệ trực tiếp với chúng tôi để được tư vấn chi tiết.";
    } else if (lowerMessage.includes('chương trình') || lowerMessage.includes('học')) {
        return "Nhà trường cung cấp các chương trình học đa dạng với phương pháp dạy học đổi mới, chú trọng kỹ năng thực hành, học theo dự án và nghiên cứu khoa học học sinh.";
    } else if (lowerMessage.includes('liên hệ') || lowerMessage.includes('địa chỉ')) {
        return "Bạn có thể liên hệ với chúng tôi qua số điện thoại, email hoặc đến trực tiếp địa chỉ của trường. Thông tin chi tiết có tại trang Liên hệ.";
    } else if (lowerMessage.includes('cảm ơn')) {
        return "Rất vui vì có thể giúp bạn! Nếu còn câu hỏi nào khác, đừng ngần ngại hỏi nhé.";
    } else if (lowerMessage.includes('tạm biệt') || lowerMessage.includes('bye')) {
        return "Tạm biệt! Chúc bạn một ngày tốt lành. Nếu cần hỗ trợ, hãy quay lại bất cứ lúc nào!";
    } else {
        const responses = [
            "Cảm ơn bạn đã gửi tin nhắn. Bạn có thể hỏi tôi về tuyển sinh, chương trình học, hoặc các hoạt động của trường.",
            "Tôi là trợ lý AI của trường. Bạn có thể hỏi tôi về các thông tin liên quan đến trường THPT Ông Ích Khiêm.",
            "Để biết thêm thông tin chi tiết, bạn có thể truy cập các trang trong website hoặc liên hệ trực tiếp với trường.",
            "Tôi có thể giúp bạn với các câu hỏi về tuyển sinh, chương trình học, hoạt động ngoại khóa và các dịch vụ giáo dục của nhà trường."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Send message function
function sendUserMessage() {
    const message = userMessage.value.trim();
    if (message) {
        addMessage(message, true);
        userMessage.value = '';
        
        // Simulate AI thinking
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            addMessage(aiResponse);
        }, 1000);
    }
}

// Event listeners for sending messages
sendMessage.addEventListener('click', sendUserMessage);

userMessage.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
});

// Initialize chatbox with welcome message
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        addMessage("Chào mừng bạn đến với THPT Ông Ích Khiêm! Tôi có thể giúp gì cho bạn hôm nay?");
    }, 1000);
});

// Close chatbox when clicking outside
document.addEventListener('click', (e) => {
    if (!chatboxContainer.contains(e.target) && e.target !== openChatbox && chatboxContainer.style.display === 'flex') {
        chatboxContainer.style.display = 'none';
        openChatbox.style.display = 'block';
    }
});