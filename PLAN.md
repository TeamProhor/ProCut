# Translation Implementation Plan

This document outlines the steps to implement a multi-language system (EN/BN) across the ProCut application.

## 1. Core Infrastructure (Completed)
- [x] Create `apps/web/src/utils/translations/index.ts` (Main entry point)
- [x] Create `apps/web/src/utils/translations/home.ts` (Home page translations)
- [x] Create `apps/web/src/components/providers/language-provider.tsx` (Global state)
- [x] Create `apps/web/src/hooks/use-translation.ts` (Translation hook)
- [x] Add `LanguageToggle` component
- [x] Integrate `LanguageProvider` into `RootLayout`

## 2. Page-Specific Implementations

### Home Page (Completed)
- [x] Translate `Header`
- [x] Translate `Hero`
- [x] Translate `Footer`

### Project Page (Completed)
- [x] Create `apps/web/src/utils/translations/projects.ts`
- [x] Map strings for:
    - Search placeholder
    - Sort labels (Created, Modified, Name, Duration)
    - Buttons (New project, Duplicate, Delete, Info)
    - Breadcrumbs (Home, All projects)
    - Empty states (No projects yet, No results found)
- [x] Integrate `useTranslation` into `ProjectsPage` components.
- [x] Translate project dialogs (Delete, Rename, Info).

### Editor Page (Completed)
- [x] Create `apps/web/src/utils/translations/editor.ts`
- [x] Map strings for:
    - Toolbar icons/labels (Split, Duplicate, Delete, etc.)
    - Timeline controls (Zoom, Snapping, Ripple)
    - Export settings (Format, Quality, Audio)
    - Panel titles (Media, Layers, Effects, etc.)
    - Stickers and effects.
    - Project settings and onboarding.
- [x] Integrate `useTranslation` into:
    - `EditorHeader`
    - `AssetsPanel` (Media, Text, Sounds, Stickers, Effects, Settings views)
    - `TimelineToolbar`
    - `ExportButton`
    - `PropertiesPanel` empty view
    - `Onboarding`

### Other Pages
- [ ] Roadmap
- [ ] Contributors
- [ ] Sponsors
- [ ] Blog
- [ ] Brand assets
- [ ] Privacy / Terms

## 3. Localization Best Practices
- [ ] Ensure RTL support if needed (not for Bangla/English).
- [ ] Handle pluralization if necessary.
- [ ] Use `Intl` API for date and number formatting where appropriate.
- [ ] Audit all hardcoded strings.

## 4. UI/UX Consistency
- [x] Place `LanguageToggle` beside the grid/list toggler on the projects page.
- [x] Ensure font supports both character sets (`Hind_Siliguri` is already in use).
