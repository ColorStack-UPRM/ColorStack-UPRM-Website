# English and Spanish

Spanish is the default. The header's ESP/EN selector switches languages without
changing the URL. The selected language has a green background. The choice is saved under `colorstack-language` in localStorage.

## Add a string

1. Add a descriptive key and Spanish text to `src/i18n/es.ts`.
2. Add the same key and English text to `src/i18n/en.ts`.
3. Read it in a component:

   ```tsx
   import { useTranslation } from '../i18n/useTranslation'

   export default function Example() {
     const { t } = useTranslation()
     return <p>{t('chapterDescription')}</p>
   }
   ```

## Verify a change

- Run `npm run lint` and `npm run build`.
- On a first visit, check Spanish content and `<html lang="es">`.
- Switch to English, navigate between pages, and refresh: English should persist.
- Switch back and confirm Spanish persists too.
- Check page headings, browser titles, footer, mobile navigation, and the 404 page.
