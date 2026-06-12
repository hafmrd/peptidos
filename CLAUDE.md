# Biohacks Pharmaceutical — Peptide Catalog App

React + TypeScript e-commerce app for **BIOHACKS PHARMACEUTICAL** peptide research compounds.

## Commands (run from `app/`)

```
npm run dev       # Vite dev server
npm run build     # tsc + vite build
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Tech Stack

- **React 19** + **TypeScript 5.9** via **Vite 7**
- **Tailwind CSS v3** with custom dark navy theme
- **shadcn/ui** (Radix UI) — 40+ prebuilt components in `src/components/ui/`
- **React Router v7** — client-side routing
- **React Hook Form** + **Zod** — form validation
- **Lucide React** — icons

## Project Structure

```
app/                        # Main web app
  src/
    data/products.ts        # All 50+ product SKUs + query helpers
    context/CartContext.tsx  # Cart state (localStorage-persisted)
    pages/                  # HomePage, CatalogPage, ProductPage, CartPage, CheckoutPage
    components/             # AgeVerification, CartDrawer, ProductCard
    sections/               # Navbar, Footer
    components/ui/          # shadcn/ui components
biohacks-fichas/            # Product data sheet design files (.page format)
biohacks-labels/            # Product label PNGs
biohacks-strategy/          # Business strategy docs
Logo/                       # Brand assets (SVG, PNG)
```

## Key Files

- [app/src/data/products.ts](app/src/data/products.ts) — product catalog and category definitions
- [app/src/context/CartContext.tsx](app/src/context/CartContext.tsx) — cart logic
- [app/src/App.tsx](app/src/App.tsx) — root routes
- [app/tailwind.config.js](app/tailwind.config.js) — brand theme
- [app/index.css](app/src/index.css) — global CSS variables and utilities

## Brand

- Primary palette: navy bg (`#0B1A2E`), accent blue `#378ADD`, light blue `#85B7EB`
- Custom CSS classes: `btn-primary-bio`, `btn-outline-bio`, `gradient-navy`, `hex-pattern`, `text-gradient`
- All pages include age-verification gate and "FOR RESEARCH USE ONLY" disclaimers

## Product Catalog

Products live in `src/data/products.ts` as a flat array with type `Product`. Categories:
`metabolic` | `regen` | `nootropic` | `hormonal` | `aesthetic` | `blends` | `supplies`

Helper functions: `getProductById`, `getProductsByCategory`, `getFeaturedProducts`, `getNewProducts`, `getSaleProducts`, `searchProducts`.

## Conventions

- Components use named exports
- Path alias `@/` maps to `src/`
- No backend — all data is static in `products.ts`
- Cart persisted to `localStorage` under key `biohacks_cart`
