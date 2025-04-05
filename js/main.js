document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.notification')) {
            document.querySelectorAll('.notification-dropdown').forEach(dropdown => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            });
        }
        
        if (!e.target.closest('.user-menu')) {
            document.querySelectorAll('.user-dropdown').forEach(dropdown => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            });
        }
    });
    
    // Logout functionality
    const logoutButtons = document.querySelectorAll('.logout, .btn-logout');
    
    logoutButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would call a logout API
            window.location.href = 'index.html';
        });
    });
    
    // Responsive adjustments
    function handleResponsive() {
        if (window.innerWidth < 992) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
            sidebar.classList.remove('active');
        }
    }
    
    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});
document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.notification')) {
            document.querySelectorAll('.notification-dropdown').forEach(dropdown => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            });
        }
        
        if (!e.target.closest('.user-menu')) {
            document.querySelectorAll('.user-dropdown').forEach(dropdown => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            });
        }
    });
    
    // Logout functionality
    const logoutButtons = document.querySelectorAll('.logout, .btn-logout');
    
    logoutButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would call a logout API
            window.location.href = 'index.html';
        });
    });
    
    // Responsive adjustments
    function handleResponsive() {
        if (window.innerWidth < 992) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
            sidebar.classList.remove('active');
        }
    }
    
    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});