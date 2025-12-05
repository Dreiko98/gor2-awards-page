# Actualización de Categorías - GOR2 Awards 2025

## Cambios Realizados (5 de Diciembre de 2025)

### 🗑️ Categorías Eliminadas:
- **Categoría #11: "MEJOR STYLE"** - Eliminada completamente
- **Categoría #15: "MEJOR ANÉCDOTA"** - Eliminada completamente

### ✏️ Categorías Modificadas:

#### Categoría #3: MEJOR CLIP
**Nominados actualizados:**
- ✅ El gameplay mas random de fifa
- ✅ Vale bro, sabes algo de Python?
- ⏳ Clip 3 (pendiente de definir)
- ⏳ Clip 4 (pendiente de definir)

#### Categoría #4: MEJOR CLIP IRL
**Nominados actualizados:**
- ✅ Los pibes cantando Superestrella
- ✅ Germán y Gajas bailan y Gajas se pica
- ✅ Oscar y Gajas carreando al futbolín en Oviedo
- ✅ Salsa buffalo

#### Categoría #10: JUEGO DEL AÑO
**Nominados actualizados:**
- ✅ Expedition 33
- ✅ REPO
- ✅ Silksong
- ✅ Rematch

#### Categoría #15 (antigua #16): MEJOR FIESTA
**Nominados actualizados:**
- ✅ Salsa buffalo
- ✅ Committee
- ✅ Most + Rumbo
- ✅ Fiesta en Oviedo con viki

#### Categoría #19 (antigua #20): MEJOR DUPLA GAMING DEL AÑO
**Nominados actualizados:**
- ✅ Gajas y Germán
- ✅ Delgado y Gaston
- ✅ Gaston y Enzo
- ❌ Opción 4 eliminada (solo 3 nominados)

#### Categoría #20 (antigua #21): MEJOR VLOG
**Nominados actualizados:**
- ✅ Fuente de Rubielos 2 (https://youtu.be/vfoxp7lo5Q4?si=O9JSAkR4P2WA-0z0)
- ⏳ Oviedo (TBD)
- ✅ Roma (https://youtu.be/Ff3DspkjDeI?si=jctjmbEWRPQtxufP)
- ❌ Opción 4 eliminada (solo 3 nominados)

### ➕ Nuevas Categorías:

#### Categoría #11: GOR2 MÁS EMPANAO (NUEVA)
**Descripción:** El más empanado del año
**Tipo:** Personas (vertical)
**Nominados:**
- Germán
- Gajas
- Enzo
- Delgado
- Carlos
- Colomino
- Gastón
- Oscar

## 📊 Resumen de Categorías Finales

Total de categorías: **20** (reducidas desde 21)

### Categorías de Personas (con fotos verticales):
1. GOR2 MÁS GRACIOSO
2. GOR2 MÁS AUSENTE
5. GOR2 CON MEJORES STICKERS
6. BORRACHO DEL AÑO
8. MEJOR DESARROLLO DE PERSONAJE 2025
9. GOR2 HATER
11. GOR2 MÁS EMPANAO (NUEVA)
14. MEJOR PERSONAJE SECUNDARIO
17. GOR2 CON MÁS FOMO
18. MEJOR REGALO AMIGO INVISIBLE DEL AÑO PASADO

### Categorías de Contenido (horizontal):
3. MEJOR CLIP
4. MEJOR CLIP IRL
7. GOR2 QUOTES
10. JUEGO DEL AÑO
12. TOP HUEVITO STYLE
13. MEME DEL AÑO
15. MEJOR FIESTA
16. CASA DEL AÑO
19. MEJOR DUPLA GAMING DEL AÑO
20. MEJOR VLOG

## 🚀 Despliegue

### Local:
```bash
cd /home/ayuda137/Escritorio/asuntos\ internos/gor2-awards-page
python3 -m http.server 8004
```

Luego abrir: http://localhost:8004

### Producción:
```bash
git add voting.js CATEGORIES-UPDATE.md
git commit -m "v2.8 - Actualización de categorías: eliminadas MEJOR STYLE y MEJOR ANÉCDOTA, añadida GOR2 MÁS EMPANAO"
git push origin main
```

## ⚠️ Notas Importantes:

1. **DEV_MODE**: Actualmente está en `true` en `script.js` línea 8. Recuerda cambiarlo a `false` antes del deployment final.

2. **Enlaces de vlogs**: Los enlaces de YouTube están en los comentarios pero no se muestran en la interfaz. Si quieres añadirlos, deberás modificar el código para mostrar previews o enlaces.

3. **Imágenes pendientes**: 
   - MEJOR CLIP: "Clip 3" y "Clip 4" (pendientes de contenido definitivo)
   - MEJOR VLOG: "Oviedo (TBD)" (pendiente de video)

4. **Total de votos**: Ahora son 20 categorías en total (antes 21).

## 📝 Changelog

**Versión 2.8** - 5 de Diciembre de 2025
- ❌ Eliminada categoría "MEJOR STYLE"
- ❌ Eliminada categoría "MEJOR ANÉCDOTA"
- ➕ Añadida categoría "GOR2 MÁS EMPANAO"
- ✏️ Actualizados nominados de 6 categorías
- 📉 Reducido total de categorías de 21 a 20
