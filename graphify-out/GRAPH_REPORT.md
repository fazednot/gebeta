# Graph Report - .  (2026-07-31)

## Corpus Check
- Large corpus: 53 files · ~930,812 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 166 nodes · 136 edges · 39 communities (17 shown, 22 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_tsconfig app configuration|tsconfig app configuration]]
- [[_COMMUNITY_tsconfig node configuration|tsconfig node configuration]]
- [[_COMMUNITY_package.json devDependencies|package.json devDependencies]]
- [[_COMMUNITY_package.json scripts|package.json scripts]]
- [[_COMMUNITY_menu data structure|menu data structure]]
- [[_COMMUNITY_sqlite database module|sqlite database module]]
- [[_COMMUNITY_package.json dependencies|package.json dependencies]]
- [[_COMMUNITY_visitus & services data|visitus & services data]]
- [[_COMMUNITY_reservation modal component|reservation modal component]]
- [[_COMMUNITY_app routing configuration|app routing configuration]]
- [[_COMMUNITY_navbar component|navbar component]]
- [[_COMMUNITY_footer component|footer component]]
- [[_COMMUNITY_gallery component|gallery component]]
- [[_COMMUNITY_hero component|hero component]]
- [[_COMMUNITY_menu preview component|menu preview component]]
- [[_COMMUNITY_reservation cta component|reservation cta component]]
- [[_COMMUNITY_scroll manager component|scroll manager component]]
- [[_COMMUNITY_services component|services component]]
- [[_COMMUNITY_menu data JSON|menu data JSON]]
- [[_COMMUNITY_project metadata docs|project metadata docs]]
- [[_COMMUNITY_whatsapp integration|whatsapp integration]]
- [[_COMMUNITY_homepage component|homepage component]]
- [[_COMMUNITY_menupage component|menupage component]]
- [[_COMMUNITY_base tsconfig|base tsconfig]]
- [[_COMMUNITY_bolt configuration|bolt configuration]]
- [[_COMMUNITY_testimonials component|testimonials component]]
- [[_COMMUNITY_deployment docs|deployment docs]]
- [[_COMMUNITY_supabase integration|supabase integration]]
- [[_COMMUNITY_agent execution rules|agent execution rules]]
- [[_COMMUNITY_mobile UX rules|mobile UX rules]]
- [[_COMMUNITY_static-safe patterns|static-safe patterns]]
- [[_COMMUNITY_index.html root|index.html root]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 14 edges
3. `scripts` - 6 edges
4. `getSqliteDb()` - 4 edges
5. `App()` - 3 edges
6. `insertReservation()` - 3 edges
7. `parsePath()` - 2 edges
8. `parseQuery()` - 2 edges
9. `VisitUs()` - 2 edges
10. `buildWhatsAppInquiry()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Project Mission` --semantically_similar_to--> `Gebeta Restaurant Website Redesign`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `Deployment Model` --semantically_similar_to--> `Deployment Guide (Shared Hosting)`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `Gebeta Restaurant Website Redesign` --conceptually_related_to--> `Restaurant Schema JSON-LD`  [INFERRED]
  README.md → index.html
- `VisitUs()` --calls--> `buildWhatsAppInquiry()`  [INFERRED]
  src/components/VisitUs.tsx → src/data/services.ts

## Import Cycles
- None detected.

## Communities (39 total, 22 thin omitted)

### Community 0 - "tsconfig app configuration"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+12 more)

### Community 1 - "tsconfig node configuration"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 2 - "package.json devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+7 more)

### Community 3 - "package.json scripts"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, dev, lint, preview, typecheck (+2 more)

### Community 4 - "menu data structure"
Cohesion: 0.25
Nodes (5): menu, MenuCategory, MenuData, MenuItem, RESTAURANT

### Community 5 - "sqlite database module"
Cohesion: 0.43
Nodes (7): exportSqliteDatabaseFile(), getReservations(), getSqliteDb(), insertReservation(), ReservationData, ReservationRecord, saveDbToStorage()

### Community 6 - "package.json dependencies"
Cohesion: 0.29
Nodes (7): dependencies, lucide-react, react, react-dom, sql.js, @supabase/supabase-js, @types/sql.js

### Community 7 - "visitus & services data"
Cohesion: 0.33
Nodes (4): VisitUs(), buildWhatsAppInquiry(), ServiceOffer, serviceOffers

### Community 9 - "app routing configuration"
Cohesion: 0.60
Nodes (3): App(), parsePath(), parseQuery()

### Community 19 - "project metadata docs"
Cohesion: 0.67
Nodes (3): Project Mission, Restaurant Schema JSON-LD, Gebeta Restaurant Website Redesign

## Knowledge Gaps
- **93 isolated node(s):** `template`, `name`, `private`, `version`, `type` (+88 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `package.json devDependencies` to `package.json scripts`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `dependencies` connect `package.json dependencies` to `package.json scripts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `template`, `name`, `private` to the rest of the system?**
  _97 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `tsconfig app configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `tsconfig node configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `package.json devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._