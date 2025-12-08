// Login page script
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.querySelector('.login-container');
    const countdownOverlay = document.getElementById('countdownOverlay');
    
    // ⚙️ MODO DESARROLLO: Cambia esto a 'true' para skipear el countdown
    const DEV_MODE = false; // Cambia a 'false' antes de deployment
    
    // 🔐 CONTRASEÑA ADMIN para bypass del countdown
    const ADMIN_PASSWORD = 'Gor2#SaveOscar';
    
    // Check if admin bypass is active
    let adminBypass = sessionStorage.getItem('gor2_admin_bypass') === 'true';
    
    // Set deadline: December 8, 2025 at 17:05 (5:05 PM)
    const deadline = new Date('2025-12-08T17:13:00').getTime();
    
    // Function to update countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;
        
        // Skip countdown if in DEV_MODE or admin bypass
        if (DEV_MODE || adminBypass) {
            if (countdownOverlay) {
                countdownOverlay.classList.add('hidden');
            }
            if (loginContainer) {
                loginContainer.classList.remove('locked');
            }
            return;
        }
        
        if (timeLeft <= 0) {
            // Deadline reached - unlock voting
            if (countdownOverlay) {
                countdownOverlay.classList.add('hidden');
            }
            if (loginContainer) {
                loginContainer.classList.remove('locked');
            }
            return;
        }
        
        // Show countdown overlay and lock form
        if (countdownOverlay) {
            countdownOverlay.classList.remove('hidden');
        }
        if (loginContainer) {
            loginContainer.classList.add('locked');
        }
        
        // Calculate time units
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Update DOM
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    // Update countdown immediately and every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add entrance animation
    loginContainer.style.opacity = '0';
    loginContainer.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        loginContainer.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        loginContainer.style.opacity = '1';
        loginContainer.style.transform = 'translateY(0)';
    }, 100);
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre').value;
            const apellidos = document.getElementById('apellidos').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validate password
            const correctPassword = 'Gor2#SaveOscar';
            if (password !== correctPassword) {
                alert('❌ Contraseña incorrecta\n\nPor favor, contacta con el administrador para obtener la contraseña correcta.');
                document.getElementById('password').value = '';
                document.getElementById('password').focus();
                return;
            }
            
            // Store user data in localStorage
            const userData = {
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                timestamp: new Date().toISOString()
            };
            
            localStorage.setItem('gor2_user', JSON.stringify(userData));
            
            // Add exit animation before redirect
            document.querySelector('.login-container').style.opacity = '0';
            document.querySelector('.login-container').style.transform = 'translateY(-30px)';
            
            setTimeout(() => {
                window.location.href = 'voting.html';
            }, 400);
        });
    }
    
    // Add floating particles effect
    createParticles();
    
    // 🔧 Admin Access Handler
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    const adminPasswordInput = document.getElementById('adminPassword');
    const adminError = document.getElementById('adminError');
    
    if (adminAccessBtn && adminPasswordInput) {
        // Handle Enter key in password input
        adminPasswordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                adminAccessBtn.click();
            }
        });
        
        adminAccessBtn.addEventListener('click', function() {
            const enteredPassword = adminPasswordInput.value;
            
            if (enteredPassword === ADMIN_PASSWORD) {
                // Set admin bypass flag
                sessionStorage.setItem('gor2_admin_bypass', 'true');
                adminBypass = true;
                
                // Hide countdown overlay
                if (countdownOverlay) {
                    countdownOverlay.style.transition = 'opacity 0.5s ease';
                    countdownOverlay.style.opacity = '0';
                    setTimeout(() => {
                        countdownOverlay.classList.add('hidden');
                        countdownOverlay.style.opacity = '1';
                    }, 500);
                }
                
                // Unlock login container
                if (loginContainer) {
                    loginContainer.classList.remove('locked');
                }
                
                // Clear input
                adminPasswordInput.value = '';
                
                // Show success message briefly
                if (adminError) {
                    adminError.textContent = '✅ Acceso admin concedido';
                    adminError.style.color = '#4ade80';
                    setTimeout(() => {
                        adminError.textContent = '';
                    }, 2000);
                }
            } else {
                // Show error
                if (adminError) {
                    adminError.textContent = '❌ Contraseña incorrecta';
                    adminPasswordInput.value = '';
                    adminPasswordInput.focus();
                    
                    // Clear error after 3 seconds
                    setTimeout(() => {
                        adminError.textContent = '';
                    }, 3000);
                }
            }
        });
    }
});

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '0';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 107, 53, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}
