# BIOHACKS PHARMACEUTICAL — Peptide Catalog App

React + TypeScript e-commerce app for research-grade peptide compounds.

## Stack

- React 19 + TypeScript 5.9 + Vite 7
- Tailwind CSS v3 (dark navy theme)
- shadcn/ui (Radix UI) — 40+ components
- React Router v7 (HashRouter for static hosting)

## Commands

```bash
cd app
npm install
npm run dev     # Vite dev server → http://localhost:5173
npm run build   # Production build → app/dist/
```

## Deployment

**Dockerfile** (recommended for Coolify):
```
Build Pack: Dockerfile
Dockerfile path: Dockerfile
```

**Nixpacks** (alternative):
```
Build Pack: Nixpacks
nixpacks.toml is pre-configured
```

---

## Changelog

### v1.02 — 2026-06-11

**Product Vial Images**
- Added 16 PNG vial images to `app/public/assets/catalog/` (served at `/assets/catalog/vial_<id>.png`)
- Added `image` field to 15 products in `products.ts`; ProductCard displays image when available, falls back to Beaker icon
- Version bumped to v1.02 on homepage

### v1.01 — 2026-06-11

**Full Spanish (ES) Translation System**
- Added `LanguageContext` with EN/ES toggle persisted to `localStorage`
- Created `translations.ts` with complete bilingual UI strings for all 13 components and pages
- Created `productTranslations.ts` with technical pharmaceutical Spanish for all 56 products — uses proper scientific terminology (agonista, análogo, vida media, nootrópico, señalización celular, etc.) instead of literal word-for-word translation
- Language toggle button added to Navbar (desktop + mobile)

**Bug Fixes**
- Fixed HashRouter navigation bug: Navbar section links (`/#science`, `/#quality`, `/#about`, `/#contact`) were creating `#/#section` URLs causing blank pages. Replaced with `handleSectionLink()` scroll function
- Fixed `ArrowRight` icon in compact ProductCard — was `text-[#E6F1FB]` (nearly invisible), now `text-[#9BB9D4]`
- Improved category filter button text contrast in CatalogPage (`text-[#042C53]/70` on white)
- Fixed AgeVerification exit button contrast — changed `border-[#5F5E5A]/text-[#5F5E5A]` to `border-[#042C53]/text-[#042C53]` for WCAG compliance

**UI Improvements**
- Version number added to homepage (v1.01, bottom-right, low opacity)
- Category labels in CatalogPage now translated when language is ES
- Badge labels (POPULAR/NEW/SALE) translated to Spanish (POPULAR/NUEVO/OFERTA)

**Deployment**
- Fixed `nixpacks.toml`: removed standalone `npm` from nixPkgs (bundled with nodejs_22)
- Added `Dockerfile` + `nginx.conf` for multi-stage Docker build as alternative build pack
