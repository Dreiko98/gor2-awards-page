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
        options: ["El gameplay mas random de fifa", "Vale bro, sabes algo de Python?", "Clip 3", "Clip 4"],
        imageType: "horizontal",
        images: {
            "El gameplay mas random de fifa": "assets/mejor clip/video del fifa.jpg"
        }
    },
    {
        id: 4,
        title: "MEJOR CLIP IRL",
        description: "El mejor momento capturado en la vida real",
        options: ["Los pibes cantando Superestrella", "Germán y Gajas bailan y Gajas se pica", "Oscar y Gajas carreando al futbolín en Oviedo", "Salsa buffalo"],
        imageType: "horizontal",
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
            "\"¿Los mayores se emborrachan?\" - Óscar"
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
        title: "MEME DEL AÑO",
        description: "El meme que más nos ha marcado",
        options: ["Meme 1", "Meme 2", "Meme 3", "Meme 4"],
        imageType: "horizontal"
    },
    {
        id: 14,
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
        id: 15,
        title: "CASA DEL AÑO",
        description: "El mejor lugar de reunión",
        options: ["Casa Gastón", "Casa Germán", "Casa Carlos", "Abuela de Oscar"],
        imageType: "horizontal"
    },
    {
        id: 16,
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
        id: 17,
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
        id: 18,
        title: "MEJOR DUPLA GAMING DEL AÑO",
        description: "El mejor equipo de gaming",
        options: ["Gajas y Germán", "Delgado y Gaston", "Gaston y Enzo"],
        imageType: "horizontal"
    },
    {
        id: 19,
        title: "MEJOR VLOG",
        description: "El vlog más épico",
        options: ["Fuente de Rubielos 2", "Oviedo (TBD)", "Roma"],
        imageType: "horizontal",
        images: {
            "Fuente de Rubielos 2": "assets/vlog/rubielos.jpg",
            "Roma": "assets/vlog/roma.jpg"
        }
    }
];
