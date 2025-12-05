# Conversión de Archivos HEIC a JPG

## 📸 Estado Actual de Imágenes

### ✅ Imágenes Añadidas Correctamente:

#### JUEGO DEL AÑO (Categoría #10):
- ✅ Expedition 33 → `assets/juegodelano/expedition33.jpg`
- ✅ REPO → `assets/juegodelano/repo.jpg`
- ✅ Silksong → `assets/juegodelano/silksong.avif`
- ✅ Rematch → `assets/juegodelano/rematch.jpg`

#### MEJOR FIESTA (Categoría #15):
- ✅ Salsa buffalo → `assets/fiesta/salsabuffalo.JPG`
- ✅ Committee → `assets/fiesta/committee.JPG`
- ⚠️ Most + Rumbo → `assets/fiesta/rumbomost.HEIC` (necesita conversión)
- ⚠️ Fiesta en Oviedo con viki → `assets/fiesta/fiestaOviedo.HEIC` (necesita conversión)

#### MEJOR VLOG (Categoría #20):
- ✅ Fuente de Rubielos 2 → `assets/vlog/rubielos.jpg`
- ⏳ Oviedo (TBD) → (sin imagen aún)
- ✅ Roma → `assets/vlog/roma.jpg`

---

## ⚠️ Archivos HEIC Pendientes de Conversión

Los archivos HEIC (formato de imagen de Apple) **NO son compatibles con navegadores web**. Necesitan ser convertidos a JPG o PNG.

### Archivos que necesitan conversión:
```
assets/fiesta/rumbomost.HEIC
assets/fiesta/fiestaOviedo.HEIC
```

### Opciones para Convertir:

#### Opción 1: Online (Más fácil)
1. Ve a https://heictojpg.com/ o https://cloudconvert.com/heic-to-jpg
2. Sube los archivos HEIC
3. Descarga las versiones JPG
4. Guárdalas en `assets/fiesta/` con estos nombres:
   - `rumbomost.jpg`
   - `fiestaOviedo.jpg`

#### Opción 2: En Mac
```bash
cd /home/ayuda137/Escritorio/asuntos\ internos/gor2-awards-page/assets/fiesta
sips -s format jpeg rumbomost.HEIC --out rumbomost.jpg
sips -s format jpeg fiestaOviedo.HEIC --out fiestaOviedo.jpg
```

#### Opción 3: En Linux con heif-convert
```bash
# Instalar libheif-tools
sudo apt install libheif-examples

# Convertir archivos
cd /home/ayuda137/Escritorio/asuntos\ internos/gor2-awards-page/assets/fiesta
heif-convert rumbomost.HEIC rumbomost.jpg
heif-convert fiestaOviedo.HEIC fiestaOviedo.jpg
```

#### Opción 4: Con GIMP (editor de imágenes)
1. Abre GIMP
2. File → Open → Selecciona el archivo HEIC
3. File → Export As → Selecciona JPG
4. Guarda con el nombre correcto

---

## 🔄 Después de la Conversión

Una vez que hayas convertido los archivos HEIC a JPG, actualiza el código en `voting.js`:

Busca la categoría #15 (MEJOR FIESTA) y actualiza:

```javascript
{
    id: 15,
    title: "MEJOR FIESTA",
    description: "La noche más épica del año",
    options: ["Salsa buffalo", "Committee", "Most + Rumbo", "Fiesta en Oviedo con viki"],
    imageType: "horizontal",
    images: {
        "Salsa buffalo": "assets/fiesta/salsabuffalo.JPG",
        "Committee": "assets/fiesta/committee.JPG",
        "Most + Rumbo": "assets/fiesta/rumbomost.jpg",          // ← Cambiar de .HEIC a .jpg
        "Fiesta en Oviedo con viki": "assets/fiesta/fiestaOviedo.jpg"  // ← Cambiar de .HEIC a .jpg
    }
},
```

---

## 📝 Notas Técnicas

### ¿Por qué no funcionan los HEIC en navegadores?

HEIC (High Efficiency Image Container) es un formato de Apple introducido en iOS 11. Aunque es más eficiente en espacio, **no es compatible con navegadores web** (Chrome, Firefox, Safari en web).

### Formatos soportados en navegadores:
- ✅ JPG/JPEG
- ✅ PNG
- ✅ WebP
- ✅ AVIF (nuevo, bien soportado)
- ✅ GIF
- ✅ SVG
- ❌ HEIC/HEIF (no soportado)

### Verificación:
Puedes verificar que las imágenes se cargan correctamente abriendo:
- http://localhost:8004/assets/fiesta/salsabuffalo.JPG
- http://localhost:8004/assets/fiesta/committee.JPG
- http://localhost:8004/assets/juegodelano/expedition33.jpg
- http://localhost:8004/assets/vlog/rubielos.jpg

---

## 🚀 Estado del Proyecto

**Imágenes funcionando:** 9/12 (75%)
- 4/4 Juego del Año ✅
- 2/4 Mejor Fiesta ⚠️
- 2/3 Mejor Vlog ⏳

**Pendiente:**
1. Convertir rumbomost.HEIC → rumbomost.jpg
2. Convertir fiestaOviedo.HEIC → fiestaOviedo.jpg
3. Definir imagen para "Oviedo (TBD)" en vlogs
4. Actualizar voting.js con las rutas correctas
