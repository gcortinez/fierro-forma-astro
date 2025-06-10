# Despliegue en Vercel - Fierro y Forma

## Pasos para desplegar en Vercel

### 1. Preparar el proyecto

```bash
# Asegúrate de que el build funcione
npm run build

# Crear repositorio Git (si no tienes uno)
git init
git add .
git commit -m "Initial commit"

# Subir a GitHub
git remote add origin https://github.com/tu-usuario/fierro-forma-astro.git
git push -u origin main
```

### 2. Configurar Vercel

1. Ve a [vercel.com](https://vercel.com/)
2. Conecta tu cuenta de GitHub
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un proyecto Astro

### 3. Configurar variables de entorno en Vercel

En el dashboard de Vercel:

1. Ve a tu proyecto → **Settings** → **Environment Variables**
2. Agrega estas variables:

```
PUBLIC_EMAILJS_SERVICE_ID = tu_service_id
PUBLIC_EMAILJS_TEMPLATE_ID = tu_template_id  
PUBLIC_EMAILJS_PUBLIC_KEY = tu_public_key
```

### 4. Configurar EmailJS (Si no lo has hecho)

#### Paso 1: Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea cuenta gratuita
3. Confirma email

#### Paso 2: Configurar servicio Gmail
1. **Email Services** → **Add New Service**
2. Selecciona **Gmail**
3. Autoriza tu cuenta Gmail
4. Copia el **Service ID** (ej: `service_abc123`)

#### Paso 3: Crear template
1. **Email Templates** → **Create New Template**
2. Configuración del template:

**Subject:**
```
Nuevo contacto desde FierroYForma.cl - {{from_name}}
```

**To Email:**
```
contacto@fierroyforma.cl
```

**Template Body:**
```
Has recibido un nuevo mensaje desde tu sitio web:

Datos del cliente:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Teléfono: {{phone}}
- Empresa: {{company}}

Mensaje:
{{message}}

---
Enviado desde fierroyforma.cl
Fecha: {{reply_to}}
```

3. Copia el **Template ID** (ej: `template_xyz789`)

#### Paso 4: Obtener Public Key
1. **Account** → **General**
2. Copia tu **Public Key** (ej: `abc123def456`)

### 5. Configurar variables en Vercel

En Vercel Environment Variables:

```
PUBLIC_EMAILJS_SERVICE_ID = service_abc123
PUBLIC_EMAILJS_TEMPLATE_ID = template_xyz789
PUBLIC_EMAILJS_PUBLIC_KEY = abc123def456
```

### 6. Redesplegar

1. En Vercel, ve a **Deployments**
2. Haz clic en **Redeploy** para aplicar las variables
3. O simplemente haz un push a tu repositorio

### 7. Dominios personalizados (Opcional)

1. En Vercel: **Settings** → **Domains**
2. Agrega tu dominio: `fierroyforma.cl`
3. Configura los DNS según las instrucciones de Vercel

## Configuración de Astro para Vercel

El proyecto ya está configurado correctamente. Vercel detecta automáticamente:

```javascript
// astro.config.mjs - Ya configurado
export default defineConfig({
  output: 'static', // Por defecto en Astro
  integrations: [react(), tailwind()]
});
```

## Estructura recomendada

```
fierro-forma-astro/
├── src/
├── public/
├── package.json
├── astro.config.mjs
├── .env.example          # Template de variables
├── .gitignore           # No incluir .env.local
└── vercel.json          # Opcional
```

## Testing

1. **Local**: `npm run dev` - Verificar que funciona localmente
2. **Build**: `npm run build` - Verificar que el build es exitoso  
3. **Preview**: `npm run preview` - Probar el build local
4. **Production**: Probar en el dominio de Vercel

## Verificación del formulario

1. Completa el formulario en tu sitio desplegado
2. Verifica que el email llegue a `contacto@fierroyforma.cl`
3. Revisa la consola de EmailJS para estadísticas

## Límites y costos

### EmailJS (Plan gratuito):
- 200 emails/mes
- Suficiente para sitios corporativos pequeños

### Vercel (Plan gratuito):
- 100GB bandwidth/mes
- Despliegues ilimitados
- Dominios .vercel.app incluidos

### Upgrade si necesitas más:
- **EmailJS Pro**: $15/mes (10,000 emails)
- **Vercel Pro**: $20/mes (1TB bandwidth)

## Monitoreo

- **Vercel Analytics**: Incluido gratis
- **EmailJS Dashboard**: Estadísticas de emails enviados
- **Logs**: Vercel Functions logs para debugging

## Comandos útiles

```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Deploy desde CLI
vercel

# Ver logs en tiempo real
vercel logs fierro-forma-astro

# Configurar dominios
vercel domains add fierroyforma.cl
```

## Soporte

- **Vercel**: Documentación excelente + comunidad activa
- **EmailJS**: Dashboard intuitivo + soporte por email
- **Astro**: Documentación oficial muy completa

---

¡Con esta configuración tendrás un sitio web profesional completamente funcional desplegado en Vercel con formulario de contacto operativo!