# Configuración del Formulario de Contacto

## Opción 1: EmailJS (Recomendado)

### Paso 1: Crear cuenta en EmailJS

1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Confirma tu email

### Paso 2: Configurar servicio de email

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor (Gmail recomendado):
   - **Gmail**: Más fácil de configurar
   - **Outlook**: También funciona bien
4. Conecta tu cuenta de email
5. **Guarda el Service ID** (ej: `service_abc123`)

### Paso 3: Crear template de email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template:

```
Subject: Nuevo contacto desde FierroYForma.cl - {{from_name}}

To Email: contacto@fierroyforma.cl

Template:
Has recibido un nuevo mensaje desde tu sitio web:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Empresa: {{company}}

Mensaje:
{{message}}

---
Enviado desde fierroyforma.cl
```

4. **Guarda el Template ID** (ej: `template_xyz789`)

### Paso 4: Obtener Public Key

1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key** (ej: `abc123def456`)

### Paso 5: Actualizar credenciales en el código

Edita el archivo `ContactSection.tsx` y reemplaza:

```typescript
const EMAILJS_SERVICE_ID = "service_abc123";      // Tu Service ID
const EMAILJS_TEMPLATE_ID = "template_xyz789";    // Tu Template ID  
const EMAILJS_PUBLIC_KEY = "abc123def456";        // Tu Public Key
```

### Paso 6: Configurar variables de entorno (Recomendado)

Crea un archivo `.env.local`:

```env
PUBLIC_EMAILJS_SERVICE_ID=service_abc123
PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456
```

Y actualiza el código para usar variables de entorno:

```typescript
const EMAILJS_SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
```

## Opción 2: Netlify Forms (Si usas Netlify)

Si planeas hospedar en Netlify, puedes usar Netlify Forms:

1. Agrega `netlify` al atributo `name` del form
2. Agrega un campo oculto `<input type="hidden" name="form-name" value="contact" />`
3. Los emails llegarán a tu panel de Netlify

## Opción 3: API Route + Nodemailer

Para mayor control, puedes crear una API route en Astro:

1. Crea `src/pages/api/contact.ts`
2. Usa Nodemailer para enviar emails
3. Configura SMTP (Gmail, SendGrid, etc.)

## Pruebas

1. **Desarrollo**: Prueba en `npm run dev`
2. **Producción**: Despliega y prueba en el sitio real
3. **Verificación**: Revisa que lleguen emails a `contacto@fierroyforma.cl`

## Límites de EmailJS

- **Plan gratuito**: 200 emails/mes
- **Plan Personal**: $15/mes para 10,000 emails
- Suficiente para la mayoría de sitios web de empresas

## Recomendaciones de seguridad

1. **Nunca** pongas credenciales sensibles en el código
2. Usa variables de entorno para producción
3. Considera agregar reCAPTCHA para evitar spam
4. Valida datos en el frontend y backend

## Soporte

- **EmailJS**: Documentación en https://www.emailjs.com/docs/
- **Problemas comunes**: Revisa la consola del navegador
- **Testing**: Usa la herramienta de pruebas de EmailJS

---

¡Con esta configuración tendrás un formulario de contacto completamente funcional que envía emails directamente a contacto@fierroyforma.cl!