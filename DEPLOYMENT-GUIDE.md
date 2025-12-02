# Guía de Despliegue - GOR2 Awards en Netlify

## 📋 Opción Recomendada: Netlify Forms (GRATIS)

### ✅ Ventajas:
- **100% gratis** hasta 100 submissions/mes (suficiente para tu grupo)
- **Sin backend** necesario - Netlify lo gestiona todo
- **Panel web** para ver todos los votos
- **Descarga CSV/JSON** de los resultados
- **Notificaciones email** cuando alguien vota

### 📝 Cómo funciona:
1. Al hacer submit, los votos se envían a Netlify Forms
2. Netlify los almacena automáticamente
3. Tú los ves en: `Netlify Dashboard > Forms`
4. Puedes exportar a CSV para análisis

---

## 🚀 Pasos para Implementar

### 1. Preparar el Proyecto
```bash
# Ya está listo - solo asegúrate de tener todo commiteado en Git
git add .
git commit -m "Ready for deployment with Netlify Forms"
git push origin main
```

### 2. Desplegar en Netlify
1. Ve a [netlify.com](https://netlify.com) y regístrate (gratis)
2. Click en **"Add new site" > "Import an existing project"**
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Build command**: (dejar vacío)
   - **Publish directory**: `.` (punto)
5. Click **"Deploy site"**

### 3. Activar Netlify Forms
Ya está configurado en el código - Netlify lo detectará automáticamente.

### 4. Ver los Votos
- Entra a tu dashboard de Netlify
- Ve a la sección **"Forms"**
- Verás todos los votos con timestamp
- Puedes descargar todo en CSV

---

## 🔍 Alternativas (si necesitas más control)

### Opción 2: Google Sheets (Gratis, más trabajo)
- Usar Google Apps Script como API
- Los votos se guardan en una hoja de cálculo
- Requiere configurar OAuth y script

### Opción 3: Supabase (Gratis hasta cierto punto)
- Base de datos PostgreSQL gratis
- 500MB storage + 2GB bandwidth
- Requiere crear cuenta y configurar

### Opción 4: Firebase (Google, Gratis tier generoso)
- Firestore database
- Fácil de configurar
- Ideal si quieres ver resultados en tiempo real

---

## 💡 Recomendación

Para tu caso (grupo de amigos, ~8 personas, una vez al año):

**Usa Netlify Forms** ✅
- Es la más simple
- No requiere código extra
- Suficiente para tus necesidades
- Panel web listo para usar

---

## 📊 Ver Resultados

Una vez desplegado, para ver los votos:
1. `Netlify Dashboard > Forms > gor2-votes`
2. Descargar CSV
3. Abrir en Excel/Google Sheets
4. Analizar resultados

---

## 🆘 Problemas Comunes

**"No veo el formulario en Netlify"**
- Asegúrate de que el código tenga `netlify` y `data-netlify="true"`
- Redeploya el sitio

**"Los votos no llegan"**
- Revisa la consola del navegador (F12)
- Verifica que el form se envíe correctamente

**"Quiero ver resultados en vivo"**
- Netlify Forms no es en tiempo real
- Para eso necesitarías Firebase o Supabase
