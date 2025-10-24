// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-menu-mobile]');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Submenu toggle for mobile
  const submenuToggles = document.querySelectorAll('[data-menu-submenu]');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const submenu = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      
      // Toggle active class on button
      toggle.classList.toggle('active');
      
      // Toggle expanded class on submenu
      submenu.classList.toggle('expanded');
      
      // Update icon rotation
      icon.classList.toggle('rotate-180');
    });
  });
  
  // Chatbox functionality
  const chatboxContainer = document.getElementById('chatboxContainer');
  const openChatbox = document.getElementById('openChatbox');
  const closeChatbox = document.getElementById('closeChatbox');
  const chatboxBody = document.getElementById('chatboxBody');
  const userMessage = document.getElementById('userMessage');
  const sendMessage = document.getElementById('sendMessage');
  
  // Toggle chatbox visibility
  openChatbox.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
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
  setTimeout(() => {
    addMessage("Chào mừng bạn đến với THPT Ông Ích Khiêm! Tôi có thể giúp gì cho bạn hôm nay?");
  }, 1000);
  
  // Close chatbox when clicking outside
  document.addEventListener('click', (e) => {
    // Check if chatbox is open and click is outside chatbox container
    if (chatboxContainer.style.display === 'flex' && 
        !chatboxContainer.contains(e.target) && 
        e.target !== openChatbox) {
      chatboxContainer.style.display = 'none';
      openChatbox.style.display = 'block';
    }
  });
  
  // Prevent chatbox from closing when clicking inside it
  chatboxContainer.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Login/Signup functionality
  const loginLink = document.getElementById('loginLink');
  const signupLink = document.getElementById('signupLink');
  const mobileLoginLink = document.getElementById('mobileLoginLink');
  const mobileSignupLink = document.getElementById('mobileSignupLink');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const closeSignupModal = document.getElementById('closeSignupModal');
  const showSignupFromLogin = document.getElementById('showSignupFromLogin');
  const showLoginFromSignup = document.getElementById('showLoginFromSignup');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  
  // User session management
  const userSession = {
    // Check if user is logged in
    isLoggedIn: function() {
      return localStorage.getItem('user') !== null;
    },
    
    // Get current user data
    getUser: function() {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
    
    // Set user session
    setUser: function(userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    },
    
    // Clear user session
    clearUser: function() {
      localStorage.removeItem('user');
    }
  };
  
  // Update UI based on login status
  function updateAuthUI() {
    const user = userSession.getUser();
    
    if (userSession.isLoggedIn() && user) {
      // User is logged in
      // Create user profile display
      const userInitial = user.name.charAt(0).toUpperCase();
      loginLink.innerHTML = `
        <div class="user-profile">
          <div class="user-avatar">${userInitial}</div>
          <span>${user.name}</span>
        </div>
      `;
      loginLink.href = '#';
      loginLink.onclick = function(e) {
        e.preventDefault();
        if (confirm('Bạn có muốn đăng xuất không?')) {
          userSession.clearUser();
          updateAuthUI();
          alert('Đăng xuất thành công!');
        }
      };
      
      signupLink.textContent = 'Đăng xuất';
      signupLink.href = '#';
      signupLink.onclick = function(e) {
        e.preventDefault();
        if (confirm('Bạn có muốn đăng xuất không?')) {
          userSession.clearUser();
          updateAuthUI();
          alert('Đăng xuất thành công!');
        }
      };
      
      // Update mobile links
      mobileLoginLink.innerHTML = `
        <div class="user-profile">
          <div class="user-avatar">${userInitial}</div>
          <span>${user.name}</span>
        </div>
      `;
      mobileLoginLink.href = '#';
      mobileLoginLink.onclick = function(e) {
        e.preventDefault();
        if (confirm('Bạn có muốn đăng xuất không?')) {
          userSession.clearUser();
          updateAuthUI();
          alert('Đăng xuất thành công!');
        }
      };
      
      mobileSignupLink.textContent = 'Đăng xuất';
      mobileSignupLink.href = '#';
      mobileSignupLink.onclick = function(e) {
        e.preventDefault();
        if (confirm('Bạn có muốn đăng xuất không?')) {
          userSession.clearUser();
          updateAuthUI();
          alert('Đăng xuất thành công!');
        }
      };
    } else {
      // User is not logged in
      loginLink.innerHTML = 'Đăng nhập';
      loginLink.href = '#';
      loginLink.onclick = function(e) {
        e.preventDefault();
        openLoginModal();
      };
      
      signupLink.innerHTML = 'Đăng ký';
      signupLink.href = '#';
      signupLink.onclick = function(e) {
        e.preventDefault();
        openSignupModal();
      };
      
      // Update mobile links
      mobileLoginLink.innerHTML = 'Đăng nhập';
      mobileLoginLink.href = '#';
      mobileLoginLink.onclick = function(e) {
        e.preventDefault();
        openLoginModal();
      };
      
      mobileSignupLink.innerHTML = 'Đăng ký';
      mobileSignupLink.href = '#';
      mobileSignupLink.onclick = function(e) {
        e.preventDefault();
        openSignupModal();
      };
    }
  }
  
  // Logout handler
  // Removed - handled directly in updateAuthUI
  
  // Open login modal
  function openLoginModal() {
    // Check if user is already logged in
    if (userSession.isLoggedIn()) {
      if (confirm('Bạn đã đăng nhập. Bạn có muốn đăng xuất không?')) {
        userSession.clearUser();
        updateAuthUI();
        alert('Đăng xuất thành công!');
      }
      return;
    }
    
    loginModal.style.display = 'flex';
    signupModal.style.display = 'none';
  }
  
  // Open signup modal
  function openSignupModal() {
    // Check if user is already logged in
    if (userSession.isLoggedIn()) {
      if (confirm('Bạn đã đăng nhập. Bạn có muốn đăng xuất không?')) {
        userSession.clearUser();
        updateAuthUI();
        alert('Đăng xuất thành công!');
      }
      return;
    }
    
    signupModal.style.display = 'flex';
    loginModal.style.display = 'none';
  }
  
  // Close modals
  function closeModals() {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  }
  
  // Event listeners for opening modals
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    openLoginModal();
  });
  
  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    openSignupModal();
  });
  
  mobileLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    openLoginModal();
  });
  
  mobileSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    openSignupModal();
  });
  
  // Event listeners for closing modals
  closeLoginModal.addEventListener('click', closeModals);
  closeSignupModal.addEventListener('click', closeModals);
  
  // Switch between login and signup
  showSignupFromLogin.addEventListener('click', (e) => {
    e.preventDefault();
    openSignupModal();
  });
  
  showLoginFromSignup.addEventListener('click', (e) => {
    e.preventDefault();
    openLoginModal();
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === loginModal || e.target === signupModal) {
      closeModals();
    }
  });
  
  // Handle login form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in a real app, this would be server-side)
    if (email && password) {
      // Check if user exists in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        // Set user session
        userSession.setUser({
          name: user.name,
          email: user.email
        });
        
        // Update UI
        updateAuthUI();
        
        // Close modal and show success message
        closeModals();
        alert('Đăng nhập thành công!');
        
        // Reset form
        loginForm.reset();
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  });
  
  // Handle signup form submission
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Simple validation (in a real app, this would be server-side)
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        // Check if user already exists
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some(u => u.email === email);
        
        if (!userExists) {
          // Add new user
          users.push({
            name: name,
            email: email,
            password: password
          });
          
          localStorage.setItem('users', JSON.stringify(users));
          
          // Set user session
          userSession.setUser({
            name: name,
            email: email
          });
          
          // Update UI
          updateAuthUI();
          
          // Close modal and show success message
          closeModals();
          alert('Đăng ký thành công!');
          
          // Reset form
          signupForm.reset();
        } else {
          alert('Email này đã được sử dụng!');
        }
      } else {
        alert('Mật khẩu xác nhận không khớp!');
      }
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  });
  
  // Initialize authentication UI
  updateAuthUI();
  
  // Initialize Swiper
  if (typeof Swiper !== 'undefined') {
    // Get all swiper elements
    const swiperElements = document.querySelectorAll('.swiper');
    
    swiperElements.forEach(swiperEl => {
      // Get options from data attribute
      const options = JSON.parse(swiperEl.dataset.swiperOptions || '{}');
      
      // Merge with default options
      const swiperConfig = {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        ...options
      };
      
      // Initialize Swiper
      new Swiper(swiperEl, swiperConfig);
    });
  }
  
  // Initialize Accordion
  if (typeof Accordion !== 'undefined') {
    document.querySelectorAll('.accordion-container').forEach(el => {
      const options = JSON.parse(el.dataset.accordionOptions || '{}');
      new Accordion(el, options);
    });
  }
});