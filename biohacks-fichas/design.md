# Design Document - BIOHACKS PHARMACEUTICAL Technical Data Sheets

## 1. Profile Baseline Declaration

- **Profile selection**: `profiles/promotion.md` (brand/product launch style)
- **Selection rationale**: These are product data sheets designed to present BIOHACKS PHARMACEUTICAL's peptide portfolio with premium pharmaceutical authority. The promotion profile provides the right visual impact for product showcases while allowing technical depth.
- **Referenced dimensions**: Low-to-medium information density, image-driven covers, brand consistency, slogan-style expression for headers
- **Deviation notes**: 
  - Information density is medium (not low) for content pages - technical data requires structured presentation
  - Tables allowed for technical specifications (deviation from pure promotion style)
  - More structured layout for technical data pages vs. pure emotion-driven pages

## 2. Style Baseline Declaration

- **Style anchor**: Roche Diagnostics + Novartis pharmaceutical documentation crossed with Apple product page minimalism
  - From pharma: structured data presentation, clinical authority, precise typography
  - From Apple: generous whitespace, impact typography on covers, premium feel
- **Referenced dimension**: Layout structure and information hierarchy from pharma; visual minimalism and typography treatment from Apple

## 3. Style Details

### Color Design Principles

**Overall tendency**: Conservative & steady with clinical authority
**Temperature**: Cool - clinical blues and navy

- **Primary**: `#042C53` (Deep Navy) - brand authority, headers, chapter numbers
- **Secondary**: `#185FA5` (Clinical Blue) - sub-headers, accents, key data
- **Accent**: `#378ADD` (Bright Azure) - highlights, data callouts, interactive elements
- **Background**: `#F1EFE8` (warm off-white, clinical paper feel) for content pages; `#042C53` for covers
- **Text**: `#2C2C2A` (soft black) for body; `#FFFFFF` for text on dark backgrounds
- **Supporting**: `#85B7EB` (Sky Tint) for subtle backgrounds; `#5F5E5A` for secondary text

### Font Usage

- **Display/Marca**: `Liter` - modern neo-grotesque, clean and rational for pharma/tech positioning
- **Body**: `QuattrocentoSans` - classic elegant sans-serif, highly readable for technical content
- **Data/Monospace elements**: `Liter` at smaller sizes

Font size hierarchy:
- Cover title: 56px Bold
- Chapter number: 120px Bold
- Chapter title: 36px Bold  
- Page title: 28px Bold
- Subtitle: 22px Regular
- Body text: 18px Regular (lineHeight 1.5)
- Technical data/labels: 14px Regular
- Annotations: 12px Regular

### Container & Element Styles

- Sharp corners throughout (clinical precision)
- Horizontal lines as dividers (1-2px, Sky Tint)
- Left accent bars (4-6px, Clinical Blue) for key sections
- No rounded rectangles
- Minimal use of filled shapes; prefer lines and whitespace

### Image Style

- Icons: Outline style, Clinical Blue, used sparingly for data categories
- Tables: Minimal three-line style with Deep Navy header
- Charts: Not applicable for this presentation
- Illustrations: Abstract molecular/hexagonal patterns

## 4. Layout System

### Global Layout

- Page size: 1280x720 (16:9)
- Page margins: 60px left/right, 50px top, 40px bottom
- Consistent elements: BIOHACKS hexagonal isotipo in bottom-right corner (small, 30px), page category label in bottom-left

### Cover Page
- Full dark navy background
- Large chapter/product number (120px, Bright Azure, semi-transparent)
- Product name (56px, white)
- Subtitle (22px, Sky Tint)
- BIOHACKS PHARMACEUTICAL branding (top-left)

### Chapter Pages
- Full dark navy background  
- Oversized chapter number (120px, Bright Azure)
- Chapter title (36px, white)
- Subtitle (20px, Sky Tint)

### Content Pages
- Light background (#F1EFE8)
- Left accent bar (6px wide, Clinical Blue, full height)
- Title area top: Product name + category badge
- Two-column layout for technical data pages
- Structured sections with clear hierarchy

### Final Page
- Full dark navy background
- Centered branding
- RUO notice prominent

## 5. Style Usage Rules

- `$title` style: Cover titles, chapter titles
- `$subtitle` style: Cover subtitles, page subtitles  
- `$body` style: Main content text, descriptions
- `$label` style: Technical specifications, data labels
- `$caption` style: Annotations, disclaimers
- Primary color: Text headers, chapter numbers, key elements
- Secondary color: Sub-headers, accent bars, badges
- Accent color: Data highlights, key numbers
- Background color: Content page backgrounds

## 6. Risk Prohibitions

- No rounded rectangles (clinical precision requires sharp corners)
- No gradients except subtle background masks
- No bright/saturated colors outside the brand palette
- Body text never below 18px; labels never below 12px
- No low-contrast text on backgrounds
- No cluttered layouts - maintain whitespace
- Technical data must be clearly structured, not hidden in paragraphs

## 7. Theme Definition

```yaml
theme:
  colors:
    primary: "#042C53"
    secondary: "#185FA5"
    accent: "#378ADD"
    background: "#F1EFE8"
    text: "#2C2C2A"
    light: "#FFFFFF"
    muted: "#5F5E5A"
    tint: "#85B7EB"
    ice: "#E6F1FB"
  textStyles:
    title:
      fontSize: 56
      color: "$light"
      fontFamily: "Liter"
      lineHeight: 1.2
      letterSpacing: 2
    chapterNum:
      fontSize: 120
      color: "$accent"
      fontFamily: "Liter"
      lineHeight: 1.0
    chapterTitle:
      fontSize: 36
      color: "$light"
      fontFamily: "Liter"
      lineHeight: 1.3
      letterSpacing: 1
    pageTitle:
      fontSize: 28
      color: "$primary"
      fontFamily: "Liter"
      lineHeight: 1.3
    subtitle:
      fontSize: 22
      color: "$tint"
      fontFamily: "QuattrocentoSans"
      lineHeight: 1.4
    body:
      fontSize: 18
      color: "$text"
      fontFamily: "QuattrocentoSans"
      lineHeight: 1.6
    label:
      fontSize: 14
      color: "$muted"
      fontFamily: "QuattrocentoSans"
      lineHeight: 1.4
    caption:
      fontSize: 12
      color: "$muted"
      fontFamily: "QuattrocentoSans"
      lineHeight: 1.3
    dataHighlight:
      fontSize: 32
      color: "$accent"
      fontFamily: "Liter"
      lineHeight: 1.2
  tableStyles:
    default:
      fontSize: 14
      fontFamily: "QuattrocentoSans"
      headerFill: "$primary"
      headerColor: "$light"
      headerBold: true
      bodyFill: ["#FFFFFF", "#F1EFE8"]
      bodyColor: "$text"
      border:
        style: solid
        width: 1
        color: "#E6F1FB"
```
