# GOR2 AWARDS 2025 🏆

Página web de votaciones para los premios anuales del grupo GOR2 - Nochevieja 2025

## 🎮 Características

- **Diseño moderno con temática GOR2**: Colores naranja y negro del logo con efectos visuales impactantes
- **Sistema de login elegante**: Control de acceso con animaciones fluidas
- **21 Categorías**: Votación completa para todas las categorías del grupo
- **Navegación cinematográfica**: Sistema de transiciones suaves entre categorías
- **Guardado automático**: Los votos se guardan en localStorage
- **Animaciones avanzadas**: Efectos de hover, transiciones y partículas flotantes
- **Responsive**: Perfectamente adaptado para móviles, tablets y desktop
- **Accesibilidad**: Soporte para usuarios con preferencias de movimiento reducido

## 🎨 Diseño Visual

### Paleta de Colores
- **Negro Principal**: `#0a0a0a` - Fondo principal
- **Negro Secundario**: `#1a1a1a` - Contenedores
- **Gris Oscuro**: `#2a2a2a` - Bordes y divisores
- **Naranja Acento**: `#ff6b35` - Color principal del logo
- **Naranja Brillante**: `#ff8c42` - Highlights
- **Naranja Profundo**: `#ff4500` - Gradientes

### Efectos Visuales
- Gradientes dinámicos con efecto glow
- Animaciones de entrada y salida suaves
- Efectos hover con transformaciones 3D
- Partículas flotantes en el fondo
- Transiciones con curvas de Bézier personalizadas
- Scroll suave entre secciones

## 📋 Categorías

1. Gor más gracioso
2. Gor2 más ausente
3. Mejor clip
4. Mejor clip IRL
5. Gor2 con mejores stickers
6. Borracho del año
7. Gor2 quotes
8. Mejor desarrollo de personaje 2025
9. Gor2 hater
10. Juego del año
11. Mejor style
12. Top huevito style
13. Meme del año
14. Mejor personaje secundario
15. Mejor anécdota
16. Mejor fiesta
17. Casa del año
18. Gor2 con más FOMO
19. Mejor regalo amigo invisible del año pasado
20. Mejor dupla gaming del año
21. Mejor vlog

## 🚀 Cómo usar

1. Abre `index.html` en tu navegador (o usa el servidor local)
2. Ingresa tus datos en el formulario de login
3. Disfruta de la animación de entrada
4. Vota en cada categoría haciendo clic en tu opción favorita
5. Las opciones se animan cuando pasas el cursor sobre ellas
6. Navega entre categorías con PREVIOUS/NEXT
7. Al finalizar, envía todos tus votos

## 💻 Instalación y Ejecución

### Opción 1: Abrir directamente
Simplemente abre `index.html` en tu navegador favorito.

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server -p 8000

# Luego abre http://localhost:8000 en tu navegador
```

## 📁 Estructura del proyecto

```
gor2-awards-page/
├── assets/
│   ├── logo_gor2.ico
│   ├── logo_gor2.jpg
│   └── logo_gor2.png
├── index.html          # Página de login
├── voting.html         # Página de votación
├── styles.css          # Estilos globales
├── script.js           # Lógica del login
├── voting.js           # Lógica de votación
└── README.md           # Este archivo
```

## 🎨 Paleta de colores

- **Primary Blue**: `#0a1e2e`
- **Secondary Blue**: `#1a3a52`
- **Accent Cyan**: `#00d9ff`
- **Accent Orange**: `#ff8c42`

## 🔧 Personalización

### Editar opciones de votación

Para editar las opciones de cada categoría, abre `voting.js` y modifica el array `categories`. Por ejemplo:

```javascript
{
    id: 3,
    title: "MEJOR CLIP",
    description: "El clip más épico del año",
    options: ["Clip 1", "Clip 2", "Clip 3", "Clip 4"]
}
```

### Añadir nuevas categorías

Simplemente añade un nuevo objeto al array `categories` en `voting.js`:

```javascript
{
    id: 22,
    title: "NUEVA CATEGORÍA",
    description: "Descripción de la categoría",
    options: ["Opción 1", "Opción 2", "Opción 3"]
}
```

## 💾 Almacenamiento

Los datos se guardan en localStorage:
- `gor2_user`: Datos del usuario (nombre, apellidos, email)
- `gor2_votes`: Votos realizados
- `gor2_submission`: Envío final con todos los datos

## 🌐 Despliegue

Para desplegar la página web:

1. **GitHub Pages**: Sube el proyecto a un repositorio y activa GitHub Pages
2. **Netlify/Vercel**: Arrastra la carpeta del proyecto
3. **Servidor local**: Abre `index.html` directamente en el navegador

## 📝 Notas

- Actualmente los votos se guardan solo en localStorage (navegador)
- Para producción, se recomienda implementar un backend para almacenar los votos en una base de datos
- La contraseña actual no tiene validación, puedes añadir una contraseña específica en `script.js`

## 🎉 Créditos

Desarrollado para la Nochevieja 2025 del grupo GOR2

---

**¡Que gane el mejor!** 🏆
