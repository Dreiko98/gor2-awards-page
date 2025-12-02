# 🚀 PASO A PASO: Deploy en Netlify

## Pre-requisitos
- ✅ Cuenta de GitHub (gratis)
- ✅ Código subido a GitHub
- ✅ 5 minutos de tu tiempo

---

## 📝 Paso 1: Subir código a GitHub (si no lo has hecho)

```bash
# En tu terminal, dentro de la carpeta del proyecto:
git add .
git commit -m "GOR2 Awards - Ready for production"
git push origin main
```

Si no tienes Git configurado:
1. Ve a github.com
2. Crea un nuevo repositorio
3. Sube los archivos manualmente

---

## 🌐 Paso 2: Crear cuenta en Netlify

1. Ve a: https://netlify.com
2. Click en **"Sign Up"**
3. Selecciona **"GitHub"** para registrarte
4. Autoriza a Netlify a acceder a GitHub

---

## 🎯 Paso 3: Importar proyecto

1. En Netlify Dashboard, click **"Add new site"**
2. Selecciona **"Import an existing project"**
3. Click en **"GitHub"**
4. Busca tu repositorio `gor2-awards-page`
5. Click en el repositorio

---

## ⚙️ Paso 4: Configurar deploy

En la pantalla de configuración:

```
Site settings:
├── Site name: gor2-awards (o el que quieras)
├── Branch to deploy: main
├── Build command: (dejar vacío)
└── Publish directory: . (un punto)
```

Click en **"Deploy site"**

⏳ Espera 1-2 minutos mientras se despliega...

---

## ✅ Paso 5: ¡Sitio online!

Cuando termine verás:
- ✅ URL de tu sitio: `gor2-awards.netlify.app`
- ✅ Estado: "Published"
- ✅ Preview disponible

### Opcional: Cambiar nombre del sitio
1. Site settings → General → Site details
2. Click "Change site name"
3. Elige algo como: `gor2-awards-2025`

---

## 📋 Paso 6: Verificar Netlify Forms

1. En el dashboard de Netlify
2. Ve a: **"Forms"** (en el menú lateral)
3. Deberías ver: **"gor2-votes"**
4. Si no lo ves, haz un voto de prueba primero

---

## 🧪 Paso 7: Probar el sistema

1. Abre tu URL: `https://tu-sitio.netlify.app`
2. Haz login con datos de prueba
3. Vota en algunas categorías
4. Click "ENVIAR TODOS LOS VOTOS"
5. Ve al dashboard de Netlify → Forms
6. ¡Deberías ver tu voto!

---

## 📊 Paso 8: Ver resultados

### Durante las votaciones:
- Dashboard → Forms → gor2-votes
- Verás cada voto que entra
- Con nombre, email, timestamp

### Después de las votaciones:
1. Forms → gor2-votes
2. Click **"Export CSV"**
3. Abre en Excel/Google Sheets
4. Analiza y cuenta ganadores

---

## 🎊 Paso 9: Compartir con amigos

Comparte el link:
```
https://gor2-awards-2025.netlify.app
```

Ellos solo necesitan:
1. Abrir el link
2. Login con sus datos
3. Votar
4. Enviar

---

## ⚠️ Troubleshooting

### "No veo el formulario en Forms"
**Solución**: Haz un voto de prueba primero. Netlify crea el formulario cuando recibe el primer envío.

### "Los votos no llegan"
**Solución**: 
- Revisa la consola del navegador (F12)
- Asegúrate de estar en la URL de Netlify (no localhost)
- Verifica que el formulario oculto esté en voting.html

### "Error 404"
**Solución**:
- Verifica que `netlify.toml` esté en la raíz
- Redeploya el sitio

### "Quiero cambiar algo después de deploy"
**Solución**:
```bash
# Haz tus cambios
git add .
git commit -m "Mis cambios"
git push origin main
# Netlify redeploya automáticamente
```

---

## 📱 Notificaciones (Opcional)

Para recibir un email cada vez que alguien vote:

1. Netlify Dashboard → Forms → Form notifications
2. Click "Add notification"
3. Selecciona "Email notification"
4. Pon tu email
5. ¡Listo! Te llegará email con cada voto

---

## 🎯 Checklist Final

Antes de nochevieja, verifica:

- [ ] Sitio desplegado en Netlify
- [ ] URL funciona correctamente
- [ ] Login funciona
- [ ] Votación funciona
- [ ] Votos se guardan en Forms
- [ ] Puedes exportar CSV
- [ ] Link compartido con amigos
- [ ] Fecha/hora acordada para votar

---

## 🎉 ¡Ya está!

Tu sitio de votaciones está:
- ✅ Online 24/7
- ✅ HTTPS seguro (candado verde)
- ✅ Guardando votos automáticamente
- ✅ Listo para nochevieja

**¡Disfruta de tus GOR2 Awards 2025!** 🏆
