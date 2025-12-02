# Estructura de Imágenes de Nominados

Esta carpeta contiene las imágenes de todos los nominados organizadas por categoría.

## 📁 Estructura de Carpetas

Cada carpeta numérica corresponde a una categoría:

- `1/` - Gor más gracioso
- `2/` - Gor2 más ausente
- `3/` - Mejor clip
- `4/` - Mejor clip IRL
- `5/` - Gor2 con mejores stickers
- `6/` - Borracho del año
- `7/` - Gor2 quotes
- `8/` - Mejor desarrollo de personaje 2025
- `9/` - Gor2 hater
- `10/` - Juego del año
- `11/` - Mejor style
- `12/` - Top huevito style
- `13/` - Meme del año
- `14/` - Mejor personaje secundario
- `15/` - Mejor anécdota
- `16/` - Mejor fiesta
- `17/` - Casa del año
- `18/` - Gor2 con más FOMO
- `19/` - Mejor regalo amigo invisible del año pasado
- `20/` - Mejor dupla gaming del año
- `21/` - Mejor vlog

## 🖼️ Nomenclatura de Archivos

Los archivos de imagen deben nombrarse según el nominado en minúsculas, sin acentos y con guiones en lugar de espacios:

### Ejemplos para Personas (categorías 1, 2, 5, 6, 8, 9, 14, 18, 19):

```
1/german.jpg
1/gajas.jpg
1/enzo.jpg
1/delgado.jpg
1/carlos.jpg
1/colomino.jpg
1/gaston.jpg
1/oscar.jpg
```

### Ejemplos para Otras Categorías:

```
3/clip-1.jpg
3/clip-2.jpg
3/clip-3.jpg
3/clip-4.jpg

11/german-style.jpg
11/delgado-style.jpg
11/huevito-style.jpg
11/oscar-style.jpg

14/rocio.jpg
14/irene.jpg
14/gise.jpg
14/angela.jpg
```

## 📐 Especificaciones de Imagen

### Imágenes Verticales (Personas)
- **Ratio**: 3:4 (ej: 600x800px, 750x1000px)
- **Orientación**: Vertical/Retrato
- **Formato**: JPG
- **Calidad**: 80-85%
- **Tamaño máximo**: 300KB

### Imágenes Horizontales (Clips, Memes, etc.)
- **Ratio**: 16:9 (ej: 1280x720px, 1920x1080px)
- **Orientación**: Horizontal/Paisaje
- **Formato**: JPG
- **Calidad**: 75-80%
- **Tamaño máximo**: 400KB

## 🔧 Optimización

Usa el script incluido para optimizar las imágenes:

```bash
# Para imágenes verticales (personas)
python3 optimize_images.py assets/nominees/1/german.jpg 80

# Para imágenes horizontales
python3 optimize_images.py assets/nominees/3/clip-1.jpg 75
```

## 💡 Fallback

Si una imagen no existe, se mostrará un placeholder:
- 👤 para personas (categorías verticales)
- 🎮 para otras categorías (horizontales)

## 📝 Notas

- Todas las imágenes deben estar en formato `.jpg`
- Los nombres de archivo DEBEN coincidir exactamente con los slugs generados
- No uses mayúsculas, acentos o caracteres especiales
- Asegúrate de que las imágenes estén optimizadas para web

---

¡Añade tus imágenes y la página las mostrará automáticamente!
