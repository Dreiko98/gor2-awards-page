// Voting page script
const categories = [
    {
        id: 1,
        title: "GOR MÁS GRACIOSO",
        description: "El que más nos ha hecho reír este año",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical" // personas
    },
    {
        id: 2,
        title: "GOR2 MÁS AUSENTE",
        description: "El que más ha brillado por su ausencia",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical"
    },
    {
        id: 3,
        title: "MEJOR CLIP",
        description: "El clip más épico del año",
        options: ["Clip 1", "Clip 2", "Clip 3", "Clip 4"],
        imageType: "horizontal"
    },
    {
        id: 4,
        title: "MEJOR CLIP IRL",
        description: "El mejor momento capturado en la vida real",
        options: ["Clip IRL 1", "Clip IRL 2", "Clip IRL 3", "Clip IRL 4"],
        imageType: "horizontal"
    },
    {
        id: 5,
        title: "GOR2 CON MEJORES STICKERS",
        description: "Los stickers más legendarios",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical"
    },
    {
        id: 6,
        title: "BORRACHO DEL AÑO",
        description: "El que mejor ha celebrado este 2025",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical"
    },
    {
        id: 7,
        title: "GOR2 QUOTES",
        description: "La frase más memorable del año",
        options: ["Quote 1", "Quote 2", "Quote 3", "Quote 4"],
        imageType: "horizontal"
    },
    {
        id: 8,
        title: "MEJOR DESARROLLO DE PERSONAJE 2025",
        description: "El que más ha evolucionado este año",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical"
    },
    {
        id: 9,
        title: "GOR2 HATER",
        description: "El rey del hate",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical"
    },
    {
        id: 10,
        title: "JUEGO DEL AÑO",
        description: "El juego que más nos ha entretenido",
        options: ["Juego 1", "Juego 2", "Juego 3", "Juego 4"],
        imageType: "horizontal"
    },
    {
        id: 11,
        title: "MEJOR STYLE",
        description: "El estilo más icónico",
        options: ["German Style", "Delgado Style", "Huevito Style", "Oscar Style"],
        imageType: "horizontal"
    },
    {
        id: 12,
        title: "TOP HUEVITO STYLE",
        description: "El mejor look del Huevito",
        options: ["Style 1", "Style 2", "Style 3"],
        imageType: "horizontal"
    },
    {
        id: 13,
        title: "MEME DEL AÑO",
        description: "El meme que más nos ha marcado",
        options: ["Meme 1", "Meme 2", "Meme 3", "Meme 4"],
        imageType: "horizontal"
    },
    {
        id: 14,
        title: "MEJOR PERSONAJE SECUNDARIO",
        description: "Los que también son protagonistas",
        options: ["Rocío", "Irene", "Gise", "Angela"],
        imageType: "vertical"
    },
    {
        id: 15,
        title: "MEJOR ANÉCDOTA",
        description: "La historia que nunca olvidaremos",
        options: ["Anécdota 1", "Anécdota 2", "Anécdota 3", "Anécdota 4"],
        imageType: "horizontal"
    },
    {
        id: 16,
        title: "MEJOR FIESTA",
        description: "La noche más épica del año",
        options: ["Fiesta 1", "Fiesta 2", "Fiesta 3", "Fiesta 4"],
        imageType: "horizontal"
    },
    {
        id: 17,
        title: "CASA DEL AÑO",
        description: "El mejor lugar de reunión",
        options: ["Casa Gastón", "Casa Germán", "Casa Carlos", "Abuela de Oscar"],
        imageType: "horizontal"
    },
    {
        id: 18,
        title: "GOR2 CON MÁS FOMO",
        description: "El que más miedo tiene de perderse algo",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical"
    },
    {
        id: 19,
        title: "MEJOR REGALO AMIGO INVISIBLE DEL AÑO PASADO",
        description: "El regalo más memorable",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical"
    },
    {
        id: 20,
        title: "MEJOR DUPLA GAMING DEL AÑO",
        description: "El mejor equipo de gaming",
        options: ["Dupla 1", "Dupla 2", "Dupla 3", "Dupla 4"],
        imageType: "horizontal"
    },
    {
        id: 21,
        title: "MEJOR VLOG",
        description: "El vlog más épico",
        options: ["Vlog 1", "Vlog 2", "Vlog 3", "Vlog 4"],
        imageType: "horizontal"
    }
];

