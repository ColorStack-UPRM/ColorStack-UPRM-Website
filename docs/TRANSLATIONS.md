# Adding translations

Text lives in `src/i18n/es.ts` and `src/i18n/en.ts`. When adding content,
use the same key in both files and write the text in each language.

## Adding text to a page

For example, to add a welcome heading, add these entries inside the
existing objects:

```ts
// es.ts
homeWelcomeTitle: 'Bienvenidos a ColorStack UPRM',

// en.ts
homeWelcomeTitle: 'Welcome to ColorStack UPRM',
```

Then use the key in your component:

```tsx
import { useTranslation } from '../i18n/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return <h1>{t('homeWelcomeTitle')}</h1>
}
```

If the component already has `const { t } = useTranslation()`, reuse it.

To change existing wording, edit the value in the translation files.
There's no need to change the component unless you rename the key.
Keep in mind that a shared key may appear in several places.

## Why we call `useTranslation()` in each component

`const { t } = useTranslation()` gets the translation function from our
shared language provider. It also lets React know the component needs
to update when the language changes.

Each component uses the same language setting. We aren't creating a new
translation system every time we call the hook.

Keep the call inside the component, before any conditional returns.
Don't move it into a global variables file.

## A few conventions

- Use descriptive camelCase keys, like `homeWelcomeTitle` or
  `eventsEmptyMessage`.
- Check for an existing key before adding one. Reuse it if the meaning
  is the same; matching wording alone doesn't always mean it should be shared.
- Keep entries in the same order in both files to make them easier to compare.
- Store complete sentences together so each language can use its natural
  word order.
- Remember text in `aria-label`, placeholders, and meaningful image descriptions.

Shared configuration, such as `src/config/navigation.ts`, should store keys:

```ts
{ to: '/about', label: 'about' }
```

Translate them in the component with `t(item.label)`.

## Before opening a PR

Run `npm run lint` and `npm run build`. The build catches missing or
misspelled keys; the dev server doesn't perform the full TypeScript check.

Switch between ESP and EN and check your changes on mobile too.
Longer translations can affect spacing.

Spanish is the default, but the site remembers your last selection.
If it opens in English after a refresh, that's expected.
