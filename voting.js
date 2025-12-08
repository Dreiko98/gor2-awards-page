// Voting page script
const categories = [
    {
        id: 1,
        title: "GOR2 MÁS GRACIOSO",
        description: "El que más nos ha hecho reír este año",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical", // personas
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 2,
        title: "GOR2 MÁS AUSENTE",
        description: "El que más ha brillado por su ausencia",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 3,
        title: "MEJOR CLIP",
        description: "El clip más épico del año",
        options: ["El gameplay mas random de fifa", "Vale bro, sabes algo de Python?", "Qué es Resela?", "A Óscar le cuesta meterla"],
        imageType: "youtube",
        youtubeVideos: {
            "El gameplay mas random de fifa": "yziDX9YOc-Y",
            "Vale bro, sabes algo de Python?": "EomeOOkclfw",
            "Qué es Resela?": "af6SxDXYUEY",
            "A Óscar le cuesta meterla": "rczHws-8mt8"
        },
        images: {
            "El gameplay mas random de fifa": "assets/mejor clip/video del fifa.jpg"
        }
    },
    {
        id: 4,
        title: "MEJOR CLIP IRL",
        description: "El mejor momento capturado en la vida real",
        options: ["Los pibes cantando Superestrella", "Germán y Gajas bailan y Gajas se pica", "Oscar y Gajas carreando al futbolín en Oviedo", "Salsa buffalo", "DEP Búho"],
        imageType: "youtube",
        youtubeVideos: {
            "Los pibes cantando Superestrella": "k6VGWcgqXs4",
            "Germán y Gajas bailan y Gajas se pica": "8BQgEikwL2I",
            "Oscar y Gajas carreando al futbolín en Oviedo": "yLK6JtyDOrM",
            "Salsa buffalo": "JhqK2PGUeQ8",
            "DEP Búho": "X-Ilcg0rOzw"
        },
        images: {
            "Los pibes cantando Superestrella": "assets/clip irl/superestrella.jpeg",
            "Germán y Gajas bailan y Gajas se pica": "assets/clip irl/gajas picao.jpeg",
            "Oscar y Gajas carreando al futbolín en Oviedo": "assets/clip irl/futbolin.jpeg",
            "Salsa buffalo": "assets/clip irl/salsa buffalo.jpeg"
        }
    },
    {
        id: 5,
        title: "GOR2 CON MEJORES STICKERS",
        description: "Los stickers más legendarios",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 6,
        title: "BORRACHO DEL AÑO",
        description: "El que mejor ha celebrado este 2025",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 7,
        title: "GOR2 QUOTES",
        description: "La frase más memorable del año",
        options: [
            "\"Estoy seguro en un 70% de que acabo de tener una cita\" - Enzo",
            "\"No es pajeable\" - Germán ... \"Pajeable es casi todo\" - Gajas",
            "\"Va bro pon tetas que me tengo que ir\" - Gajas",
            "\"No me gusta deber dinero a la gente\" - Gaston",
            "\"Estoy lleno\" - Germán",
            "\"¿Mafalda Cardenal esa es la del colegio?\" - Óscar",
            "\"¿Los mayores se emborrachan?\" - Óscar",
            "\"Siempre tengo a mano mi factura del god of war Ragnarok\" - Enzo",
            "\"Estaba conduciendo y la vi toda panchi\" - Carlos",
            "\"Perdón Oscar\" - Gastón"
        ],
        imageType: "quote"
    },
    {
        id: 8,
        title: "MEJOR DESARROLLO DE PERSONAJE 2025",
        description: "El que más ha evolucionado este año",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 9,
        title: "GOR2 HATER",
        description: "El rey del hate",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 10,
        title: "JUEGO DEL AÑO",
        description: "El juego que más nos ha entretenido",
        options: ["Expedition 33", "REPO", "Silksong", "Rematch"],
        imageType: "horizontal",
        images: {
            "Expedition 33": "assets/juegodelano/expedition33.jpg",
            "REPO": "assets/juegodelano/repo.jpg",
            "Silksong": "assets/juegodelano/silksong.avif",
            "Rematch": "assets/juegodelano/rematch.jpg"
        }
    },
    {
        id: 11,
        title: "GOR2 MÁS EMPANAO",
        description: "El más empanado del año",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 12,
        title: "TOP HUEVITO STYLE",
        description: "Las mejores anécdotas del Huevito",
        options: [
            "Pillar dos toallitas para lavarse las manos en el Moflete y dejar a Carlos sin",
            "Querer que carlos le lleve a la hamburguesería en coche y dejar a Pablo solo",
            "Plantarse en casa de Enzo sin avisar para jugar el nuevo God of War",
            "Decir que no quiere probar un juego nuevo porque se tiene que ir a dormir para estudiar y se tira jugando a brawlhalla 1 hora más",
            "Cuando le toca hacer la primera compra del viaje entero automaticamente se ensordece y desaparece esperando que lo haga otro",
            "Coger un plan, copiarlo con su otro grupo de amigos y no ir al plan original",
            "No subirse en un coche de 5 personas por ir en un coche de 4 personas aunque logísticamente fuera más cómodo lo otro"
        ],
        imageType: "anecdote"
    },
    {
        id: 13,
        title: "MEJOR FIESTA",
        description: "La noche más épica del año",
        options: ["Salsa buffalo", "Committee", "Most + Rumbo", "Fiesta en Oviedo con viki"],
        imageType: "horizontal",
        images: {
            "Salsa buffalo": "assets/fiesta/salsabuffalo.JPG",
            "Committee": "assets/fiesta/committee.JPG",
            "Most + Rumbo": "assets/fiesta/rumbomost.jpg",
            "Fiesta en Oviedo con viki": "assets/fiesta/fiestaOviedo.jpg"
        }
    },
    {
        id: 14,
        title: "CASA DEL AÑO",
        description: "El mejor lugar de reunión",
        options: ["Casa Gastón", "Casa Germán", "Casa Carlos", "Abuela de Oscar"],
        imageType: "horizontal",
        images: {
            "Casa Gastón": "assets/casa/casagaston.jpeg",
            "Casa Germán": "assets/casa/casagerman.jpeg",
            "Casa Carlos": "assets/casa/casacarlos.jpeg",
            "Abuela de Oscar": "assets/casa/casaabuelaoscar.jpeg"
        }
    },
    {
        id: 15,
        title: "GOR2 CON MÁS FOMO",
        description: "El que más miedo tiene de perderse algo",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 16,
        title: "MEJOR REGALO AMIGO INVISIBLE DEL AÑO PASADO",
        description: "El regalo más memorable",
        options: ["Germán", "Gajas", "Enzo", "Delgado", "Carlos", "Colomino", "Gastón", "Oscar"],
        imageType: "vertical",
        images: {
            "Germán": "assets/nominees/german/german.jpg",
            "Gajas": "assets/nominees/gajas/gajas.jpg",
            "Enzo": "assets/nominees/enzo/enzo.jpg",
            "Delgado": "assets/nominees/delgado/delgado.jpg",
            "Carlos": "assets/nominees/carlos/carlos.jpg",
            "Colomino": "assets/nominees/colomino/colomino.jpg",
            "Gastón": "assets/nominees/gaston/gaston.jpg",
            "Oscar": "assets/nominees/oscar/oscar.jpg"
        }
    },
    {
        id: 17,
        title: "MEJOR DUPLA GAMING DEL AÑO",
        description: "El mejor equipo de gaming",
        options: ["Gajas y Germán", "Delgado y Gaston", "Gaston y Enzo"],
        imageType: "dupla",
        images: {
            "Gajas y Germán": ["assets/nominees/gajas/gajas.jpg", "assets/nominees/german/german.jpg"],
            "Delgado y Gaston": ["assets/nominees/delgado/delgado.jpg", "assets/nominees/gaston/gaston.jpg"],
            "Gaston y Enzo": ["assets/nominees/gaston/gaston.jpg", "assets/nominees/enzo/enzo.jpg"]
        }
    },
    {
        id: 18,
        title: "MEJOR VLOG",
        description: "El vlog más épico",
        options: ["Fuente de Rubielos 2", "Oviedo (TBD)", "Roma"],
        imageType: "youtube",
        youtubeVideos: {
            "Fuente de Rubielos 2": "vfoxp7lo5Q4",
            "Roma": "Ff3DspkjDeI"
        },
        images: {
            "Fuente de Rubielos 2": "assets/vlog/rubielos.jpg",
            "Oviedo (TBD)": "assets/vlog/mini_oviedo.jpg",
            "Roma": "assets/vlog/roma.jpg"
        },
        comingSoon: {
            "Oviedo (TBD)": "31/12/2025"
        }
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
            
            let imagePath = '';
            if (category.images && category.images[option]) {
                imagePath = category.images[option];
            } else {
                imagePath = `assets/nominees/${category.id}/${imageSlug}.jpg`;
            }
            
            // Manejo especial para quotes y anecdotes
            if (category.imageType === 'quote') {
                optionDiv.innerHTML = `
                    <div class="quote-content">
                        <div class="quote-icon">💬</div>
                        <div class="quote-text">${option}</div>
                    </div>
                `;
            } else if (category.imageType === 'anecdote') {
                optionDiv.innerHTML = `
                    <div class="quote-content">
                        <div class="quote-icon">📖</div>
                        <div class="quote-text">${option}</div>
                    </div>
                `;
            } else if (category.imageType === 'youtube') {
                // Para videos de YouTube, crear la tarjeta SIN botón
                const videoId = category.youtubeVideos && category.youtubeVideos[option];
                const comingSoonDate = category.comingSoon && category.comingSoon[option];
                
                // Priorizar imagen local si está disponible, sino usar miniatura de YouTube
                let thumbnailUrl;
                if (imagePath) {
                    // Si hay imagen local definida, usarla
                    thumbnailUrl = imagePath;
                } else if (videoId) {
                    // Si no hay imagen local pero hay videoId, usar miniatura de YouTube
                    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                } else {
                    // Fallback final
                    thumbnailUrl = `assets/nominees/${category.id}/${imageSlug}.jpg`;
                }
                
                // Solo la tarjeta clickeable
                optionDiv.innerHTML = `
                    <div class="option-image-container horizontal">
                        <img src="${thumbnailUrl}" alt="${option}" class="option-image" 
                             onerror="this.src='${videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''}'; if(!this.src) this.style.display='none';">
                    </div>
                    <div class="option-content">
                        <div class="option-title">${option}</div>
                    </div>
                `;
                
                // Crear el botón como elemento SEPARADO
                if (comingSoonDate) {
                    const buttonContainer = document.createElement('div');
                    buttonContainer.className = 'youtube-button-container';
                    buttonContainer.innerHTML = `<span class="coming-soon-label">🚀 PRÓXIMO: ${comingSoonDate}</span>`;
                    optionDiv.appendChild(buttonContainer);
                } else if (videoId) {
                    const buttonContainer = document.createElement('div');
                    buttonContainer.className = 'youtube-button-container';
                    
                    const youtubeButton = document.createElement('a');
                    youtubeButton.href = `https://youtu.be/${videoId}`;
                    youtubeButton.target = '_blank';
                    youtubeButton.className = 'youtube-button';
                    youtubeButton.innerHTML = '<span class="youtube-icon">▶</span> Ver en YouTube';
                    
                    // Prevenir que el click se propague al padre
                    youtubeButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                    
                    buttonContainer.appendChild(youtubeButton);
                    optionDiv.appendChild(buttonContainer);
                } else {
                    const tbdContainer = document.createElement('div');
                    tbdContainer.className = 'youtube-button-container';
                    tbdContainer.innerHTML = '<span class="tbd-label">TBD</span>';
                    optionDiv.appendChild(tbdContainer);
                }
            } else if (category.imageType === 'dupla') {
                // Para duplas, mostrar dos imágenes lado a lado
                const images = category.images[option];
                optionDiv.innerHTML = `
                    <div class="dupla-images">
                        <div class="dupla-image-container">
                            <img src="${images[0]}" alt="${option.split(' y ')[0]}" class="dupla-image" 
                                 onerror="this.style.display='none';">
                        </div>
                        <div class="dupla-vs">VS</div>
                        <div class="dupla-image-container">
                            <img src="${images[1]}" alt="${option.split(' y ')[1]}" class="dupla-image" 
                                 onerror="this.style.display='none';">
                        </div>
                    </div>
                    <div class="option-content">
                        <div class="option-title">${option}</div>
                    </div>
                `;
            } else {
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
            }
            
            // Añadir el listener de selección (común para todos)
            optionDiv.addEventListener('click', (e) => {
                // Para YouTube, evitar selección si se hace click en el botón
                if (category.imageType === 'youtube' && e.target.closest('.youtube-button-container')) {
                    return; // No hacer nada si se hace click en el contenedor del botón
                }
                selectOption(category.id, option);
            });
            
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
    
    // Update vote counter
    updateVoteCounter();
    
    // Auto advance after 0.3 seconds if not on last category
    if (currentCategoryIndex < categories.length - 1) {
        setTimeout(() => {
            nextCategory();
        }, 300);
    } else {
        // If on last category, just update display
        displayCategory(currentCategoryIndex);
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
    
    // Show recap modal instead of sending directly
    showRecapModal();
}

function confirmAndSendVotes() {
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

function showRecapModal() {
    const modal = document.getElementById('recapModal');
    const userData = JSON.parse(localStorage.getItem('gor2_user'));
    const recapGrid = document.getElementById('recapGrid');
    
    // Update voter name and total
    document.getElementById('recapVoterName').textContent = `${userData.nombre} ${userData.apellidos}`;
    document.getElementById('recapTotalVotes').textContent = Object.keys(votes).length;
    
    // Clear previous content
    recapGrid.innerHTML = '';
    
    // Show all votes
    categories.forEach(category => {
        const recapItem = document.createElement('div');
        recapItem.className = 'recap-item';
        
        if (votes[category.id]) {
            recapItem.classList.add('voted');
            recapItem.innerHTML = `
                <div class="recap-category">
                    <span class="recap-number">${category.id}</span>
                    <h3>${category.title}</h3>
                </div>
                <div class="recap-vote">
                    <span class="vote-icon">✓</span>
                    <span class="vote-name">${votes[category.id]}</span>
                </div>
            `;
        } else {
            recapItem.classList.add('not-voted');
            recapItem.innerHTML = `
                <div class="recap-category">
                    <span class="recap-number">${category.id}</span>
                    <h3>${category.title}</h3>
                </div>
                <div class="recap-vote">
                    <span class="vote-icon">⚠</span>
                    <span class="vote-name">Sin voto</span>
                </div>
            `;
        }
        
        recapGrid.appendChild(recapItem);
    });
    
    modal.classList.add('active');
}

function closeRecapModal() {
    const modal = document.getElementById('recapModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const allCategoriesModal = document.getElementById('allCategoriesModal');
    const recapModal = document.getElementById('recapModal');
    if (e.target === allCategoriesModal) {
        closeAllCategoriesModal();
    }
    if (e.target === recapModal) {
        closeRecapModal();
    }
});

// Event listeners for recap modal buttons
document.getElementById('closeRecap').addEventListener('click', closeRecapModal);
document.getElementById('confirmRecap').addEventListener('click', () => {
    closeRecapModal();
    confirmAndSendVotes();
});
document.getElementById('editVotes').addEventListener('click', closeRecapModal);
document.getElementById('shareRecap').addEventListener('click', generateShareableImage);

// Función para generar imagen compartible 9:16 (1080x1920)
async function generateShareableImage() {
    // Obtener el nombre completo del usuario
    const userData = JSON.parse(localStorage.getItem('gor2_user'));
    const userName = userData ? `${userData.nombre} ${userData.apellidos}` : 'Usuario';
    
    // Crear canvas con dimensiones 9:16 para Instagram Stories/TikTok
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    
    // Fondo negro puro estilo años 80
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, 1080, 1920);
    
    // Grid retro de fondo (estilo Tron)
    ctx.strokeStyle = 'rgba(255, 107, 53, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 1920; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(1080, i);
        ctx.stroke();
    }
    for (let i = 0; i < 1080; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 1920);
        ctx.stroke();
    }
    
    // Efecto de líneas de neón en los bordes
    const neonGradientLeft = ctx.createLinearGradient(0, 0, 100, 0);
    neonGradientLeft.addColorStop(0, 'rgba(255, 107, 53, 0.4)');
    neonGradientLeft.addColorStop(1, 'rgba(255, 107, 53, 0)');
    ctx.fillStyle = neonGradientLeft;
    ctx.fillRect(0, 0, 100, 1920);
    
    const neonGradientRight = ctx.createLinearGradient(980, 0, 1080, 0);
    neonGradientRight.addColorStop(0, 'rgba(255, 107, 53, 0)');
    neonGradientRight.addColorStop(1, 'rgba(255, 107, 53, 0.4)');
    ctx.fillStyle = neonGradientRight;
    ctx.fillRect(980, 0, 100, 1920);
    
    // Borde superior neón grueso
    const topGradient = ctx.createLinearGradient(0, 0, 0, 20);
    topGradient.addColorStop(0, '#ff6b35');
    topGradient.addColorStop(0.5, '#ff4500');
    topGradient.addColorStop(1, '#ff6b35');
    ctx.fillStyle = topGradient;
    ctx.fillRect(0, 0, 1080, 20);
    
    // Sombra del borde superior (efecto neón)
    ctx.shadowColor = '#ff6b35';
    ctx.shadowBlur = 30;
    ctx.fillRect(0, 0, 1080, 20);
    ctx.shadowBlur = 0;
    
    // Título con efecto neón
    ctx.textAlign = 'center';
    
    // Sombra/resplandor neón para el título
    ctx.shadowColor = '#ff6b35';
    ctx.shadowBlur = 40;
    ctx.fillStyle = '#ff6b35';
    ctx.font = 'bold 90px Arial';
    ctx.fillText('GOR2 AWARDS', 540, 110);
    
    // Año con efecto neón más intenso
    ctx.shadowBlur = 50;
    ctx.font = 'bold 70px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('2025', 540, 180);
    ctx.shadowBlur = 0;
    
    // Rectángulo con borde neón para el nombre de usuario
    ctx.strokeStyle = '#ff6b35';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#ff6b35';
    ctx.shadowBlur = 20;
    ctx.strokeRect(150, 200, 780, 60);
    ctx.shadowBlur = 0;
    
    // Nombre de usuario
    ctx.fillStyle = '#ffffff';
    ctx.font = '32px Arial';
    ctx.fillText(`Votos de ${userName}`, 540, 240);
    
    // Líneas decorativas estilo retro
    for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(255, 107, 53, ${0.6 - i * 0.2})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(80, 280 + i * 5);
        ctx.lineTo(1000, 280 + i * 5);
        ctx.stroke();
    }
    
    // Renderizar votos (máximo 20 categorías)
    let yPosition = 320;
    const lineHeight = 85;
    const maxCategories = 20;
    let categoriesShown = 0;
    
    categories.forEach((category, index) => {
        if (categoriesShown >= maxCategories) return;
        
        const vote = votes[category.id];
        const hasVoted = vote !== null && vote !== undefined;
        
        // Rectángulo de fondo para cada categoría (estilo cassette/consola retro)
        if (hasVoted) {
            ctx.fillStyle = 'rgba(255, 107, 53, 0.08)';
            ctx.fillRect(90, yPosition - 30, 900, 70);
            
            // Borde neón sutil
            ctx.strokeStyle = 'rgba(255, 107, 53, 0.4)';
            ctx.lineWidth = 2;
            ctx.strokeRect(90, yPosition - 30, 900, 70);
        }
        
        // Número de categoría con efecto neón
        if (hasVoted) {
            ctx.shadowColor = '#ff6b35';
            ctx.shadowBlur = 15;
        }
        ctx.fillStyle = hasVoted ? '#ff6b35' : '#424242';
        ctx.beginPath();
        ctx.arc(120, yPosition, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Borde del círculo
        ctx.strokeStyle = hasVoted ? '#ff4500' : '#2a2a2a';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.fillStyle = '#0a0a0a';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText((index + 1).toString(), 120, yPosition + 8);
        
        // Título de categoría con efecto de resplandor
        if (hasVoted) {
            ctx.shadowColor = '#ffffff';
            ctx.shadowBlur = 8;
        }
        ctx.fillStyle = hasVoted ? '#ffffff' : '#666666';
        ctx.font = 'bold 22px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(category.title.toUpperCase(), 170, yPosition + 8);
        ctx.shadowBlur = 0;
        
        // Voto seleccionado
        if (hasVoted) {
            // El voto ya es el nombre de la opción, no el índice
            const selectedOption = vote;
            
            // Efecto de resplandor neón en el texto
            ctx.shadowColor = '#ff6b35';
            ctx.shadowBlur = 12;
            ctx.fillStyle = '#ff6b35';
            ctx.font = '20px Arial';
            
            // Función para dividir texto en múltiples líneas
            const maxWidth = 800; // Ancho máximo del texto reducido por el padding
            const words = selectedOption.split(' ');
            let line = '';
            let lines = [];
            
            for (let n = 0; n < words.length; n++) {
                let testLine = line + words[n] + ' ';
                let metrics = ctx.measureText(testLine);
                let testWidth = metrics.width;
                
                if (testWidth > maxWidth && n > 0) {
                    lines.push(line.trim());
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line.trim());
            
            // Limitar a 2 líneas como máximo
            if (lines.length > 2) {
                lines = lines.slice(0, 2);
                lines[1] = lines[1].substring(0, lines[1].length - 3) + '...';
            }
            
            // Dibujar cada línea con efecto neón
            lines.forEach((textLine, lineIndex) => {
                const prefix = lineIndex === 0 ? '▶ ' : '  ';
                ctx.fillText(prefix + textLine, 170, yPosition + 38 + (lineIndex * 24));
            });
            ctx.shadowBlur = 0;
        } else {
            ctx.fillStyle = '#444444';
            ctx.font = 'italic 18px Arial';
            ctx.fillText('[ SIN VOTO ]', 170, yPosition + 38);
        }
        
        yPosition += lineHeight;
        categoriesShown++;
    });
    
    // Footer estilo retro
    const footerY = 1850;
    
    // Líneas decorativas superiores
    for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(255, 107, 53, ${0.6 - i * 0.2})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(80, footerY - 60 + i * 5);
        ctx.lineTo(1000, footerY - 60 + i * 5);
        ctx.stroke();
    }
    
    // Borde inferior neón grueso
    const bottomGradient = ctx.createLinearGradient(0, 1900, 0, 1920);
    bottomGradient.addColorStop(0, '#ff6b35');
    bottomGradient.addColorStop(0.5, '#ff4500');
    bottomGradient.addColorStop(1, '#ff6b35');
    ctx.fillStyle = bottomGradient;
    ctx.fillRect(0, 1900, 1080, 20);
    
    // Sombra del borde inferior (efecto neón)
    ctx.shadowColor = '#ff6b35';
    ctx.shadowBlur = 30;
    ctx.fillRect(0, 1900, 1080, 20);
    ctx.shadowBlur = 0;
    
    // Texto del footer con efecto neón
    ctx.shadowColor = '#ff6b35';
    ctx.shadowBlur = 15;
    ctx.fillStyle = '#ff6b35';
    ctx.font = 'bold 26px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('GOR2.com', 540, footerY - 10);
    
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#ffffff';
    ctx.font = '22px Arial';
    ctx.fillText('#GOR2Awards2025', 540, footerY + 20);
    ctx.shadowBlur = 0;
    
    // Convertir canvas a blob y descargar
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `GOR2-Awards-2025-${userName.replace(/\s+/g, '-')}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        
        // Feedback visual
        showNotification('¡Imagen descargada! 📸');
    }, 'image/png');
}

// Función auxiliar para mostrar notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b35 0%, #ff4500 100%);
        color: white;
        padding: 20px 40px;
        border-radius: 12px;
        font-size: 1.2rem;
        font-weight: bold;
        z-index: 10001;
        box-shadow: 0 10px 40px rgba(255, 107, 53, 0.5);
        animation: fadeInOut 2s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Añadir animación de notificación
if (!document.querySelector('#notificationAnimation')) {
    const style = document.createElement('style');
    style.id = 'notificationAnimation';
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);
}

