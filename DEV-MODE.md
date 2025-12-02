# 🔧 Modo Desarrollo - Skipear Countdown

## ¿Cómo saltarme el countdown mientras desarrollo?

### ✅ **Método Simple** (Recomendado)

Abre `script.js` y cambia la línea 8:

```javascript
// ⚙️ MODO DESARROLLO: Cambia esto a 'true' para skipear el countdown
const DEV_MODE = true; // Cambia a 'false' antes de deployment
```

### 📋 **Estados:**

| Modo | DEV_MODE | Comportamiento |
|------|----------|----------------|
| **Desarrollo** | `true` | ✅ Sin countdown, acceso inmediato |
| **Producción** | `false` | 🔒 Countdown activo hasta 8/12/25 17:00h |

---

## 🎯 **Pasos para trabajar:**

### **Mientras desarrollas:**
1. Abre `script.js`
2. Asegúrate que `DEV_MODE = true`
3. Refresca el navegador (F5)
4. ✅ Acceso inmediato sin countdown

### **Antes de subir a Netlify:**
1. Abre `script.js`
2. Cambia a `DEV_MODE = false`
3. Guarda el archivo
4. Haz commit y push:
   ```bash
   git add script.js
   git commit -m "Production mode: countdown enabled"
   git push origin main
   ```

---

## ⚠️ **IMPORTANTE:**

**¡NO OLVIDES CAMBIAR A `false` ANTES DE DEPLOYMENT!**

Si despliegas con `DEV_MODE = true`, tus amigos podrán votar inmediatamente (sin esperar al 8/12/25).

---

## 🧪 **Probar el countdown:**

Si quieres ver cómo luce el countdown:

1. Cambia `DEV_MODE = false`
2. Refresca el navegador
3. Verás:
   - ✅ Overlay con candado
   - ✅ Mensaje de bienvenida
   - ✅ Cuenta atrás
   - ✅ Formulario desenfocado

---

## 💡 **Otros métodos alternativos:**

### **Opción 2: Cambiar la fecha temporalmente**
```javascript
// En vez de:
const deadline = new Date('2025-12-08T17:00:00').getTime();

// Pon una fecha pasada:
const deadline = new Date('2020-12-08T17:00:00').getTime();
```

### **Opción 3: Consola del navegador**
1. Abre DevTools (F12)
2. En la consola escribe:
   ```javascript
   document.getElementById('countdownOverlay').classList.add('hidden');
   document.querySelector('.login-container').classList.remove('locked');
   ```

---

## 🎨 **Mi flujo de trabajo recomendado:**

```bash
# 1. Mientras trabajas
DEV_MODE = true  → Desarrollo sin interrupciones

# 2. Quieres ver el countdown
DEV_MODE = false → Ver diseño completo

# 3. Antes de compartir con amigos
DEV_MODE = false → Activar protección temporal

# 4. Git workflow
git add .
git commit -m "Features completas"
git push origin main
```

---

## 📅 **Línea de tiempo:**

- **Hoy (2 Dic)**: `DEV_MODE = true` para desarrollar
- **7 Dic** (día antes): Cambiar a `DEV_MODE = false` y deploy
- **8 Dic 17:00h**: ¡Countdown termina automáticamente!
- **8-31 Dic**: Tus amigos pueden votar

---

¡Así puedes trabajar cómodamente y ver tus cambios al instante! 🚀
