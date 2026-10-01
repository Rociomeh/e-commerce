# eCommerce TodoBolsas - React + Vite

Aplicación web interactiva desarrollada en React para la gestión de un catálogo de productos y carrito de compras dinámico.

## 🚀 Funcionalidades Principales

- **Carga Asíncrona de Datos (`useEffect`)**: Simulación de consulta a API mediante archivo JSON local con estado de carga (`spinner`).
- **Filtrado en Tiempo Real**: Búsqueda interactiva por nombre de producto utilizando estado derivado sin copias de datos redundantes.
- **Carrito de Compras Avanzado**:
  - Agrupación automática de productos duplicados por cantidad.
  - Controles incrementales (`+` y `-`) por item.
  - Cálculo de total basado en precio de oferta mediante `reduce()`.
  - Opción de eliminación individual y botón para **Vaciar Carrito**.
- **Elementos Interactivos Dinámicos**: Cambios en texto y estado visual de los botones de interacción ("Añadir al carrito" vs "✓ En el carrito").
- **Diseño Responsivo**: Maquetación adaptativa utilizando Bootstrap 5.

## 🛠️ Tecnologías Utilizadas

- **React 18** (Componentes Funcionales, Hooks: `useState`, `useEffect`)
- **Vite** (Build tool y entorno de desarrollo)
- **Bootstrap 5 & FontAwesome**
- **GitHub Pages** (Despliegue continuo)

## 📦 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/Rociomeh/e-commerce.git](https://github.com/Rociomeh/e-commerce.git)