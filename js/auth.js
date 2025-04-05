document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            
            // Field validation
            if (!email || !password) {
                showError("Please fill in all fields");
                return;
            }
            
            // Email format validation (basic check)
            if (!validateEmail(email)) {
                showError("Please enter a valid email address");
                return;
            }
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
            submitBtn.disabled = true;
            
            // Simulate API call with timeout
            setTimeout(() => {
                // For demo purposes, we'll accept any non-empty email/password
                // In a real app, you would verify credentials with your backend
                window.location.href = 'dashboard.html';
                
                // Reset button state (in case redirect fails)
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showError(message) {
        // Remove any existing error messages
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create and display error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        `;
        
        // Insert before the submit button
        const submitBtn = document.querySelector('.auth-form .btn');
        submitBtn.parentNode.insertBefore(errorElement, submitBtn);
        
        // Add shake animation to form
        const form = document.querySelector('.auth-form');
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    const eyeIcon = passwordToggle.querySelector('i');
    
    passwordToggle.addEventListener('click', function() {
        // Toggle password visibility
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
        
        // Focus the input after toggle
        passwordInput.focus();
    });
    
    // Add animation for better UX
    passwordToggle.addEventListener('mousedown', function(e) {
        e.preventDefault(); // Prevent focus loss
        this.style.transform = 'scale(0.9)';
    });
    
    passwordToggle.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });
    
    passwordToggle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});