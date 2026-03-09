# Rick & Morty Comparador

Aplicación web para comparar personajes de la serie **Rick and Morty**. Permite seleccionar dos personajes de la [Rick and Morty API](https://rickandmortyapi.com/) (GraphQL) y ver los episodios que comparten.

---

## Sobre el proyecto

**Rick & Morty Comparador** es una SPA construida con **Next.js 15**, **React 18** y **Apollo Client** que consume la API pública de Rick and Morty. La app ofrece:

- **Dos listas de personajes** con búsqueda y paginación.
- **Selección de un personaje por lista** para comparar.
- **Vista de episodios compartidos** cuando hay dos personajes seleccionados.
- **Tema claro/oscuro** y diseño responsive.
- **Design system** propio con Storybook y tests con Vitest.

La arquitectura sigue **Clean Architecture** en el dominio de personajes (módulo Character con dominio, aplicación e infraestructura) y separación clara entre **core** (casos de uso y pantallas), **design-system** (componentes reutilizables) y **lib** (utilidades, GraphQL, Apollo, módulos).

---

## Primeros pasos

### Requisitos

- **Node.js** 20+
- Gestor de paquetes: **pnpm** (recomendado), pero también puedes usar **npm**, **yarn** o **bun**.

### Instalación

1. Clonar el repositorio (o descomprimir el proyecto).
2. Instalar dependencias (elige tu gestor):

```bash
# pnpm (recomendado)
pnpm install

# npm
npm install

# yarn
yarn install

# bun
bun install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

Editar `.env` y definir la URL de la API si es necesario (por defecto se usa la API pública de Rick and Morty).

---

## Arrancar el proyecto

Para levantar el servidor de desarrollo con Turbopack en el puerto **3005** (sustituye `pnpm` por `npm run`, `yarn` o `bun run` si usas otro gestor):

```bash
pnpm dev
```

Abrir [http://localhost:3005](http://localhost:3005) en el navegador.

---

## Comandos útiles

### Lint

Ejecutar ESLint y aplicar correcciones automáticas (sustituye `pnpm` por tu gestor si prefieres otro):

```bash
pnpm lint
```

### Tests

- **Tests unitarios** (design-system + core, Vitest + jsdom):

```bash
pnpm test
```

- **Modo watch** (re-ejecutar al cambiar archivos):

```bash
pnpm test:watch
```

- **Cobertura**:

```bash
pnpm test:coverage
```

- **Tests de Storybook** (requiere `pnpm exec playwright install` o el equivalente en tu gestor):

```bash
pnpm test:storybook
```

### Build para producción

Generar el build optimizado de Next.js:

```bash
pnpm build
```

Levantar la app en modo producción:

```bash
pnpm start
```

### Docker

Para levantar la aplicación en un contenedor Docker (build de producción usando el `Dockerfile` incluido):

1. **Construir la imagen**:

```bash
docker build -t conexa-challenge .
```

2. **Crear el archivo de entorno (si no existe)**:

```bash
cp .env.example .env
```

3. **Levantar el contenedor** (puerto 3000 por defecto):

```bash
docker run --env-file .env -p 3000:3000 conexa-challenge
```

Luego abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Storybook

Para ver y probar los componentes del design system en aislamiento:

```bash
pnpm storybook
```

Se abre Storybook en [http://localhost:6006](http://localhost:6006). Incluye stories de todos los componentes (TitleText, Paragraph, ActionItem, CharacterCard, ElectricBorder, Footer, etc.) con controles y documentación.

Para generar el build estático de Storybook:

```bash
pnpm build-storybook
```

---

## Arquitectura y scaffolding del proyecto

Estructura de carpetas y responsabilidades, pensada como guía para navegar el código.

### Raíz del proyecto

| Carpeta / archivo | Descripción |
|-------------------|-------------|
| `app/` | Rutas y páginas de Next.js (App Router): layout, página principal, error, not-found. |
| `config/` | Configuración global: fuentes, sitio (nombre, descripción), tema. |
| `core/` | Lógica de negocio de la aplicación por “feature”: Home (comparador). |
| `design-system/` | Componentes UI reutilizables y sus tests. |
| `lib/` | Infraestructura compartida: Apollo, GraphQL, módulos de dominio, hooks, providers, estilos, routing. |
| `stories/` | Stories de Storybook (Design System + ejemplo Button). |
| `.storybook/` | Configuración de Storybook (main, preview con tema y estilos globales). |
| `public/` | Assets estáticos. |
| `vitest.config.ts` / `vitest.unit.config.ts` / `vitest.setup.ts` | Configuración de Vitest (unit + storybook, mocks de next/link, canvas, ResizeObserver). |

### `app/`

- **`layout.tsx`**: Layout raíz (metadata, viewport, fuentes, Providers con tema y Apollo).
- **`page.tsx`**: Página principal; envuelve `HomeLayout` en `Suspense` con un skeleton (`HomeLayoutSkeleton`).
- **`error.tsx`**: Página de error custom (design system: TitleText, Paragraph, ActionItem, reintentar / volver al inicio).
- **`not-found.tsx`**: Página 404 custom (mismo estilo que error, enlace a inicio).
- **`api/characters/route.ts`**: API interna REST que delega en `ModuleFactory` + `CharacterModule` para obtener personajes; usada por el cliente (paginación/búsqueda) a través de `characterClient.api.ts`.

### `config/`

- **`fonts.ts`**: Fuentes (Space Grotesk vía `next/font`, Playpen Sans vía link + variable CSS).
- **`site.ts`**: Nombre y descripción del sitio, items de navegación.
- **`theme.ts`**: Tipos y opciones de tema (light/dark).

### `core/`

Contiene la feature **Home** (comparador de personajes).

- **`Home/actions/character.action.ts`**: Server Action que usa `ModuleFactory` y el módulo Character para obtener personajes y devolver datos planos para el cliente (se usa en la carga inicial SSR).
- **`Home/services/characterClient.api.ts`**: Cliente de la API interna `/api/characters` para cargar personajes desde el navegador (paginación y búsqueda).
- **`Home/context/`**
  - **`MainContext.tsx`**: Estado global del comparador, separado por responsabilidad:
    - gestión de listas (list1, list2, `loadList`, `setListPage`, `setListName`, `searchList`);
    - gestión de selección (`selectedCharacter1`, `selectedCharacter2`, `setSelectedCharacter`, ids seleccionados).
  - **`characters-state.type.ts`**: Tipos planos (CharacterPlain, CharacterInfoPlain, ListState, etc.) usados por la UI.
- **`Home/layout/`**
  - **`HomeLayout.tsx`**: Server Component que obtiene los datos iniciales con la Server Action `getCharacters`, crea el `MainProvider` e inyecta MainContent, HeaderMenu, CharactersLayout, EpisodesLayout y Footer.
  - **`CharactersLayout.tsx`**: Dos columnas con listas de personajes (CharacterList + búsqueda y paginación).
  - **`EpisodesLayout.tsx`**: Vista de episodios (por personaje y compartidos) entre los dos personajes seleccionados.
- **`Home/components/`**
  - **CharacterList**: Lista de personajes por columna (CharacterCard, InputText, CharacterPaginator).
  - **SelectedCharacterCard**: Card del personaje seleccionado con título y `EpisodesBadge`.
  - **EpisodeList**: Lista de episodios (compartidos o por personaje).
  - **ListLoading / skeletons**: Skeletons de carga para listas y layout.
- **`Home/hooks/`**
  - **`useCharacterList`**: Hook para manejar estado derivado de cada lista (búsqueda, paginación, selección).
  - **`useHomeLayout`**: Hook para saber si se puede comparar (ambos personajes seleccionados).
  - **`useEpisodesLayout`**: Hook para gestionar el drawer de episodios y el cálculo de episodios compartidos.
- **`Home/utils/episode.utils.ts`**: Utilidades de dominio (ej. `getSharedEpisodes`); con tests en `episode.utils.test.ts`.
- **`Home/types/common.ts`**: Tipos comunes de la feature Home.

### `design-system/`

Componentes UI reutilizables, exportados desde **`index.ts`**:

- **Layout / estructura**: MainContent, MainSection, MainArticle, Separator, HeaderMenu, Footer.
- **Tipografía**: TitleText, Paragraph.
- **Formularios / controles**: InputText, ActionItem (botón o Link de Next), Switch (ThemeSwitch).
- **Personajes**: CharacterCard (tarjeta de personaje), CharacterBadge (estado/especie), EpisodesBadge (badge de episodios reutilizable), CharacterPaginator.
- **Efectos**: ElectricBorder.
- **Marca**: Logo.

Cada componente puede tener su test (por ejemplo `ActionItem.test.tsx`) y se documenta en **`stories/DesignSystem/`**.

### `lib/`

Infraestructura y dominio compartidos.

- **`apollo/`**
  - **server/apollo.server.ts**: Creación del cliente Apollo para Server Components / Server Actions.
- **`graphql/`**: Queries (ej. `queries/character/character.query.ts` con `GET_ALL_CHARACTERS`).
- **`modules/Character/`** (Clean Architecture)
  - **domain/**: Entidades (Character, CharacterInfo), interfaces, ports, tipos.
  - **application/**: Casos de uso (ej. `get-all-characters.uc.ts`).
  - **infraestructure/**: Adaptadores, repositorios (Apollo), mappers, DTOs, `character.module.ts` que une puertos e implementaciones.
- **`factories/Module.factory.ts`**: Punto de entrada para crear el cliente Apollo y obtener el `CharacterModule` (usado desde Server Actions y desde el `route` `/api/characters`).
- **`routing/paths.ts`**: Rutas públicas (ej. HOME).
- **`hooks/use-theme.ts`**: Hook para tema (next-themes) que expone estado `ready`, `isDark`, `isLight`, etc., evitando problemas de hidratación.
- **`styles/global.css`**: Estilos globales, variables CSS del tema (light/dark), Tailwind.
- **`providers/`**: Providers de la app (tema, Apollo, etc.).
- **`assets/`**: Iconos (Moon, Sun, etc.).

### Flujo de datos (resumen)

1. **`app/page.tsx`** (servidor) envuelve `HomeLayout` en `Suspense` con un skeleton.
2. **`HomeLayout.tsx`** (Server Component) llama a la Server Action `getCharacters` dos veces (para lista 1 y lista 2) usando `ModuleFactory` y el `CharacterModule`.
3. El **CharacterModule** (lib) usa el repositorio/adaptador Apollo para ejecutar la query GraphQL y devolver DTOs mapeados a entidades de dominio; se serializan a objetos planos para el cliente.
4. Los datos iniciales se inyectan en **MainProvider** (como `initialList1` e `initialList2`) y se renderizan los layouts de Home.
5. La UI (core/Home) usa **MainContext** para listas, selección, paginación y búsqueda; cuando necesita nuevos datos en cliente hace fetch a la API interna **`/api/characters`** (que también usa `ModuleFactory` + `CharacterModule`), manteniendo una única fuente de verdad en el dominio.

---

## Resumen

- **Rick & Morty Comparador** permite elegir dos personajes y ver episodios en común, con búsqueda y paginación.
- **Stack**: Next.js 15, React 18, Apollo Client, GraphQL (Rick and Morty API), Tailwind CSS 4, HeroUI, Vitest, Storybook, Docker.
- **Comandos**: `pnpm dev` (desarrollo), `pnpm build` + `pnpm start` (producción), `pnpm lint`, `pnpm test`, `pnpm storybook`, `docker build` + `docker run` (contenedor).
- **Estructura**: `app` (rutas y páginas, + API interna), `core/Home` (feature comparador, contexto y hooks), `design-system` (componentes y Storybook), `lib` (Apollo, GraphQL, módulo Character en Clean Architecture, hooks, estilos).

---

**Realizado por Juan Melo**
