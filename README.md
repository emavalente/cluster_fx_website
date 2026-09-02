# Cluster Efectos

Sitio web para **Cluster Efectos**, dedicado a la fabricación, modificación y reparación de pedales de efectos para guitarra.

El proyecto funciona como catálogo de productos y tienda online, con carrito de compras y finalización de pedidos mediante WhatsApp.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- pnpm

## Características

- Catálogo de pedales de efectos.
- Carrito de compras.
- Persistencia del carrito mediante `localStorage`.
- Cálculo automático de cantidades y precios.
- Generación de pedidos para WhatsApp.
- Implementación de Google Places para mostrar reseñas.
- Diseño responsive.
- Navegación mediante React Router.

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
pnpm install
```

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_WHATSAPP_NUMBER=XXXXXXXXXXXX
```

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Para generar el build de producción:

```bash
pnpm build
```

## 🛠️ Estado del proyecto

El proyecto se encuentra actualmente en desarrollo.

### Implementado

- [x] Estructura inicial del sitio.
- [x] Navegación mediante React Router.
- [x] Diseño responsive.
- [x] Catálogo de productos.
- [x] Página de artistas.
- [x] Servicio técnico.
- [x] Carrito de compras.
- [x] Persistencia del carrito mediante `localStorage`.
- [x] Contador de productos en el carrito.
- [x] Cálculo de subtotales y total.
- [x] Generación de pedidos para WhatsApp.
- [x] Variables de entorno.
- [x] Breadcrumb de navegación.

### Próximamente

- [ ] Mejoras visuales del carrito.
- [ ] Validaciones adicionales del pedido.
- [ ] Integración de Mercado Pago u otro sistema de cobro.
- [ ] Backend y persistencia de pedidos.
- [ ] Mejoras de SEO.
- [ ] Optimización de imágenes.

## 📄 Licencia

Proyecto desarrollado para **Cluster Efectos**.

Todos los derechos reservados.
