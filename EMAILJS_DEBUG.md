# Debug EmailJS - Pasos para solucionar

## 🔍 Error actual:
```
Status: 400
"The service ID not found"
```

## 📋 Checklist de verificación:

### 1. Verificar credenciales en EmailJS:

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. **Email Services**:
   - ¿Existe `service_bhrhkz7`?
   - ¿Está ACTIVO?
   - ¿Está conectado a Gmail correctamente?

3. **Email Templates**:
   - ¿Existe `template_s44q95o`?
   - ¿Está PUBLICADO?
   - ¿Las variables {{from_name}}, {{from_email}}, etc. están correctas?

4. **Public Key**:
   - Ve a Account → General
   - Verifica que `kj-2Lqmg--LNKz2bn` sea correcto

### 2. Crear nuevas credenciales (RECOMENDADO):

#### Paso 1: Nuevo Email Service
1. Email Services → **Add New Service**
2. Selecciona **Gmail**
3. Autoriza tu cuenta
4. **Copia el nuevo Service ID**

#### Paso 2: Nuevo Template
1. Email Templates → **Create New Template**
2. Configuración:

**Subject:**
```
Nuevo contacto - Fierro y Forma - {{from_name}}
```

**To Email:**
```
contacto@fierroyforma.cl
```

**Template Body:**
```
Has recibido un nuevo mensaje desde fierroyforma.cl:

DATOS DEL CLIENTE:
Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Empresa: {{company}}

MENSAJE:
{{message}}

---
Enviado automáticamente desde el sitio web
```

3. **GUARDAR** y **PUBLICAR**
4. **Copia el Template ID**

#### Paso 3: Actualizar .env.local
```env
PUBLIC_EMAILJS_SERVICE_ID=nuevo_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=nuevo_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

### 3. Test con credenciales hardcodeadas (Solo para debug):

Si quieres probar rápido, puedes poner las credenciales directamente en el código:

```typescript
// TEMPORAL - Solo para debug
const EMAILJS_SERVICE_ID = "tu_service_id_real";
const EMAILJS_TEMPLATE_ID = "tu_template_id_real";
const EMAILJS_PUBLIC_KEY = "tu_public_key_real";
```

### 4. Verificar en la consola:

En Chrome DevTools → Console, deberías ver:
```
EmailJS Config: {
  serviceId: "service_xxxxx",
  templateId: "template_xxxxx", 
  publicKey: "xxxxxxxxx"
}
```

Si ves `undefined`, el problema son las variables de entorno.

### 5. Soluciones comunes:

1. **Service inactivo**: Reactivar en EmailJS Dashboard
2. **Variables undefined**: Reiniciar servidor `npm run dev`
3. **Template no publicado**: Publicar template en EmailJS
4. **Límite excedido**: Verificar cuota en EmailJS (200 emails/mes gratis)

### 6. Test final:

Una vez corregido:
1. Reinicia `npm run dev`
2. Abre http://localhost:4321
3. Llena formulario con datos reales
4. Envía y verifica que llegue a contacto@fierroyforma.cl

## 🆘 Si sigue fallando:

1. Crea un proyecto de prueba en EmailJS
2. Usa el test tool de EmailJS para verificar conectividad
3. Revisa los logs en EmailJS Dashboard
4. Considera usar Resend como alternativa