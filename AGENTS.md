# Gebeta Agent Instructions

This file is the operating manual for AI agents working on this project. Treat it as canonical project memory. Update it whenever a reusable workflow, constraint, pattern, or decision emerges from the work.

---

## Project Mission

Build and maintain a fast, mobile-first, visually impressive static restaurant site for Gebeta Restaurant.

The site must be simple to deploy on weak shared hosting, cPanel, or a raw HTTP static file server.

The broader mission is to use this project as a reusable development system for future low-budget static apps.

---

## Owner Context

* The owner is a student developer with limited budget.
* Static deployment is preferred: shared hosting, cPanel, `dist/` upload, or raw HTTP serving.
* Do not introduce a database, server runtime, paid SaaS dependency, or build-time service unless explicitly requested.
* Favor robust, boring infrastructure and polished frontend craft.
* Mobile experience matters first. Desktop should feel refined, but mobile must never be an afterthought.
* Visual quality should feel premium without making the site fragile or slow.

---

## Non-Negotiable Constraints

* The production build must remain deployable as static files.
* Hash-based routing is preferred because it works without server rewrites.
* Features must degrade gracefully when third-party embeds, maps, fonts, or remote images fail.
* Avoid backend assumptions. Reservations, contact, orders, and inquiries should use static-safe flows such as phone, WhatsApp, `mailto:`, prefilled messages, downloadable files, or third-party links chosen by the owner.
* Do not store private customer data in local storage, public JSON, query strings, or static files.
* Do not add analytics, trackers, remote scripts, or external widgets without explicit approval.
* Keep dependencies minimal. Reuse React, Vite, Tailwind, and Lucide before adding packages.
* Keep the bundle light and verify with `npm run build` before completion.

---

## Current Stack

* React 18
* TypeScript
* Vite
* Tailwind CSS
* Lucide React icons
* Static menu data in `src/data/menu.json`
* Restaurant metadata in `src/data/menu.ts`
* Delivery and catering inquiry data in `src/data/services.ts`
* Hash router in `src/App.tsx`

---

## Deployment Model

The expected deployment artifact is `dist/`.

Safe deployment targets:

* cPanel `public_html`
* shared hosting static folder
* Apache/Nginx static file serving
* raw Node/Python/Go HTTP static server
* Netlify/Vercel/static hosts (optional)

Avoid deployment designs that require:

* server-side rendering
* API routes
* long-running backend processes
* database migrations
* custom rewrite rules
* environment variables at runtime

---

## Agent Execution Loop

Every request should follow this loop:

1. **Understand**

   * Restate the user goal in practical terms.
   * Identify static deployment, mobile UX, performance, and maintainability risks.
   * Inspect relevant files before deciding.

2. **Plan**

   * Break the work into small steps.
   * Suggest a better approach when the request would create fragility, cost, or unnecessary complexity.
   * Keep the plan scoped.

3. **Implement**

   * Make focused edits matching existing patterns.
   * Prefer reusable components and data-driven structures.
   * Avoid unrelated refactors.
   * Update this file when a reusable pattern emerges.

4. **Verify**

   * Run `npm run build`.
   * Run `npm run typecheck` and `npm run lint` when relevant.
   * Visually inspect UI (mobile first).
   * Confirm static deployment compatibility.

5. **Improve**

   * Suggest small useful follow-ups.
   * Do not overbuild.

---

## Autonomy Rules

The agent must behave like a senior engineer, not a code executor.

If a request:

* introduces fragility
* hurts performance
* breaks static deployment
* adds unnecessary complexity

Then:

1. Propose a better alternative
2. Explain tradeoffs briefly
3. Proceed with the improved approach unless the user insists

---

## Agent Memory Evolution Rules

This file must evolve over time.

When a reusable pattern, mistake, or optimization is discovered:

1. Extract it into a rule
2. Add it to the appropriate section
3. Refine instead of duplicating rules

Trigger updates when:

* A workaround was required
* A bug revealed a weak pattern
* A UI improvement increased clarity
* A performance issue was solved

---

## Standard Task Template

```text
Goal:
- What the user wants

Constraints:
- Static-safe?
- Mobile-first?
- No backend?
- Performance-sensitive?

Plan:
1. Inspect files
2. Make changes
3. Verify
4. Report

Verification:
- Build/typecheck/lint
- UI check
- Static compatibility
```

---

## Feature Design Principles

* Build reusable patterns, not one-offs
* Prefer data + components over duplication
* Centralize restaurant data
* Keep sections modular and reorderable
* Use Lucide icons for clarity
* Use real visuals (food, space, people)

---

## Static-Safe Interaction Patterns

Preferred:

* `tel:` links
* WhatsApp prefilled links
* Google Maps directions
* Embedded maps with fallback
* Local JSON-driven UI
* Static downloads (PDF, menu)
* Email-based forms

Avoid:

* custom backend APIs
* database writes
* storing user data
* features requiring server config

---

## Mobile-First UX Rules

* Design mobile first
* Prioritize: Menu, Directions, Call, WhatsApp
* Avoid overflow and broken layouts
* No hover-only interactions
* Tap targets ≥ 44px
* Maintain contrast and readability

---

## Conversion-Focused UX Rules

Every section must help answer:

* What food is offered?
* Is it appealing?
* Where is it located?
* How do I contact or visit?

If not → remove or redesign.

Prioritize:

* Menu visibility
* Strong CTAs
* Real imagery
* Fast decisions

Avoid:

* Generic marketing fluff
* Decorative-only sections
* Overcomplicated layouts

---

## Visual Quality Rules

* First screen must communicate identity instantly
* Use real images over abstract design
* Avoid flat/generic gradients
* Maintain visual hierarchy
* Avoid nested cards
* Keep motion subtle

---

## Performance Rules

* Optimize images
* Do not crop out logos, restaurant signage, text, or essential subject content when editing or resizing images
* Lazy-load below fold
* Minimize fonts
* Avoid heavy dependencies
* Keep JS simple
* Check bundle size

---

## Accessibility Rules

* Semantic HTML
* Proper headings
* Alt text for images
* Accessible labels for icons
* Keyboard navigation
* Visible focus states

---

## Code Style Rules

* Follow React + TS + Tailwind patterns
* Keep props small and clear
* Avoid over-abstraction
* Do not modify unrelated files
* Keep comments minimal

---

## Verification Commands

```bash
npm run build
npm run typecheck
npm run lint
npm run dev
```

---

## Known Codebase Notes

* Static-first architecture is intentional
* Hash routing ensures compatibility
* Database-related files must not be relied on
* Fix encoding issues when encountered

---

## Structural Improvement Backlog

(Do not implement unless requested)

* Remove DB-based reservation logic
* Centralize CTAs and services
* Create reusable UI components (SectionHeader, CTA)
* Replace stock images with real assets
* Add mobile QA checklist

---

## Final Principle

This project is not just a restaurant site.

It is a **template for building high-quality, low-cost, static web apps**.

Every decision should improve:

* reusability
* simplicity
* performance
* developer workflow

The agent’s job is to build features AND refine the system.