let currentCategoryIndex = 0;
let votes = {};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userData = localStorage.getItem('gor2_user');
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }

    // Load saved votes if any
    const savedVotes = localStorage.getItem('gor2_votes');
    if (savedVotes) {
        votes = JSON.parse(savedVotes);
    }

    // Add entrance animation
    animatePageEntrance();

    // Display first category
    displayCategory(currentCategoryIndex);
    updateVoteCounter();

    // Event listeners
    document.getElementById('prevCategory').addEventListener('click', previousCategory);
    document.getElementById('nextCategory').addEventListener('click', nextCategory);
    document.getElementById('exitVoting').addEventListener('click', exitVoting);
    document.getElementById('submitVotes').addEventListener('click', submitAllVotes);
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('viewAllCategories').addEventListener('click', showAllCategories);
    document.getElementById('closeAllCategories').addEventListener('click', closeAllCategoriesModal);
});

function animatePageEntrance() {
    const header = document.querySelector('.voting-header');
    const container = document.querySelector('.voting-container');
    
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        header.style.transition = 'all 0.6s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 200);
    }, 100);
}

function displayCategory(index) {
    const category = categories[index];
    
    // Add fade out animation
    const votingGrid = document.getElementById('votingGrid');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');
    
    votingGrid.style.opacity = '0';
    votingGrid.style.transform = 'translateY(20px)';
    categoryTitle.style.opacity = '0';
    categoryTitle.style.transform = 'translateY(-20px)';
    categoryDescription.style.opacity = '0';
    
    setTimeout(() => {
        // Update title and description
        categoryTitle.textContent = category.title;
        categoryDescription.textContent = category.description;
        
        // Create voting grid
        votingGrid.innerHTML = '';
        
        category.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'vote-option';
            optionDiv.style.opacity = '0';
            optionDiv.style.transform = 'translateY(30px)';
            
            // Check if this option is already voted
            if (votes[category.id] === option) {
                optionDiv.classList.add('selected');
            }
            
            // Crear slug para la imagen (ej: "german" de "Germán")
            const imageSlug = option.toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Quitar acentos
                .replace(/\s+/g, '-'); // Reemplazar espacios por guiones
            
            const imagePath = `assets/nominees/${category.id}/${imageSlug}.jpg`;
            
            optionDiv.innerHTML = `
                <div class="option-image-container ${category.imageType}">
                    <img src="${imagePath}" alt="${option}" class="option-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="option-image-placeholder" style="display:none;">
                        ${category.imageType === 'vertical' ? '👤' : '🎮'}
                    </div>
                </div>
                <div class="option-content">
                    <div class="option-title">${option}</div>
                </div>
            `;
            
            optionDiv.addEventListener('click', () => selectOption(category.id, option));
            
            votingGrid.appendChild(optionDiv);
            
            // Stagger animation for each option
            setTimeout(() => {
                optionDiv.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                optionDiv.style.opacity = '1';
                optionDiv.style.transform = 'translateY(0)';
            }, 100 + (i * 50));
        });
        
        // Fade in title and description
        categoryTitle.style.transition = 'all 0.6s ease';
        categoryTitle.style.opacity = '1';
        categoryTitle.style.transform = 'translateY(0)';
        
        categoryDescription.style.transition = 'all 0.6s ease';
        categoryDescription.style.opacity = '1';
        
        votingGrid.style.transition = 'all 0.6s ease';
        votingGrid.style.opacity = '1';
        votingGrid.style.transform = 'translateY(0)';
    }, 200);
    
    // Update navigation buttons
    document.getElementById('prevCategory').disabled = index === 0;
    document.getElementById('nextCategory').disabled = index === categories.length - 1;
    
    // Show submit button on last category
    if (index === categories.length - 1) {
        document.getElementById('submitSection').style.display = 'block';
    } else {
        document.getElementById('submitSection').style.display = 'none';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectOption(categoryId, option) {
    votes[categoryId] = option;
    
    // Save votes to localStorage
    localStorage.setItem('gor2_votes', JSON.stringify(votes));
    
    // Update display
    displayCategory(currentCategoryIndex);
    updateVoteCounter();
    
    // Auto advance after 0.5 seconds if not on last category
    if (currentCategoryIndex < categories.length - 1) {
        setTimeout(() => {
            nextCategory();
        }, 500);
    }
}

function updateVoteCounter() {
    const voteCount = Object.keys(votes).length;
    document.getElementById('voteCount').textContent = voteCount;
}

function previousCategory() {
    if (currentCategoryIndex > 0) {
        currentCategoryIndex--;
        displayCategory(currentCategoryIndex);
    }
}

function nextCategory() {
    if (currentCategoryIndex < categories.length - 1) {
        currentCategoryIndex++;
        displayCategory(currentCategoryIndex);
    }
}

function exitVoting() {
    if (confirm('¿Estás seguro de que quieres salir? Tus votos se guardarán.')) {
        window.location.href = 'index.html';
    }
}

function submitAllVotes() {
    const voteCount = Object.keys(votes).length;
    
    if (voteCount < categories.length) {
        if (!confirm(`Solo has votado en ${voteCount} de ${categories.length} categorías. ¿Quieres enviar los votos de todos modos?`)) {
            return;
        }
    }
    
    // Get user data
    const userData = JSON.parse(localStorage.getItem('gor2_user'));
    
    // Prepare final submission
    const submission = {
        user: userData,
        votes: votes,
        timestamp: new Date().toISOString()
    };
    
    // Store submission locally as backup
    localStorage.setItem('gor2_submission', JSON.stringify(submission));
    
    // Detect if we're in production (Netlify) or development (localhost)
    const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    
    if (isProduction) {
        // In production, send to Netlify Forms
        sendVotesToServer(submission)
            .then(() => {
                console.log('Votes submitted successfully to Netlify:', submission);
                showConfirmationModal(userData.nombre);
            })
            .catch((error) => {
                console.error('Error submitting votes:', error);
                alert('Hubo un error al enviar los votos. Por favor, inténtalo de nuevo.');
            });
    } else {
        // In development, just show success (votes saved in localStorage)
        console.log('DESARROLLO: Votos guardados localmente:', submission);
        console.log('📝 En producción (Netlify), estos votos se enviarán al servidor');
        showConfirmationModal(userData.nombre);
    }
}

// Function to send votes to server/Netlify Forms
async function sendVotesToServer(submission) {
    try {
        // Prepare data for Netlify Forms
        const formData = new URLSearchParams();
        formData.append('form-name', 'gor2-votes');
        formData.append('nombre', submission.user.nombre);
        formData.append('apellidos', submission.user.apellidos);
        formData.append('email', submission.user.email);
        formData.append('timestamp', submission.timestamp);
        formData.append('votes', JSON.stringify(submission.votes));
        
        // Send to Netlify Forms
        const response = await fetch('/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response;
    } catch (error) {
        console.error('Error in sendVotesToServer:', error);
        throw error;
    }
}

function showConfirmationModal(nombre) {
    const modal = document.getElementById('confirmModal');
    document.getElementById('voterName').textContent = nombre;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('confirmModal');
    modal.classList.remove('active');
    
    // Clear votes and redirect
    localStorage.removeItem('gor2_votes');
    localStorage.removeItem('gor2_user');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

function showAllCategories() {
    const modal = document.getElementById('allCategoriesModal');
    const grid = document.getElementById('allCategoriesGrid');
    
    grid.innerHTML = '';
    
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        
        if (votes[category.id]) {
            card.classList.add('voted');
        }
        
        card.innerHTML = `
            <h3>${category.title}</h3>
            <p>${category.description}</p>
            ${votes[category.id] ? `<div class="voted-option">✓ ${votes[category.id]}</div>` : '<p style="color: var(--text-gray); font-size: 0.85rem;">Sin voto</p>'}
        `;
        
        card.addEventListener('click', () => {
            currentCategoryIndex = category.id - 1;
            closeAllCategoriesModal();
            displayCategory(currentCategoryIndex);
        });
        
        grid.appendChild(card);
    });
    
    modal.classList.add('active');
}

function closeAllCategoriesModal() {
    const modal = document.getElementById('allCategoriesModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const allCategoriesModal = document.getElementById('allCategoriesModal');
    if (e.target === allCategoriesModal) {
        closeAllCategoriesModal();
    }
});
