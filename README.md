# La Cara Cortada - Backend

Este proyecto es el backend de la aplicación **La Cara Cortada**, un sistema ficticio para la gestión de modelos, productos de maquillaje, eventos de moda, fotos, y membresías exclusivas.

## **Características Principales**

- **Autenticación con JWT**:
  - Registro e inicio de sesión para usuarios.
  - Rutas protegidas para garantizar acceso seguro.
  
- **Gestión de Recursos**:
  - Modelos: Portafolios, logros, y fotos.
  - Productos: Inventario, categorías y precios.
  - Eventos: Fechas, ubicaciones, y productos destacados.
  - Fotos: Venta de imágenes con opciones de formatos.
  - Membresías: Niveles y beneficios exclusivos.

- **Base de Datos**:
  - PostgreSQL como sistema de gestión de base de datos.

---

## **Requisitos Previos**

### **Software Necesario**
- **Node.js** (v16 o superior)
- **PostgreSQL** (v13 o superior)
- **npm** (incluido con Node.js)

---

## **Instalación**

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en el directorio raíz y agrega lo siguiente:
   ```plaintext
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=postgres
   DATABASE_PASSWORD=santiago1
   DATABASE_NAME=la_cara_cortada

   PORT=3000

   JWT_SECRET=supersecretkey
   JWT_EXPIRES_IN=3600

   NODE_ENV=development
   ```

4. Inicia el servidor:
   ```bash
   npm run start:dev
   ```

---

## **Estructura del Proyecto**

```plaintext
backend/
├── src/
│   ├── auth/               # Módulo de autenticación (JWT)
│   ├── models/             # Gestión de modelos
│   ├── products/           # Gestión de productos
│   ├── events/             # Gestión de eventos
│   ├── photos/             # Gestión de fotos
│   ├── memberships/        # Gestión de membresías
│   ├── main.ts             # Punto de entrada de la aplicación
│   ├── app.module.ts       # Configuración principal del módulo
├── test/                   # Pruebas E2E
├── .env                    # Variables de entorno
├── package.json            # Dependencias y scripts
```

---

## **Base de Datos**

Asegúrate de que PostgreSQL esté en ejecución y que la base de datos esté configurada correctamente.

### **Crear Base de Datos**
Ejecuta el siguiente script SQL para configurar la base de datos:

```sql
CREATE DATABASE la_cara_cortada;
```

Luego, aplica el esquema de tablas proporcionado anteriormente.

---

## **Endpoints**

### **Autenticación**

| Método | Ruta         | Descripción           |
|--------|--------------|-----------------------|
| POST   | `/auth/register` | Registrar un nuevo usuario |
| POST   | `/auth/login`    | Iniciar sesión y obtener un token JWT |

### **Modelos**

| Método | Ruta           | Descripción                      |
|--------|----------------|----------------------------------|
| GET    | `/models`      | Obtener todos los modelos         |
| GET    | `/models/:id`  | Obtener un modelo por ID          |
| POST   | `/models`      | Crear un nuevo modelo             |
| PUT    | `/models/:id`  | Actualizar un modelo existente    |
| DELETE | `/models/:id`  | Eliminar un modelo                |

... (Agrega más rutas para productos, eventos, fotos, y membresías).

---

## **Pruebas**

### **Ejecución de Pruebas E2E**
Ejecuta las pruebas de extremo a extremo para verificar el funcionamiento de los endpoints:
```bash
npm run test:e2e
```

---

## **Despliegue**

1. Configura las variables de entorno en el servidor de producción.
2. Construye la aplicación:
   ```bash
   npm run build
   ```
3. Inicia el servidor en modo producción:
   ```bash
   npm run start
   ```

---

## **Licencia**

Este proyecto es ficticio y no está destinado para uso comercial.

