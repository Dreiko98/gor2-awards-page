# 🔧 Acceso de Administrador - GOR2 Awards 2025

## 📋 Descripción

Esta funcionalidad permite a los administradores acceder a la página de votaciones **incluso cuando el countdown está activo**, sin necesidad de modificar el código o activar el modo desarrollo.

## 🎯 Propósito

- ✅ Testear la página de votaciones antes del lanzamiento oficial
- ✅ Verificar que todo funciona correctamente
- ✅ Hacer ajustes de última hora
- ✅ La web puede estar pública mientras los admins la prueban

## 🔐 Contraseña de Administrador

```
GorAdmin2025!
```

> **⚠️ IMPORTANTE**: Esta contraseña es diferente a la contraseña de votación (`Gor2#SaveOscar`). No la compartas con los usuarios finales.

## 🚀 Cómo Usar el Acceso Admin

### Paso 1: Acceder a la Pantalla de Bloqueo
Cuando visites `index.html` antes del 8 de diciembre de 2025 a las 17:00h, verás el countdown bloqueando el acceso.

### Paso 2: Abrir la Zona de Admin
En la parte inferior del overlay del countdown, verás:

```
🔧 Acceso Admin
```

Haz clic para expandir la sección de acceso admin.

### Paso 3: Ingresar la Contraseña
1. Escribe la contraseña: `GorAdmin2025!`
2. Haz clic en el botón **"Acceder"** o presiona **Enter**

### Paso 4: Acceso Concedido
- ✅ Verás el mensaje: "Acceso admin concedido"
- ✅ El countdown se ocultará automáticamente
- ✅ Podrás acceder al formulario de login normal
- ✅ El acceso admin se mantendrá durante toda la sesión del navegador

## 🔄 Persistencia del Acceso

El acceso admin se guarda en `sessionStorage`, lo que significa:

- ✅ **Se mantiene** mientras tengas la pestaña abierta
- ✅ **Se mantiene** si refrescas la página (F5)
- ❌ **Se pierde** si cierras la pestaña/navegador
- ❌ **Se pierde** si abres una nueva ventana/pestaña

Para volver a acceder después de cerrar el navegador, simplemente repite el proceso.

## 🎨 Diseño Discreto

La zona de acceso admin está diseñada para ser:

- 👁️ **Visible** para administradores que sepan que existe
- 🤫 **Discreta** para no llamar la atención de usuarios casuales
- 🎨 **Integrada** con el diseño general de la página
- ✨ **Colapsable** para no ocupar espacio hasta que se necesite

## 🔄 Diferencias con DEV_MODE

| Característica | DEV_MODE | Admin Access |
|----------------|----------|--------------|
| Requiere editar código | ✅ Sí | ❌ No |
| Accesible en producción | ❌ No | ✅ Sí |
| Requiere contraseña | ❌ No | ✅ Sí |
| Persistencia | Permanente | Por sesión |
| Uso recomendado | Desarrollo local | Testing en producción |

## 📝 Notas de Seguridad

### Buenas Prácticas:
- 🔐 **No compartas** la contraseña admin con usuarios finales
- 🔄 **Cambia la contraseña** si crees que ha sido comprometida
- 🗑️ **Cierra la sesión** cuando termines de testear
- 📱 **Usa modo incógnito** para testear sin afectar tu sesión normal

### Para Cambiar la Contraseña Admin:

Edita `script.js`, línea ~11:

```javascript
const ADMIN_PASSWORD = 'TuNuevaContraseñaAqui';
```

## 🐛 Solución de Problemas

### El countdown no se oculta después de ingresar la contraseña
- ✅ Verifica que ingresaste la contraseña correctamente (distingue mayúsculas/minúsculas)
- ✅ Refresca la página e intenta nuevamente
- ✅ Limpia el `sessionStorage` y vuelve a intentar

### Mensaje "❌ Contraseña incorrecta"
- ✅ La contraseña distingue mayúsculas y minúsculas: `GorAdmin2025!`
- ✅ Asegúrate de no tener espacios antes o después
- ✅ Copia y pega directamente desde este documento

### El acceso se pierde al refrescar
Esto **no debería suceder**. Si ocurre:
- 🔍 Verifica que JavaScript esté habilitado
- 🔍 Verifica que sessionStorage funcione en tu navegador
- 🔍 Abre la consola del navegador y busca errores

## 📚 Archivos Modificados

Esta funcionalidad fue implementada en:

1. **index.html**
   - Añadida sección `<div class="admin-access">` en el countdown overlay

2. **script.js**
   - Constante `ADMIN_PASSWORD` (línea ~11)
   - Variable `adminBypass` con sessionStorage
   - Modificada función `updateCountdown()` para verificar bypass
   - Event listeners para botón de admin

3. **styles.css**
   - Estilos para `.admin-access`, `.admin-details`, `.admin-form-container`
   - Estilos para `.admin-input`, `.admin-btn`, `.admin-error`

## 🎯 Versión

- **Implementado en**: Versión 2.8
- **Fecha**: Diciembre 2025
- **Compatible con**: Todas las versiones v2.x

---

**💡 Consejo**: Guarda este documento en un lugar seguro y compártelo solo con otros administradores que necesiten acceder a la página antes del lanzamiento oficial.
