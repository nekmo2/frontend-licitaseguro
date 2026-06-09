# LicitaSeguro

## Integrantes

- Alvaro Vásquez
- Bruno Neira

## Descripción

LicitaSeguro es una aplicación web desarrollada con HTML, CSS, Bootstrap y JavaScript que permite consultar licitaciones públicas mediante la API de Mercado Público.

El sistema permite realizar búsquedas de licitaciones utilizando filtros por fecha y estado, visualizar información detallada de cada licitación y validar RUT chileno mediante el algoritmo del dígito verificador.

## Objetivos del Proyecto

- Consultar licitaciones públicas disponibles.
- Filtrar licitaciones por fecha y estado.
- Visualizar detalles de cada licitación.
- Validar RUT chileno.
- Implementar una interfaz responsiva y accesible.
- Consumir información desde una API externa utilizando JavaScript.

## Funcionalidades

### Gestión de Licitaciones

- Consulta de licitaciones mediante la API de Mercado Público.
- Filtro por fecha.
- Filtro por estado.
- Validación de campos obligatorios.
- Consumo de datos utilizando Fetch API.
- Renderizado dinámico de resultados.
- Visualización de resultados mediante tarjetas.
- Visualización de detalles mediante Modal Bootstrap.
- Manejo de respuestas sin resultados.
- Manejo de errores de conexión.

### Paginación

- Visualización de 10 resultados por página.
- Navegación mediante botones Anterior y Siguiente.
- Control de límites de paginación.

### Validación de RUT

- Validación matemática del RUT chileno.
- Verificación de dígito verificador.
- Mensajes de error para entradas inválidas.
- Confirmación cuando el RUT ingresado es válido.

### Accesibilidad y Usabilidad

- Uso de etiquetas Label en formularios.
- Implementación de atributos ARIA.
- Uso de role="alert" para mensajes de error.
- Uso de tabindex para navegación mediante teclado.
- Diseño responsive para dispositivos móviles, tablets y computadores.

## Tecnologías

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- JavaScript ES6
- API Mercado Público

## Estructura del Proyecto

```text
frontend-licitaseguro/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── api.js
│   ├── licitaciones.js
│   ├── proveedores.js
│   └── app.js
│
└── README.md
```

## Cómo Ejecutar

1. Descargar o clonar el repositorio.
2. Abrir el proyecto en Visual Studio Code.
3. Ejecutar el proyecto utilizando Live Server.
4. Acceder a la aplicación desde el navegador.
5. Utilizar los formularios disponibles para consultar licitaciones y validar RUT.

## API Utilizada

Mercado Público (ChileCompra)

- Consulta de licitaciones públicas.
- Obtención de información mediante ticket de acceso.
- Consumo de servicios REST utilizando Fetch API.

## Conclusión

Este proyecto permitió aplicar conocimientos de desarrollo frontend utilizando HTML, CSS, Bootstrap y JavaScript, integrando consumo de APIs, validación de formularios, accesibilidad, manipulación del DOM y diseño responsivo para construir una solución funcional orientada a la consulta de licitaciones públicas.